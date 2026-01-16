import Link from "next/link";
import { Metadata } from "next";
import { FileText, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - ColorQRCode Tools",
  description: "Terms of service for ColorQRCode Tools. Read our terms and conditions.",
  alternates: {
    canonical: "https://colorqrcode.com/terms",
  },
};

export default function TermsPage() {
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
            <div className="w-20 h-20 rounded-3xl icon-gradient-pink flex items-center justify-center mx-auto mb-6 shadow-lg">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>
              Terms of Service
            </h1>
            <p className="text-white/60">Last updated: January 16, 2025</p>
          </div>

          {/* Content */}
          <div className="glass-card p-8 md:p-12 prose prose-invert max-w-none animate-fadeInScale">
            <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
            <p className="text-white/80 leading-relaxed">
              By accessing and using ColorQRCode Tools, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Use License</h2>
            <p className="text-white/80 leading-relaxed">
              Permission is granted to use this website for personal or commercial use. This includes the use of our color palette generator and QR code generator tools.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Disclaimer</h2>
            <p className="text-white/80 leading-relaxed">
              The materials on ColorQRCode Tools are provided "as is". We make no warranties, expressed or implied, and hereby disclaim all warranties regarding these tools.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Limitations</h2>
            <p className="text-white/80 leading-relaxed">
              In no event shall ColorQRCode Tools be liable for any damages arising out of the use or inability to use our tools.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Accuracy of Materials</h2>
            <p className="text-white/80 leading-relaxed">
              While we strive to keep our tools accurate and up-to-date, we make no representations about the completeness or accuracy of the information provided.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Links</h2>
            <p className="text-white/80 leading-relaxed">
              ColorQRCode Tools has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Modifications</h2>
            <p className="text-white/80 leading-relaxed">
              ColorQRCode Tools may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Governing Law</h2>
            <p className="text-white/80 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts.
            </p>

            <div className="mt-8 glass p-6 rounded-2xl">
              <p className="text-sm text-white/80">
                <strong>Contact Us:</strong> If you have questions about these Terms of Service, please contact us at{' '}
                <Link href="/contact" className="text-[var(--ios-blue)] hover:underline">Contact Page</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

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
  );
}
