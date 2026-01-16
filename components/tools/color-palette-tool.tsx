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
  // Simple algorithm: generate base color, then create harmonious variations
  const baseHue = Math.random() * 360;
  const colors: Color[] = [];

  // Complementary colors
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
  if (ratio >= 7) return { text: "AAA", color: "text-green-600" };
  if (ratio >= 4.5) return { text: "AA", color: "text-yellow-600" };
  return { text: "Fail", color: "text-red-600" };
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
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Your Color Palette</h3>
        <div className="flex gap-2">
          <button
            onClick={generatePalette}
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
          >
            <RefreshCw className="w-4 h-4" />
            Generate Palette
          </button>
          <button
            onClick={exportTailwind}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
          >
            <Download className="w-4 h-4" />
            Export Tailwind
          </button>
        </div>
      </div>

      {/* Color Cards */}
      <div className="grid grid-cols-5 gap-4 mb-6">
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
              className="relative group rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
              style={bgColor}
            >
              {/* Lock Button */}
              <button
                onClick={() => toggleLock(index)}
                className={`absolute top-2 right-2 p-2 rounded-full ${
                  color.locked
                    ? "bg-white text-gray-900"
                    : "bg-black/20 text-white hover:bg-black/40"
                } transition`}
              >
                {color.locked ? (
                  <Lock className="w-4 h-4" />
                ) : (
                  <Unlock className="w-4 h-4" />
                )}
              </button>

              {/* Color Info */}
              <div className={`p-6 ${textColor}`}>
                <p className="text-2xl font-bold mb-2">{color.hex}</p>
                <p className="text-sm opacity-80 mb-4">
                  rgb({Object.values(hexToRgb(color.hex)).join(", ")})
                </p>

                {/* Accessibility Info */}
                <div className="text-xs space-y-1 opacity-90">
                  <p>vs White: {ratingWhite.text} ({contrastWithWhite.toFixed(2)})</p>
                  <p>vs Black: {ratingBlack.text} ({contrastWithBlack.toFixed(2)})</p>
                </div>

                {/* Tailwind Code */}
                <div className="mt-4 p-2 bg-black/20 rounded text-xs font-mono">
                  {color.hex.toLowerCase()}
                </div>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => copyToClipboard(color.hex, index)}
                className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 ${
                  textColor
                } opacity-0 group-hover:opacity-100 transition px-4 py-2 rounded-lg bg-black/40 hover:bg-black/60`}
              >
                {copiedIndex === index ? (
                  <>
                    <Check className="w-4 h-4 inline mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 inline mr-1" />
                    Copy
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>Tip:</strong> Click the lock icon to keep a color while regenerating others.
          All palettes are checked for WCAG accessibility compliance.
        </p>
      </div>

      {/* Color Export Options */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {colors.map((color, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs font-semibold text-gray-600 mb-1">Tailwind:</p>
            <code className="text-xs bg-white px-2 py-1 rounded block">
              {hexToTailwind(color.hex)}
            </code>
          </div>
        ))}
      </div>
    </div>
  );
}
