import Link from "next/link";
import { QrCode, Sparkles, Palette } from "lucide-react";
import QRCodeTool from "@/components/tools/qr-code-tool";

export default function Home() {
  return (
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
              <Link href="/" className="text-sm font-medium text-[var(--ios-blue)]">
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
              <span className="text-sm font-medium text-gray-900">Free Generator</span>
            </div>

            <h2 className="text-gray-900 text-5xl md:text-6xl font-bold mb-4" style={{ letterSpacing: "-0.02em" }}>
              QR Code Generator
            </h2>

            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
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
              <h3 className="text-lg font-bold mb-2 text-gray-900">Custom Colors</h3>
              <p className="text-gray-700 text-sm">
                Personalize your QR codes with custom foreground and background colors
              </p>
            </div>
            <div className="glass-card p-6 text-center animate-fadeInScale stagger-2">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Multiple Formats</h3>
              <p className="text-gray-700 text-sm">
                Download as PNG or SVG. Perfect for print and digital use
              </p>
            </div>
            <div className="glass-card p-6 text-center animate-fadeInScale stagger-3">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Instant Download</h3>
              <p className="text-gray-700 text-sm">
                Generate and download high-resolution QR codes in seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="glass-card p-12 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Need Color Palettes Too?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Try our AI-powered color palette generator for creating beautiful, accessible color schemes.
            </p>
            <Link
              href="/tools/color-palette"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl button-primary font-semibold text-lg"
            >
              <Palette className="w-5 h-5" />
              Try Color Palette Generator →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-gray-700 mb-6">© 2025 ColorQRCode Tools. Beautiful design tools for everyone.</p>
            <div className="flex justify-center gap-4">
              <Link href="/privacy" className="glass-button px-4 py-2 rounded-xl text-sm font-medium text-gray-900">Privacy</Link>
              <Link href="/terms" className="glass-button px-4 py-2 rounded-xl text-sm font-medium text-gray-900">Terms</Link>
              <Link href="/contact" className="glass-button px-4 py-2 rounded-xl text-sm font-medium text-gray-900">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
