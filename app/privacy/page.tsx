import Link from "next/link";
import { Metadata } from "next";
import { Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - ColorQRCode Tools",
  description: "Privacy policy for ColorQRCode Tools. Learn how we protect your data and privacy.",
  alternates: {
    canonical: "https://colorqrcode.com/privacy",
  },
};

export default function PrivacyPage() {
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
              <Link href="/tools/qr-generator" className="text-sm font-medium hover:text-[var(--ios-blue)] transition-colors">
                QR Generator
              </Link>
              <Link href="/guides" className="text-sm font-medium hover:text-[var(--ios-blue)] transition-colors">
                Guides
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12 animate-fadeInUp">
            <div className="w-20 h-20 rounded-3xl icon-gradient-green flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Shield className="w-10 h-10 text-gray-800" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800" style={{ letterSpacing: "-0.02em" }}>
              Privacy Policy
            </h1>
            <p className="text-gray-800/60">Last updated: January 16, 2025</p>
          </div>

          {/* Content */}
          <div className="glass-card p-8 md:p-12 prose prose-invert max-w-none animate-fadeInScale">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
            <p className="text-gray-800/80 leading-relaxed">
              ColorQRCode Tools is committed to protecting your privacy. We do not collect personal information from users of our free tools.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Automatic Data Collection</h3>
            <p className="text-gray-800/80 leading-relaxed">
              We use Google Analytics to understand how visitors use our website. This information helps us improve our tools and user experience.
            </p>

            <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">Cookies</h3>
            <p className="text-gray-800/80 leading-relaxed">
              We use cookies to enhance your browsing experience and analyze site traffic. You can disable cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Data Usage</h2>
            <p className="text-gray-800/80 leading-relaxed">
              All data processed by our tools is processed locally in your browser. We do not store, transmit, or have access to any information you enter into our tools.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Third-Party Services</h2>
            <p className="text-gray-800/80 leading-relaxed mb-4">We use the following third-party services:</p>
            <ul className="space-y-2 text-gray-800/80">
              <li className="flex items-start gap-3">
                <span className="text-[var(--ios-blue)] font-bold">•</span>
                <span><strong>Google Analytics:</strong> For website analytics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--ios-blue)] font-bold">•</span>
                <span><strong>Google AdSense:</strong> For displaying advertisements</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-800/80 leading-relaxed mb-4">You have the right to:</p>
            <ul className="space-y-2 text-gray-800/80">
              <li className="flex items-start gap-3">
                <span className="text-[var(--ios-green)]">✓</span>
                <span>Access information about you</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--ios-green)]">✓</span>
                <span>Request deletion of your data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--ios-green)]">✓</span>
                <span>Opt-out of analytics tracking</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-800/80 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at: <Link href="/contact" className="text-[var(--ios-blue)] hover:underline">Contact Page</Link>
            </p>

            <div className="mt-8 glass p-6 rounded-2xl">
              <p className="text-sm text-gray-800/80">
                <strong>Note:</strong> This privacy policy may be updated from time to time. We encourage you to review this page periodically.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-gray-800/60 mb-6">© 2025 ColorQRCode Tools. Beautiful design tools for everyone.</p>
            <div className="flex justify-center gap-4">
              <Link href="/privacy" className="glass-button px-4 py-2 rounded-xl text-sm font-medium text-gray-800">Privacy</Link>
              <Link href="/terms" className="glass-button px-4 py-2 rounded-xl text-sm font-medium text-gray-800">Terms</Link>
              <Link href="/contact" className="glass-button px-4 py-2 rounded-xl text-sm font-medium text-gray-800">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
