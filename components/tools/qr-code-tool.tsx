"use client";

import { useState, useCallback, useRef } from "react";
import { Download, RefreshCw, QrCode } from "lucide-react";
import QRCodeLib from "qrcode";

type QRCodeType = "url" | "wifi" | "vcard" | "text";

interface WiFiData {
  ssid: string;
  password: string;
  security: "WPA" | "WEP" | "nopass";
}

interface VCardData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  organization: string;
}

export default function QRCodeTool() {
  const [qrType, setQrType] = useState<QRCodeType>("url");
  const [qrData, setQrData] = useState("https://colorqrcode.com");
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [wifiData, setWifiData] = useState<WiFiData>({
    ssid: "",
    password: "",
    security: "WPA",
  });

  const [vCardData, setVCardData] = useState<VCardData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    organization: "",
  });

  const generateQRCode = useCallback(async () => {
    setIsGenerating(true);
    try {
      let data = qrData;

      if (qrType === "wifi") {
        const { ssid, password, security } = wifiData;
        data = `WIFI:T:${security};S:${ssid};P:${password};;`;
      } else if (qrType === "vcard") {
        const { firstName, lastName, phone, email, organization } = vCardData;
        data = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName}
FN:${firstName} ${lastName}
ORG:${organization}
TEL:${phone}
EMAIL:${email}
END:VCARD`;
      }

      const url = await QRCodeLib.toDataURL(data, {
        width: 400,
        margin: 2,
        color: {
          dark: foregroundColor,
          light: backgroundColor,
        },
      });

      setQrCodeUrl(url);
    } catch (error) {
      console.error("Error generating QR code:", error);
    } finally {
      setIsGenerating(false);
    }
  }, [qrType, qrData, wifiData, vCardData, foregroundColor, backgroundColor]);

  const downloadQRCode = useCallback(
    async (format: "png" | "svg") => {
      if (!qrData && !wifiData.ssid && !vCardData.firstName) {
        alert("Please enter data first");
        return;
      }

      try {
        let data = qrData;

        if (qrType === "wifi") {
          const { ssid, password, security } = wifiData;
          data = `WIFI:T:${security};S:${ssid};P:${password};;`;
        } else if (qrType === "vcard") {
          const { firstName, lastName, phone, email, organization } = vCardData;
          data = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName}
FN:${firstName} ${lastName}
ORG:${organization}
TEL:${phone}
EMAIL:${email}
END:VCARD`;
        }

        if (format === "svg") {
          const svgString = await QRCodeLib.toString(data, {
            width: 400,
            margin: 2,
            color: {
              dark: foregroundColor,
              light: backgroundColor,
            },
            type: "svg",
          });

          const blob = new Blob([svgString], { type: "image/svg+xml" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = `qrcode-${Date.now()}.svg`;
          link.click();
          URL.revokeObjectURL(url);
        } else {
          const link = document.createElement("a");
          link.href = qrCodeUrl;
          link.download = `qrcode-${Date.now()}.png`;
          link.click();
        }
      } catch (error) {
        console.error("Error downloading QR code:", error);
      }
    },
    [qrType, qrData, wifiData, vCardData, foregroundColor, backgroundColor, qrCodeUrl]
  );

  const renderInputFields = () => {
    switch (qrType) {
      case "url":
        return (
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white mb-3">Website URL</label>
            <input
              type="url"
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              placeholder="https://example.com"
              className="glass-input w-full px-5 py-4 rounded-2xl text-white placeholder-white/40"
            />
          </div>
        );

      case "wifi":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Network Name (SSID)</label>
              <input
                type="text"
                value={wifiData.ssid}
                onChange={(e) => setWifiData({ ...wifiData, ssid: e.target.value })}
                placeholder="MyWiFiNetwork"
                className="glass-input w-full px-5 py-4 rounded-2xl text-white placeholder-white/40"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Password</label>
              <input
                type="text"
                value={wifiData.password}
                onChange={(e) => setWifiData({ ...wifiData, password: e.target.value })}
                placeholder="WiFiPassword"
                className="glass-input w-full px-5 py-4 rounded-2xl text-white placeholder-white/40"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Security Type</label>
              <select
                value={wifiData.security}
                onChange={(e) => setWifiData({ ...wifiData, security: e.target.value as any })}
                className="glass-input w-full px-5 py-4 rounded-2xl text-white"
              >
                <option value="WPA" className="bg-gray-900">WPA/WPA2</option>
                <option value="WEP" className="bg-gray-900">WEP</option>
                <option value="nopass" className="bg-gray-900">No Password</option>
              </select>
            </div>
          </div>
        );

      case "vcard":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-white mb-3">First Name</label>
                <input
                  type="text"
                  value={vCardData.firstName}
                  onChange={(e) => setVCardData({ ...vCardData, firstName: e.target.value })}
                  placeholder="John"
                  className="glass-input w-full px-5 py-4 rounded-2xl text-white placeholder-white/40"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-3">Last Name</label>
                <input
                  type="text"
                  value={vCardData.lastName}
                  onChange={(e) => setVCardData({ ...vCardData, lastName: e.target.value })}
                  placeholder="Doe"
                  className="glass-input w-full px-5 py-4 rounded-2xl text-white placeholder-white/40"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Phone</label>
              <input
                type="tel"
                value={vCardData.phone}
                onChange={(e) => setVCardData({ ...vCardData, phone: e.target.value })}
                placeholder="+1234567890"
                className="glass-input w-full px-5 py-4 rounded-2xl text-white placeholder-white/40"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Email</label>
              <input
                type="email"
                value={vCardData.email}
                onChange={(e) => setVCardData({ ...vCardData, email: e.target.value })}
                placeholder="john@example.com"
                className="glass-input w-full px-5 py-4 rounded-2xl text-white placeholder-white/40"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-3">Organization</label>
              <input
                type="text"
                value={vCardData.organization}
                onChange={(e) => setVCardData({ ...vCardData, organization: e.target.value })}
                placeholder="Company Name"
                className="glass-input w-full px-5 py-4 rounded-2xl text-white placeholder-white/40"
              />
            </div>
          </div>
        );

      case "text":
        return (
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white mb-3">Text Message</label>
            <textarea
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              placeholder="Enter your text here..."
              rows={5}
              className="glass-input w-full px-5 py-4 rounded-2xl text-white placeholder-white/40 resize-none"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="glass-card p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Input */}
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white mb-3">QR Code Type</label>
            <select
              value={qrType}
              onChange={(e) => setQrType(e.target.value as QRCodeType)}
              className="glass-input w-full px-5 py-4 rounded-2xl text-white"
            >
              <option value="url" className="bg-gray-900">🔗 Website URL</option>
              <option value="wifi" className="bg-gray-900">📶 WiFi Network</option>
              <option value="vcard" className="bg-gray-900">👤 Contact (vCard)</option>
              <option value="text" className="bg-gray-900">📝 Plain Text</option>
            </select>
          </div>

          {renderInputFields()}

          {/* Color Customization */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white mb-3">Foreground</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={foregroundColor}
                  onChange={(e) => setForegroundColor(e.target.value)}
                  className="w-14 h-14 rounded-2xl cursor-pointer border-2 border-white/20"
                />
                <input
                  type="text"
                  value={foregroundColor}
                  onChange={(e) => setForegroundColor(e.target.value)}
                  className="glass-input flex-1 px-4 py-3 rounded-xl text-white text-sm font-mono"
                  placeholder="#000000"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-white mb-3">Background</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-14 h-14 rounded-2xl cursor-pointer border-2 border-white/20"
                />
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="glass-input flex-1 px-4 py-3 rounded-xl text-white text-sm font-mono"
                  placeholder="#FFFFFF"
                />
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateQRCode}
            disabled={isGenerating}
            className="w-full button-primary px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 text-lg"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <QrCode className="w-5 h-5" />
                Generate QR Code
              </>
            )}
          </button>
        </div>

        {/* Right Column - Preview */}
        <div className="flex flex-col items-center justify-center glass p-8 rounded-3xl">
          {qrCodeUrl ? (
            <div className="animate-fadeInScale">
              <div className="bg-white p-6 rounded-3xl shadow-2xl mb-6">
                <img src={qrCodeUrl} alt="QR Code" className="w-64 h-64" />
              </div>

              {/* Download Buttons */}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => downloadQRCode("png")}
                  className="button-primary px-6 py-3 rounded-2xl font-semibold flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  PNG
                </button>
                <button
                  onClick={() => downloadQRCode("svg")}
                  className="glass-button px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 text-white"
                >
                  <Download className="w-5 h-5" />
                  SVG
                </button>
              </div>

              <div className="mt-6 glass px-4 py-3 rounded-2xl flex items-center gap-3">
                <span className="text-green-400 text-lg">✓</span>
                <p className="text-white/80 text-sm">High resolution • Print ready</p>
              </div>
            </div>
          ) : (
            <div className="text-center text-white/40">
              <div className="w-32 h-32 mx-auto mb-6 rounded-3xl glass flex items-center justify-center">
                <QrCode className="w-16 h-16 opacity-50" />
              </div>
              <p className="text-lg">Enter your data and click generate</p>
            </div>
          )}
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 glass p-6 rounded-2xl flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
          <span className="text-xl">💡</span>
        </div>
        <div>
          <h4 className="font-bold text-white mb-2">Pro Tips</h4>
          <ul className="text-white/70 text-sm space-y-2">
            <li>• Use high contrast colors for best scanning results</li>
            <li>• Test QR codes before printing or publishing</li>
            <li>• WiFi QR codes work best with WPA2 security</li>
            <li>• vCard QR codes are perfect for business cards</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
