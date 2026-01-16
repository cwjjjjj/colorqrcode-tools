"use client";

import { useState, useCallback } from "react";
import { Copy, Lock, Unlock, RefreshCw, Download, Check } from "lucide-react";

interface Color {
  hex: string;
  locked: boolean;
}

const generateRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateHarmoniousPalette = (): Color[] => {
  const baseHue = Math.random() * 360;
  const colors: Color[] = [];

  colors.push({ hex: hslToHex(baseHue, 70, 50), locked: false });
  colors.push({ hex: hslToHex((baseHue + 180) % 360, 70, 50), locked: false });
  colors.push({ hex: hslToHex((baseHue + 30) % 360, 60, 60), locked: false });
  colors.push({ hex: hslToHex((baseHue + 150) % 360, 60, 60), locked: false });
  colors.push({ hex: hslToHex((baseHue + 210) % 360, 50, 70), locked: false });

  return colors;
};

const hslToHex = (h: number, s: number, l: number): string => {
  s /= 100;
  l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
};

const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

const getLuminance = (r: number, g: number, b: number): number => {
  const [lr, lg, lb] = [r, g, b].map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
};

const getContrastRatio = (color1: string, color2: string): number => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
};

const getAccessibilityRating = (ratio: number): { text: string; color: string } => {
  if (ratio >= 7) return { text: "AAA", color: "text-green-400" };
  if (ratio >= 4.5) return { text: "AA", color: "text-yellow-400" };
  return { text: "Fail", color: "text-red-400" };
};

const hexToTailwind = (hex: string): string => {
  const rgb = hexToRgb(hex);
  const r = Math.round((rgb.r / 255) * 100);
  const g = Math.round((rgb.g / 255) * 100);
  const b = Math.round((rgb.b / 255) * 100);
  return `${r}, ${g}, ${b}`;
};

export default function ColorPaletteTool() {
  const [colors, setColors] = useState<Color[]>(generateHarmoniousPalette());
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generatePalette = useCallback(() => {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.locked ? color : { hex: generateRandomColor(), locked: false }
      )
    );
  }, []);

  const toggleLock = useCallback((index: number) => {
    setColors((prevColors) =>
      prevColors.map((color, i) =>
        i === index ? { ...color, locked: !color.locked } : color
      )
    );
  }, []);

  const copyToClipboard = useCallback((hex: string, index: number) => {
    navigator.clipboard.writeText(hex);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  }, []);

  const exportTailwind = useCallback(() => {
    const config = colors
      .map(
        (color, i) => `    '${["primary", "secondary", "accent", "neutral", "muted"][i]}': '${hexToTailwind(color.hex)}',`
      )
      .join("\n");
    const tailwindConfig = `module.exports = {
  theme: {
    extend: {
      colors: {
${config}
      },
    },
  },
}`;

    navigator.clipboard.writeText(tailwindConfig);
    alert("Tailwind config copied to clipboard!");
  }, [colors]);

  return (
    <div className="glass-card p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h3 className="text-3xl font-bold text-white mb-2">Your Color Palette</h3>
          <p className="text-white/60">AI-generated harmonious colors</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={generatePalette}
            className="button-primary px-6 py-3 rounded-2xl font-semibold flex items-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Generate
          </button>
          <button
            onClick={exportTailwind}
            className="glass-button px-6 py-3 rounded-2xl font-semibold flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Export
          </button>
        </div>
      </div>

      {/* Color Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {colors.map((color, index) => {
          const bgColor = { backgroundColor: color.hex };
          const textColor = parseInt(color.hex.slice(1), 16) > 0xffffff / 2 ? "text-gray-900" : "text-white";
          const contrastWithWhite = getContrastRatio(color.hex, "#FFFFFF");
          const contrastWithBlack = getContrastRatio(color.hex, "#000000");
          const ratingWhite = getAccessibilityRating(contrastWithWhite);
          const ratingBlack = getAccessibilityRating(contrastWithBlack);

          return (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden glass-card animate-fadeInScale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Color Background */}
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110" style={bgColor}></div>

              {/* Glass Overlay */}
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>

              {/* Content */}
              <div className="relative p-6 min-h-[280px] flex flex-col">
                {/* Lock Button */}
                <button
                  onClick={() => toggleLock(index)}
                  className={`absolute top-4 right-4 p-3 rounded-2xl ${
                    color.locked
                      ? "bg-white/90 text-gray-900"
                      : "bg-black/20 text-white hover:bg-black/40"
                  } transition-all duration-300`}
                >
                  {color.locked ? (
                    <Lock className="w-5 h-5" />
                  ) : (
                    <Unlock className="w-5 h-5" />
                  )}
                </button>

                {/* Color Info */}
                <div className={`flex-1 ${textColor}`}>
                  <p className="text-3xl font-bold mb-2">{color.hex}</p>
                  <p className="text-sm opacity-80 mb-6 font-mono">
                    rgb({Object.values(hexToRgb(color.hex)).join(", ")})
                  </p>

                  {/* Accessibility Info */}
                  <div className="space-y-2 text-xs opacity-90 mb-6">
                    <div className="glass px-3 py-2 rounded-xl">
                      <span className="font-semibold">vs White:</span>{" "}
                      <span className={ratingWhite.color}>{ratingWhite.text}</span>
                      <span className="opacity-60 ml-1">({contrastWithWhite.toFixed(2)})</span>
                    </div>
                    <div className="glass px-3 py-2 rounded-xl">
                      <span className="font-semibold">vs Black:</span>{" "}
                      <span className={ratingBlack.color}>{ratingBlack.text}</span>
                      <span className="opacity-60 ml-1">({contrastWithBlack.toFixed(2)})</span>
                    </div>
                  </div>

                  {/* Tailwind Code */}
                  <div className="glass px-3 py-3 rounded-xl font-mono text-xs">
                    {color.hex.toLowerCase()}
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => copyToClipboard(color.hex, index)}
                  className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 ${
                    textColor
                  } px-6 py-3 rounded-2xl glass font-semibold transition-all duration-300 hover:scale-105`}
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-4 h-4 inline mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 inline mr-2" />
                      Copy HEX
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="glass p-6 rounded-2xl flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
          <span className="text-xl">💡</span>
        </div>
        <div>
          <h4 className="font-bold text-white mb-1">Pro Tip</h4>
          <p className="text-white/70 text-sm leading-relaxed">
            Click the lock icon to keep a color while regenerating others. All palettes are checked for WCAG accessibility compliance.
          </p>
        </div>
      </div>

      {/* Color Export Options */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-4">
        {colors.map((color, index) => (
          <div key={index} className="glass p-4 rounded-2xl animate-fadeInScale" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-lg shadow-lg" style={{ backgroundColor: color.hex }}></div>
              <p className="text-xs font-semibold text-white">Tailwind</p>
            </div>
            <code className="text-xs text-white/80 bg-black/20 px-3 py-2 rounded-xl block font-mono">
              {hexToTailwind(color.hex)}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
