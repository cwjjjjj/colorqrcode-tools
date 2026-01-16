import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, Palette, QrCode, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Guides & Tutorials - ColorQRCode Tools",
  description: "Learn how to use our AI color palette generator and QR code generator with our comprehensive guides and tutorials.",
  keywords: ["color palette tutorial", "qr code tutorial", "how to use", "guides"],
  alternates: {
    canonical: "https://colorqrcode.com/guides",
  },
};

export default function GuidesPage() {
  const guides = [
    {
      title: "How to Use AI Color Palette Generator",
      description: "Learn how to create beautiful, accessible color schemes with AI in minutes.",
      slug: "/guides/how-to-use-ai-color-palette",
      icon: <Palette className="w-6 h-6" />,
      category: "Color Tools",
      readTime: "5 min read",
    },
    {
      title: "How to Create QR Codes",
      description: "Step-by-step guide to creating custom QR codes for your business.",
      slug: "/guides/how-to-create-qr-codes",
      icon: <QrCode className="w-6 h-6" />,
      category: "QR Tools",
      readTime: "6 min read",
    },
  ];

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
              <Link href="/guides" className="text-sm font-medium text-[var(--ios-blue)]">
                Guides
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl icon-gradient-pink flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800" style={{ letterSpacing: "-0.02em" }}>
              Guides & Tutorials
            </h1>
            <p className="text-xl text-gray-800/70 max-w-2xl mx-auto">
              Learn how to make the most of our free design tools with our comprehensive guides
            </p>
          </div>

          {/* Guides Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <Link
                key={index}
                href={guide.slug}
                className="glass-card p-8 group animate-fadeInScale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl icon-gradient-blue text-gray-800">
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <span className="inline-block text-xs font-semibold text-gray-800 bg-white/20 px-3 py-1 rounded-full mb-3">
                      {guide.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-[var(--ios-blue)] transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-800/70 text-sm">{guide.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-800/60 text-sm">
                  <span>📖 {guide.readTime}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 glass-card p-12 text-center animate-fadeInScale">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Ready to Get Started?</h2>
            <p className="text-gray-800/70 mb-8 text-lg">
              Try our free tools and start creating beautiful designs today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/tools/color-palette"
                className="button-primary px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
              >
                <Palette className="w-5 h-5" />
                Color Palette Generator
              </Link>
              <Link
                href="/tools/qr-generator"
                className="glass-button px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 text-gray-800"
              >
                <QrCode className="w-5 h-5" />
                QR Code Generator
              </Link>
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
