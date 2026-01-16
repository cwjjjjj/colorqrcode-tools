import { generateToolMetadata, generateToolSchema } from "@/lib/seo";
import QRCodeTool from "@/components/tools/qr-code-tool";

export const metadata = generateToolMetadata({
  title: "QR Code Generator - Free Custom QR Codes with Logo & Colors",
  description: "Create custom QR codes with logos, colors, and different formats. Free QR code generator for WiFi, vCard, URLs, and more. Instant download as PNG/SVG.",
  keywords: [
    "qr code generator",
    "free qr code generator",
    "custom qr code",
    "qr code with logo",
    "wifi qr code",
    "vcard qr code",
    "qr code maker",
  ],
  path: "/tools/qr-generator",
});

export default function QRCodePage() {
  const schema = generateToolSchema({
    name: "QR Code Generator",
    description: "Free QR code generator with custom colors, logos, WiFi, vCard support. Download as PNG or SVG.",
    category: "UtilitiesApplication",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
                <a href="/tools/qr-generator" className="text-primary-600">
                  QR Generator
                </a>
                <a href="/guides" className="hover:text-primary-600">
                  Guides
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Tool Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">
                QR Code Generator
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Create custom QR codes with logos, colors, and different formats. 100% free with unlimited downloads.
              </p>

              {/* Tool Component */}
              <QRCodeTool />

              {/* Features */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold text-lg mb-2">🎨 Custom Colors</h3>
                  <p className="text-gray-600 text-sm">
                    Personalize your QR codes with custom foreground and background colors
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold text-lg mb-2">📱 Multiple Formats</h3>
                  <p className="text-gray-600 text-sm">
                    Download as PNG or SVG. Perfect for print and digital use
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold text-lg mb-2">⚡ Instant Download</h3>
                  <p className="text-gray-600 text-sm">
                    Generate and download high-resolution QR codes in seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose">
              <h2>About QR Code Generator</h2>
              <p>
                Our free QR code generator helps you create custom QR codes for any purpose. Whether you need
                a QR code for your website, WiFi network, business card, or marketing campaign, our tool makes
                it easy to generate professional QR codes in seconds.
              </p>

              <h3>Features</h3>
              <ul>
                <li><strong>Custom Colors:</strong> Match your brand colors with foreground and background customization</li>
                <li><strong>Multiple Formats:</strong> WiFi, vCard, URL, Plain Text, and more</li>
                <li><strong>High Resolution:</strong> Download as PNG or SVG in any size you need</li>
                <li><strong>Instant Generation:</strong> No waiting, create QR codes instantly</li>
                <li><strong>Free Forever:</strong> Unlimited QR code generation with no watermarks</li>
              </ul>

              <h3>QR Code Types</h3>
              <h4>1. Website URL QR Code</h4>
              <p>
                Perfect for directing people to your website, landing page, or any online content. Just enter
                your URL and generate the QR code.
              </p>

              <h4>2. WiFi QR Code</h4>
              <p>
                Let guests connect to your WiFi without sharing the password. Include network name (SSID),
                password, and security type.
              </p>

              <h4>3. vCard QR Code</h4>
              <p>
                Share contact information instantly. Perfect for business cards, networking events, and
                professional profiles.
              </p>

              <h4>4. Plain Text QR Code</h4>
              <p>
                Encode any text message, phone number, or email address. Great for simple information sharing.
              </p>

              <h3>How to Use</h3>
              <ol>
                <li>Select your QR code type (URL, WiFi, vCard, or Text)</li>
                <li>Enter your content in the input field</li>
                <li>Customize colors (optional)</li>
                <li>Click "Generate QR Code" to create your QR code</li>
                <li>Download as PNG or SVG</li>
              </ol>

              <h3>Best Practices</h3>
              <ul>
                <li><strong>Size:</strong> Use at least 2x2cm for print materials</li>
                <li><strong>Contrast:</strong> Ensure good contrast between foreground and background</li>
                <li><strong>Testing:</strong> Always test QR codes before printing</li>
                <li><strong>Placement:</strong> Position in easily accessible locations</li>
                <li><strong>White Space:</strong> Add margin around QR code for better scanning</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <details className="bg-white rounded-lg shadow p-6">
                  <summary className="font-semibold cursor-pointer">
                    What is a QR code generator?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    A QR code generator creates 2D barcodes that can be scanned with smartphones to access
                    information instantly. Our generator creates custom QR codes for various purposes including
                    websites, WiFi networks, contact information, and more.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow p-6">
                  <summary className="font-semibold cursor-pointer">
                    Are these QR codes free to use?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    Yes! Our QR code generator is completely free with no limits. Generate unlimited QR codes
                    with no watermarks or registration required.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow p-6">
                  <summary className="font-semibold cursor-pointer">
                    Can I customize QR code colors?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    Absolutely! You can customize both foreground and background colors to match your brand.
                    However, ensure good contrast for reliable scanning.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow p-6">
                  <summary className="font-semibold cursor-pointer">
                    What file formats are available?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    We offer PNG (raster) and SVG (vector) formats. PNG is great for digital use, while SVG is
                    perfect for print as it can be scaled infinitely without quality loss.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow p-6">
                  <summary className="font-semibold cursor-pointer">
                    How do I create a WiFi QR code?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    Select "WiFi" from the type dropdown, enter your network name (SSID), password, and select
                    the security type (WPA/WEP). Generate the QR code and guests can scan it to connect automatically.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow p-6">
                  <summary className="font-semibold cursor-pointer">
                    Do these QR codes expire?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    No, the QR codes generated here are static and don't expire. They will work as long as the
                    linked content (website, WiFi network, etc.) remains active.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow p-6">
                  <summary className="font-semibold cursor-pointer">
                    Can I use QR codes commercially?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    Yes! All QR codes generated by our tool are free for both personal and commercial use.
                    No attribution required.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow p-6">
                  <summary className="font-semibold cursor-pointer">
                    What size should QR codes be for printing?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    For reliable scanning, print QR codes at least 2x2cm (0.8x0.8 inches). For materials viewed from
                    farther away, use larger sizes (4x4cm or more).
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Color Palettes Too?</h2>
            <p className="text-gray-600 mb-6">
              Try our AI-powered color palette generator for creating beautiful, accessible color schemes.
            </p>
            <a
              href="/tools/color-palette"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
            >
              Try Color Palette Generator →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600">
              <p>&copy; 2025 ColorQRCode Tools. Free QR code generator for everyone.</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href="/privacy" className="hover:text-primary-600">Privacy</a>
                <a href="/terms" className="hover:text-primary-600">Terms</a>
                <a href="/contact" className="hover:text-primary-600">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
