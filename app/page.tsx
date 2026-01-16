import Link from "next/link";
import { Palette, QrCode, Sparkles, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative">
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
              <Link
                href="/tools/color-palette"
                className="text-sm font-medium hover:text-[var(--ios-blue)] transition-colors"
              >
                Color Palette
              </Link>
              <Link
                href="/tools/qr-generator"
                className="text-sm font-medium hover:text-[var(--ios-blue)] transition-colors"
              >
                QR Generator
              </Link>
              <Link
                href="/guides"
                className="text-sm font-medium hover:text-[var(--ios-blue)] transition-colors"
              >
                Guides
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Sparkles className="w-4 h-4 text-[var(--ios-purple)]" />
              <span className="text-sm font-medium">AI-Powered Design Tools</span>
            </div>

            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-balance" style={{ letterSpacing: "-0.02em" }}>
              <span className="text-gradient">Beautiful Design</span>
              <br />
              <span className="text-gray-900">Made Simple</span>
            </h2>

            <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
              Generate stunning color palettes and custom QR codes with our free online tools.
              Perfect for designers, developers, and creators.
            </p>

            <div className="flex gap-4 justify-center">
              <Link
                href="/tools/color-palette"
                className="px-8 py-4 rounded-2xl button-primary font-semibold inline-flex items-center gap-2"
              >
                <Palette className="w-5 h-5" />
                Try Color Palette
              </Link>
              <Link
                href="/tools/qr-generator"
                className="px-8 py-4 rounded-2xl glass-button font-semibold inline-flex items-center gap-2"
              >
                <QrCode className="w-5 h-5" />
                Create QR Code
              </Link>
            </div>
          </div>

          {/* Tool Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Color Palette Generator */}
            <Link
              href="/tools/color-palette"
              className="glass-card p-8 animate-fadeInScale stagger-1 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-2xl icon-gradient-pink shadow-lg group-hover:scale-110 transition-transform">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-3 text-gray-900">AI Color Palette</h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Generate beautiful, harmonious color schemes with AI. WCAG compliant,
                fully accessible, and export to Tailwind CSS instantly.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-800">
                  AI Powered
                </span>
                <span className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-800">
                  Accessible
                </span>
                <span className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-800">
                  Tailwind
                </span>
              </div>

              {/* Color Preview Pills */}
              <div className="flex gap-2 mt-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 shadow-lg"></div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg"></div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg"></div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg"></div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 shadow-lg"></div>
              </div>
            </Link>

            {/* QR Code Generator */}
            <Link
              href="/tools/qr-generator"
              className="glass-card p-8 animate-fadeInScale stagger-2 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 rounded-2xl icon-gradient-blue shadow-lg group-hover:scale-110 transition-transform">
                  <QrCode className="w-8 h-8 text-white" />
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
              </div>

              <h3 className="text-3xl font-bold mb-3 text-gray-900">QR Code Generator</h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Create custom QR codes with logos, colors, and multiple formats.
                WiFi, vCard, URLs, and more - all in one place.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-800">
                  Custom Logo
                </span>
                <span className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-800">
                  WiFi
                </span>
                <span className="px-4 py-2 rounded-full glass text-sm font-medium text-gray-800">
                  vCard
                </span>
              </div>

              {/* QR Preview Pattern */}
              <div className="mt-6 p-4 bg-white rounded-xl shadow-inner">
                <div className="w-16 h-16 mx-auto bg-black rounded-lg relative">
                  <div className="absolute inset-2 grid grid-cols-4 gap-0.5">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="bg-black rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">Why Choose Our Tools?</h2>
            <p className="text-xl text-gray-700">Powerful features for modern creators</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center animate-fadeInScale stagger-1">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Lightning Fast</h3>
              <p className="text-gray-700 leading-relaxed">
                Generate results in seconds with our optimized algorithms and instant previews
              </p>
            </div>

            <div className="glass-card p-8 text-center animate-fadeInScale stagger-2">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">AI Powered</h3>
              <p className="text-gray-700 leading-relaxed">
                Smart algorithms create harmonious color combinations that work perfectly together
              </p>
            </div>

            <div className="glass-card p-8 text-center animate-fadeInScale stagger-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Accessible</h3>
              <p className="text-gray-700 leading-relaxed">
                WCAG compliant color contrast checking built-in for inclusive design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex justify-center gap-4 mb-6">
              <Link href="/privacy" className="glass-button px-4 py-2 rounded-xl text-sm font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="glass-button px-4 py-2 rounded-xl text-sm font-medium">
                Terms of Service
              </Link>
              <Link href="/contact" className="glass-button px-4 py-2 rounded-xl text-sm font-medium">
                Contact
              </Link>
            </div>

            <p className="text-gray-700 text-sm">
              © 2025 ColorQRCode Tools. Beautiful design tools for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
