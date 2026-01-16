import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, QrCode, Download, Wifi, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Create QR Codes - Complete Tutorial",
  description: "Learn how to create custom QR codes for WiFi, vCard, URLs, and more. Step-by-step guide with examples and best practices.",
  keywords: [
    "how to create qr codes",
    "qr code tutorial",
    "wifi qr code generator",
    "vcard qr code",
    "custom qr code",
  ],
  alternates: {
    canonical: "https://colorqrcode.com/guides/how-to-create-qr-codes",
  },
};

export default function HowToCreateQRCodes() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              <a href="/">ColorQRCode Tools</a>
            </h1>
            <nav className="flex gap-6">
              <a href="/tools/color-palette" className="hover:text-primary-600">
                Color Palette
              </a>
              <a href="/tools/qr-generator" className="hover:text-primary-600">
                QR Generator
              </a>
              <a href="/guides" className="text-primary-600">
                Guides
              </a>
            </nav>
          </div>
        </div>
      </header>

      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <Link href="/guides" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Link>

            {/* Hero */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <QrCode className="w-10 h-10 text-primary-600" />
                <h1 className="text-4xl font-bold">How to Create Custom QR Codes</h1>
              </div>
              <p className="text-xl text-gray-600">
                A complete guide to creating QR codes for any purpose - WiFi, vCard, URLs, and more
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <span>⏱️ 6 min read</span>
                <span>•</span>
                <span>Last updated: January 16, 2025</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2>What Are QR Codes?</h2>
              <p>
                QR codes (Quick Response codes) are two-dimensional barcodes that can be scanned with
                smartphones to access information instantly. They're widely used for marketing, sharing
                contact information, and providing easy access to websites and WiFi networks.
              </p>

              <h2>Types of QR Codes</h2>

              <h3>1. Website URL QR Codes</h3>
              <p>
                The most common type. Simply enter any website URL, and users who scan the QR code will be
                directed to that website. Perfect for:
              </p>
              <ul>
                <li>Marketing materials</li>
                <li>Business cards</li>
                <li>Product packaging</li>
                <li>Event posters</li>
              </ul>

              <h3>2. WiFi QR Codes</h3>
              <p>
                Let guests connect to your WiFi without sharing the password. When scanned, the QR code
                automatically enters the network name and password. Ideal for:
              </p>
              <ul>
                <li>Cafes and restaurants</li>
                <li>Hotels and Airbnbs</li>
                <li>Offices</li>
                <li>Co-working spaces</li>
              </ul>

              <h3>3. vCard QR Codes</h3>
              <p>
                Share contact information instantly. When scanned, the QR code adds your contact information
                to the user's phone. Great for:
              </p>
              <ul>
                <li>Business cards</li>
                <li>Networking events</li>
                <li>Conferences</li>
                <li>Sales meetings</li>
              </ul>

              <h3>4. Plain Text QR Codes</h3>
              <p>
                Encode any text message. Useful for:
              </p>
              <ul>
                <li>Special offers</li>
                <li>Coupon codes</li>
                <li>Short messages</li>
                <li>Phone numbers</li>
              </ul>

              <h2>How to Create QR Codes - Step by Step</h2>

              <h3>Step 1: Choose Your QR Code Type</h3>
              <p>
                Visit our <a href="/tools/qr-generator">QR Code Generator</a> and select the type of QR code
                you want to create from the dropdown menu.
              </p>

              <h3>Step 2: Enter Your Data</h3>
              <p>
                Depending on the type chosen, you'll see different input fields:
              </p>

              <div className="bg-gray-50 border-l-4 border-gray-500 p-4 my-4">
                <h4 className="font-semibold">Website URL:</h4>
                <p>Enter the full URL including https:// (e.g., https://colorqrcode.com)</p>

                <h4 className="font-semibold mt-4">WiFi:</h4>
                <p>
                  Enter your network name (SSID), password, and select security type (WPA/WEP/nopass).
                  Make sure the password is correct!
                </p>

                <h4 className="font-semibold mt-4">vCard:</h4>
                <p>
                  Fill in first name, last name, phone, email, and organization. The more complete
                  the information, the more useful the QR code.
                </p>

                <h4 className="font-semibold mt-4">Plain Text:</h4>
                <p>Type any message or information you want to encode.</p>
              </div>

              <h3>Step 3: Customize Colors (Optional)</h3>
              <p>
                Match your brand colors by customizing the foreground and background colors. Use the color
                pickers to choose your colors, or enter HEX codes directly.
              </p>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-4">
                <p className="font-semibold">⚠️ Important:</p>
                <p>
                  Always ensure good contrast between foreground and background colors for reliable
                  scanning. Dark foreground on light background (or vice versa) works best.
                </p>
              </div>

              <h3>Step 4: Generate Your QR Code</h3>
              <p>
                Click the "Generate QR Code" button. Your QR code will appear instantly in the preview area.
              </p>

              <h3>Step 5: Download</h3>
              <p>
                Choose your preferred format:
              </p>
              <ul>
                <li><strong>PNG:</strong> Best for digital use and printing</li>
                <li><strong>SVG:</strong> Best for scaling without quality loss</li>
              </ul>
              <p>
                Click the download button (PNG or SVG) to save the QR code to your device.
              </p>

              <h2>Best Practices for QR Codes</h2>

              <h3>1. Size Matters</h3>
              <p>
                For reliable scanning, use these minimum sizes:
              </p>
              <ul>
                <li><strong>Print materials:</strong> 2x2 cm (0.8x0.8 inches) minimum</li>
                <li><strong>Posters:</strong> 3x3 cm or larger</li>
                <li><strong>Billboards:</strong> 10x10 cm or larger</li>
              </ul>

              <h3>2. Add White Space</h3>
              <p>
                Our generator automatically adds a margin around the QR code. This "quiet zone" is essential
                for reliable scanning. Don't crop it out!
              </p>

              <h3>3. Test Before Printing</h3>
              <p>
                Always test your QR code with multiple smartphones (iPhone and Android) before mass
                printing or distribution.
              </p>

              <h3>4. Use High Contrast</h3>
              <p>
                Dark colors on light backgrounds (or vice versa) scan best. Avoid low-contrast combinations
                like dark blue on black.
              </p>

              <h3>5. Place Strategically</h3>
              <p>
                Position QR codes where they're easily accessible and scannable. Consider eye level and
                lighting conditions.
              </p>

              <h2>Common Use Case Examples</h2>

              <h3>Restaurant Menu</h3>
              <p>
                Create a QR code that links to your online menu. Place it on table tents or receipts. No need
                to reprint menus when prices change!
              </p>

              <h3>Business Card</h3>
              <p>
                Add a vCard QR code to your business card. Scanners instantly have your contact information
                saved in their phone.
              </p>

              <h3>Event Registration</h3>
              <p>
                Link QR codes to registration forms. Perfect for conferences, workshops, and meetups.
              </p>

              <h3>WiFi Access</h3>
              <p>
                Display a WiFi QR code in your space. Guests can connect without asking for the password.
              </p>

              <h2>Troubleshooting</h2>

              <h3>Q: Why won't my QR code scan?</h3>
              <p>
                <strong>A:</strong> Common issues include:
              </p>
              <ul>
                <li>Insufficient contrast between colors</li>
                <li>QR code too small</li>
                <li>Poor lighting conditions</li>
                <li>Damage or distortion of the QR code</li>
              </ul>
              <p>
                Try regenerating with default black and white colors, increase the size, and test in better
                lighting.
              </p>

              <h3>Q: Can I edit a QR code after creating it?</h3>
              <p>
                <strong>A:</strong> No. Static QR codes contain the data directly. To change the content, you must
                generate a new QR code. Consider using a URL QR code if you need to update content frequently
                - just update the destination webpage.
              </p>

              <h3>Q: Do QR codes expire?</h3>
              <p>
                <strong>A:</strong> Our static QR codes don't expire. They will work as long as the linked content
                (website, WiFi network, etc.) remains active. Dynamic QR codes (not supported here) can be
                updated but require paid services.
              </p>

              <h3>Q: Are these QR codes free for commercial use?</h3>
              <p>
                <strong>A:</strong> Yes! All QR codes generated by our tool are free for personal and commercial
                use with no attribution required.
              </p>

              <h2>Next Steps</h2>
              <p>
                Once you've created your QR code, check out our related guides:
              </p>
              <ul>
                <li><a href="/guides/wifi-qr-code-generator">WiFi QR Code Generator Guide</a></li>
                <li><a href="/guides/vcard-qr-code-tutorial">vCard QR Code Tutorial</a></li>
                <li><a href="/tools/color-palette">Color Palette Generator</a></li>
              </ul>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mt-8">
                <h3 className="font-bold mb-2">🚀 Ready to Create Your QR Code?</h3>
                <p className="mb-4">
                  Generate custom QR codes for any purpose with our free QR Code Generator.
                </p>
                <a
                  href="/tools/qr-generator"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
                >
                  Create QR Code Now →
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
