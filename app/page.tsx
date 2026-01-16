import Link from "next/link";
import { Palette, QrCode } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">ColorQRCode Tools</h1>
            <nav className="flex gap-6">
              <Link href="/tools/color-palette" className="hover:text-primary-600">
                Color Palette
              </Link>
              <Link href="/tools/qr-generator" className="hover:text-primary-600">
                QR Generator
              </Link>
              <Link href="/guides" className="hover:text-primary-600">
                Guides
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6 text-balance">
              Free AI-Powered Design Tools for Creators
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-balance">
              Generate stunning color palettes and custom QR codes with our free online tools.
              Perfect for designers, developers, and marketers.
            </p>
          </div>

          {/* Tool Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            {/* Color Palette Generator */}
            <Link
              href="/tools/color-palette"
              className="group bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">AI Color Palette</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Generate beautiful color schemes with AI. WCAG compliant, accessible, and export to Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">AI Powered</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Accessible</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Tailwind</span>
              </div>
            </Link>

            {/* QR Code Generator */}
            <Link
              href="/tools/qr-generator"
              className="group bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                  <QrCode className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">QR Code Generator</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Create custom QR codes with logos, colors, and different formats. WiFi, vCard, and more.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Custom Logo</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">WiFi</span>
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">vCard</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Tools?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Generate results in seconds with our optimized algorithms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Powered</h3>
              <p className="text-gray-600">Smart algorithms create harmonious color combinations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">♿</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Accessible</h3>
              <p className="text-gray-600">WCAG compliant color contrast checking built-in</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 ColorQRCode Tools. Free online design tools for everyone.</p>
            <div className="flex justify-center gap-4 mt-4">
              <Link href="/privacy" className="hover:text-primary-600">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary-600">Terms of Service</Link>
              <Link href="/contact" className="hover:text-primary-600">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
