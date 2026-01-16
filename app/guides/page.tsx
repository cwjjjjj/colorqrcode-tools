import Link from "next/link";
import { Metadata } from "next";
import { BookOpen, Palette, QrCode } from "lucide-react";

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
      title: "AI Color Palette for Branding",
      description: "Discover how to create cohesive brand colors with our AI-powered tool.",
      slug: "/guides/ai-color-palette-for-branding",
      icon: <Palette className="w-6 h-6" />,
      category: "Color Tools",
      readTime: "7 min read",
    },
    {
      title: "Accessible Color Design Guide",
      description: "Learn about WCAG compliance and creating accessible color palettes.",
      slug: "/guides/accessible-color-design-guide",
      icon: <Palette className="w-6 h-6" />,
      category: "Accessibility",
      readTime: "10 min read",
    },
    {
      title: "How to Create QR Codes with Logos",
      description: "Step-by-step guide to creating custom QR codes for your business.",
      slug: "/guides/how-to-create-qr-codes",
      icon: <QrCode className="w-6 h-6" />,
      category: "QR Tools",
      readTime: "6 min read",
    },
    {
      title: "WiFi QR Code Generator Guide",
      description: "Learn how to create WiFi QR codes for guests and customers.",
      slug: "/guides/wifi-qr-code-generator",
      icon: <QrCode className="w-6 h-6" />,
      category: "QR Tools",
      readTime: "4 min read",
    },
    {
      title: "vCard QR Code Tutorial",
      description: "Create contact QR codes for business cards and networking.",
      slug: "/guides/vcard-qr-code-tutorial",
      icon: <QrCode className="w-6 h-6" />,
      category: "QR Tools",
      readTime: "5 min read",
    },
  ];

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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-10 h-10 text-primary-600" />
              <h1 className="text-4xl font-bold">Guides & Tutorials</h1>
            </div>
            <p className="text-xl text-gray-600">
              Learn how to make the most of our free design tools with our comprehensive guides
            </p>
          </div>

          {/* Guides Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {guides.map((guide, index) => (
              <Link
                key={index}
                href={guide.slug}
                className="group bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                    {guide.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                        {guide.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                    <p className="text-xs text-gray-500">{guide.readTime}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-primary-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">
              Try our free tools and start creating beautiful designs today.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/tools/color-palette"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
              >
                Color Palette Generator
              </a>
              <a
                href="/tools/qr-generator"
                className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
              >
                QR Code Generator
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>&copy; 2025 ColorQRCode Tools. Free design tools & guides.</p>
            <div className="flex justify-center gap-4 mt-4">
              <a href="/privacy" className="hover:text-primary-600">Privacy</a>
              <a href="/terms" className="hover:text-primary-600">Terms</a>
              <a href="/contact" className="hover:text-primary-600">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
