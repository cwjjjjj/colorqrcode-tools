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

  // WiFi data
  const [wifiData, setWifiData] = useState<WiFiData>({
    ssid: "",
    password: "",
    security: "WPA",
  });

  // vCard data
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

      // Generate QR code as data URL
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
          <div>
            <label className="block text-sm font-semibold mb-2">Website URL</label>
            <input
              type="url"
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
            />
          </div>
        );

      case "wifi":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Network Name (SSID)</label>
              <input
                type="text"
                value={wifiData.ssid}
                onChange={(e) => setWifiData({ ...wifiData, ssid: e.target.value })}
                placeholder="MyWiFiNetwork"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="text"
                value={wifiData.password}
                onChange={(e) => setWifiData({ ...wifiData, password: e.target.value })}
                placeholder="WiFiPassword"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Security Type</label>
              <select
                value={wifiData.security}
                onChange={(e) => setWifiData({ ...wifiData, security: e.target.value as any })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">No Password</option>
              </select>
            </div>
          </div>
        );

      case "vcard":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">First Name</label>
                <input
                  type="text"
                  value={vCardData.firstName}
                  onChange={(e) => setVCardData({ ...vCardData, firstName: e.target.value })}
                  placeholder="John"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Last Name</label>
                <input
                  type="text"
                  value={vCardData.lastName}
                  onChange={(e) => setVCardData({ ...vCardData, lastName: e.target.value })}
                  placeholder="Doe"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Phone</label>
              <input
                type="tel"
                value={vCardData.phone}
                onChange={(e) => setVCardData({ ...vCardData, phone: e.target.value })}
                placeholder="+1234567890"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={vCardData.email}
                onChange={(e) => setVCardData({ ...vCardData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Organization</label>
              <input
                type="text"
                value={vCardData.organization}
                onChange={(e) => setVCardData({ ...vCardData, organization: e.target.value })}
                placeholder="Company Name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        );

      case "text":
        return (
          <div>
            <label className="block text-sm font-semibold mb-2">Text Message</label>
            <textarea
              value={qrData}
              onChange={(e) => setQrData(e.target.value)}
              placeholder="Enter your text here..."
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Input */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">QR Code Type</label>
            <select
              value={qrType}
              onChange={(e) => setQrType(e.target.value as QRCodeType)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="url">🔗 Website URL</option>
              <option value="wifi">📶 WiFi Network</option>
              <option value="vcard">👤 Contact (vCard)</option>
              <option value="text">📝 Plain Text</option>
            </select>
          </div>

          {renderInputFields()}

          {/* Color Customization */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Foreground Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={foregroundColor}
                  onChange={(e) => setForegroundColor(e.target.value)}
                  className="w-12 h-12 border rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={foregroundColor}
                  onChange={(e) => setForegroundColor(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-lg text-sm"
                  placeholder="#000000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Background Color</label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-12 h-12 border rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="flex-1 px-3 py-2 border rounded-lg text-sm"
                  placeholder="#FFFFFF"
                />
              </div>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={generateQRCode}
            disabled={isGenerating}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <QrCode className="w-4 h-4" />
                Generate QR Code
              </>
            )}
          </button>
        </div>

        {/* Right Column - Preview */}
        <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-8">
          {qrCodeUrl ? (
            <>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src={qrCodeUrl} alt="QR Code" className="w-64 h-64" />
              </div>

              {/* Download Buttons */}
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => downloadQRCode("png")}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <Download className="w-4 h-4" />
                  PNG
                </button>
                <button
                  onClick={() => downloadQRCode("svg")}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  <Download className="w-4 h-4" />
                  SVG
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-600 text-center">
                Scan to test • High resolution • Print ready
              </p>
            </>
          ) : (
            <div className="text-center text-gray-400">
              <QrCode className="w-24 h-24 mx-auto mb-4 opacity-50" />
              <p>Enter your data and click generate to create QR code</p>
            </div>
          )}
        </div>
      </div>

      {/* Tips */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <strong>💡 Tips:</strong> For best results, use high contrast colors and test QR codes before
          printing. WiFi QR codes work best with WPA2 security. vCard QR codes are perfect for business cards.
        </p>
      </div>
    </div>
  );
}
