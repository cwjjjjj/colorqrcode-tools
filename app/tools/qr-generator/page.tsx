import Link from "next/link";
import { QrCode, Sparkles } from "lucide-react";
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
        {/* iOS-style Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 ios-nav">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-2xl icon-gradient-blue flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-xl font-bold text-gradient">ColorQRCode</h1>
              </Link>

              <nav className="hidden md:flex items-center gap-8">
                <Link href="/tools/color-palette" className="text-sm font-medium hover:text-[var(--ios-blue)] transition-colors">
                  Color Palette
                </Link>
                <Link href="/tools/qr-generator" className="text-sm font-medium text-[var(--ios-blue)]">
                  QR Generator
                </Link>
                <Link href="/guides" className="text-sm font-medium hover:text-[var(--ios-blue)] transition-colors">
                  Guides
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <QrCode className="w-4 h-4 text-[var(--ios-blue)]" />
                <span className="text-sm font-medium text-white">Free Generator</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>
                QR Code Generator
              </h2>

              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Create custom QR codes with logos, colors, and different formats. 100% free with unlimited downloads.
              </p>
            </div>

            {/* Tool Component */}
            <div className="animate-fadeInScale">
              <QRCodeTool />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center animate-fadeInScale stagger-1">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-bold mb-2 text-white">Custom Colors</h3>
                <p className="text-white/70 text-sm">
                  Personalize your QR codes with custom foreground and background colors
                </p>
              </div>
              <div className="glass-card p-6 text-center animate-fadeInScale stagger-2">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-bold mb-2 text-white">Multiple Formats</h3>
                <p className="text-white/70 text-sm">
                  Download as PNG or SVG. Perfect for print and digital use
                </p>
              </div>
              <div className="glass-card p-6 text-center animate-fadeInScale stagger-3">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-bold mb-2 text-white">Instant Download</h3>
                <p className="text-white/70 text-sm">
                  Generate and download high-resolution QR codes in seconds
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-8 md:p-12 prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">About QR Code Generator</h2>
              <p className="text-white/80 leading-relaxed">
                Our free QR code generator helps you create custom QR codes for any purpose. Whether you need
                a QR code for your website, WiFi network, business card, or marketing campaign, our tool makes
                it easy to generate professional QR codes in seconds.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">Features</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-blue)] font-bold">•</span>
                  <span><strong>Custom Colors:</strong> Match your brand colors with foreground and background customization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-blue)] font-bold">•</span>
                  <span><strong>Multiple Formats:</strong> WiFi, vCard, URL, Plain Text, and more</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-blue)] font-bold">•</span>
                  <span><strong>High Resolution:</strong> Download as PNG or SVG in any size you need</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-blue)] font-bold">•</span>
                  <span><strong>Instant Generation:</strong> No waiting, create QR codes instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-blue)] font-bold">•</span>
                  <span><strong>Free Forever:</strong> Unlimited QR code generation with no watermarks</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">QR Code Types</h3>

              <div className="space-y-4">
                <div className="glass p-4 rounded-xl">
                  <h4 className="font-bold text-white mb-2">1. Website URL QR Code</h4>
                  <p className="text-white/70 text-sm">
                    Perfect for directing people to your website, landing page, or any online content. Just enter
                    your URL and generate the QR code.
                  </p>
                </div>

                <div className="glass p-4 rounded-xl">
                  <h4 className="font-bold text-white mb-2">2. WiFi QR Code</h4>
                  <p className="text-white/70 text-sm">
                    Let guests connect to your WiFi without sharing the password. Include network name (SSID),
                    password, and security type.
                  </p>
                </div>

                <div className="glass p-4 rounded-xl">
                  <h4 className="font-bold text-white mb-2">3. vCard QR Code</h4>
                  <p className="text-white/70 text-sm">
                    Share contact information instantly. Perfect for business cards, networking events, and
                    professional profiles.
                  </p>
                </div>

                <div className="glass p-4 rounded-xl">
                  <h4 className="font-bold text-white mb-2">4. Plain Text QR Code</h4>
                  <p className="text-white/70 text-sm">
                    Encode any text message, phone number, or email address. Great for simple information sharing.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">How to Use</h3>
              <ol className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm flex items-center justify-center font-bold">1</span>
                  <span>Select your QR code type (URL, WiFi, vCard, or Text)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm flex items-center justify-center font-bold">2</span>
                  <span>Enter your content in the input field</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm flex items-center justify-center font-bold">3</span>
                  <span>Customize colors (optional)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm flex items-center justify-center font-bold">4</span>
                  <span>Click "Generate QR Code" to create your QR code</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm flex items-center justify-center font-bold">5</span>
                  <span>Download as PNG or SVG</span>
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">Best Practices</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-green)]">✓</span>
                  <span><strong>Size:</strong> Use at least 2x2cm for print materials</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-green)]">✓</span>
                  <span><strong>Contrast:</strong> Ensure good contrast between foreground and background</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-green)]">✓</span>
                  <span><strong>Testing:</strong> Always test QR codes before printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-green)]">✓</span>
                  <span><strong>Placement:</strong> Position in easily accessible locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-green)]">✓</span>
                  <span><strong>White Space:</strong> Add margin around QR code for better scanning</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="glass-card p-6 group">
                <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                  What is a QR code generator?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  A QR code generator creates 2D barcodes that can be scanned with smartphones to access
                  information instantly. Our generator creates custom QR codes for various purposes including
                  websites, WiFi networks, contact information, and more.
                </p>
              </details>

              <details className="glass-card p-6 group">
                <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                  Are these QR codes free to use?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Yes! Our QR code generator is completely free with no limits. Generate unlimited QR codes
                  with no watermarks or registration required.
                </p>
              </details>

              <details className="glass-card p-6 group">
                <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                  Can I customize QR code colors?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Absolutely! You can customize both foreground and background colors to match your brand.
                  However, ensure good contrast for reliable scanning.
                </p>
              </details>

              <details className="glass-card p-6 group">
                <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                  What file formats are available?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  We offer PNG (raster) and SVG (vector) formats. PNG is great for digital use, while SVG is
                  perfect for print as it can be scaled infinitely without quality loss.
                </p>
              </details>

              <details className="glass-card p-6 group">
                <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                  How do I create a WiFi QR code?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Select "WiFi" from the type dropdown, enter your network name (SSID), password, and select
                  the security type (WPA/WEP). Generate the QR code and guests can scan it to connect automatically.
                </p>
              </details>

              <details className="glass-card p-6 group">
                <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                  Do these QR codes expire?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  No, the QR codes generated here are static and don't expire. They will work as long as the
                  linked content (website, WiFi network, etc.) remains active.
                </p>
              </details>

              <details className="glass-card p-6 group">
                <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                  Can I use QR codes commercially?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Yes! All QR codes generated by our tool are free for both personal and commercial use.
                  No attribution required.
                </p>
              </details>

              <details className="glass-card p-6 group">
                <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                  What size should QR codes be for printing?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  For reliable scanning, print QR codes at least 2x2cm (0.8x0.8 inches). For materials viewed from
                  farther away, use larger sizes (4x4cm or more).
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-12 text-center">
              <h2 className="text-4xl font-bold mb-4 text-white">Need Color Palettes Too?</h2>
              <p className="text-white/70 mb-8 text-lg">
                Try our AI-powered color palette generator for creating beautiful, accessible color schemes.
              </p>
              <Link
                href="/tools/color-palette"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl button-primary font-semibold text-lg"
              >
                Try Color Palette Generator →
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-white/60 mb-6">© 2025 ColorQRCode Tools. Beautiful design tools for everyone.</p>
              <div className="flex justify-center gap-4">
                <Link href="/privacy" className="glass-button px-4 py-2 rounded-xl text-sm font-medium text-white">Privacy</Link>
                <Link href="/terms" className="glass-button px-4 py-2 rounded-xl text-sm font-medium text-white">Terms</Link>
                <Link href="/contact" className="glass-button px-4 py-2 rounded-xl text-sm font-medium text-white">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
