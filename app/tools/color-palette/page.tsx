import Link from "next/link";
import { Palette, Sparkles } from "lucide-react";
import { generateToolMetadata, generateToolSchema } from "@/lib/seo";
import ColorPaletteTool from "@/components/tools/color-palette-tool";

export const metadata = generateToolMetadata({
  title: "AI Color Palette Generator - Free Online Color Scheme Tool",
  description: "Generate beautiful color palettes with AI. WCAG compliant, accessible colors with Tailwind CSS export. Perfect for designers and developers.",
  keywords: [
    "ai color palette generator",
    "color scheme generator",
    "accessible color palette",
    "tailwind color palette",
    "wcag color contrast",
    "color palette from image",
  ],
  path: "/tools/color-palette",
});

export default function ColorPalettePage() {
  const schema = generateToolSchema({
    name: "AI Color Palette Generator",
    description: "Free AI-powered color palette generator with WCAG compliance checking and Tailwind CSS export",
    category: "DesignApplication",
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
                <Link href="/tools/color-palette" className="text-sm font-medium text-[var(--ios-blue)]">
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

        {/* Hero Section */}
        <section className="pt-32 pb-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
                <Palette className="w-4 h-4 text-[var(--ios-purple)]" />
                <span className="text-sm font-medium text-white">AI-Powered Tool</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white" style={{ letterSpacing: "-0.02em" }}>
                AI Color Palette Generator
              </h2>

              <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                Generate beautiful, accessible color schemes with AI. Perfect for web design, branding, and more.
              </p>
            </div>

            {/* Tool Component */}
            <div className="animate-fadeInScale">
              <ColorPaletteTool />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center animate-fadeInScale stagger-1">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-bold mb-2 text-white">AI Powered</h3>
                <p className="text-white/70 text-sm">
                  Smart algorithms create harmonious color combinations instantly
                </p>
              </div>
              <div className="glass-card p-6 text-center animate-fadeInScale stagger-2">
                <div className="text-4xl mb-4">♿</div>
                <h3 className="text-lg font-bold mb-2 text-white">Accessible</h3>
                <p className="text-white/70 text-sm">
                  WCAG compliant color contrast checking for better accessibility
                </p>
              </div>
              <div className="glass-card p-6 text-center animate-fadeInScale stagger-3">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-bold mb-2 text-white">Tailwind Ready</h3>
                <p className="text-white/70 text-sm">
                  Export directly to Tailwind CSS format for your projects
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-8 md:p-12 prose prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">About AI Color Palette Generator</h2>
              <p className="text-white/80 leading-relaxed">
                Our free AI-powered color palette generator helps designers and developers create beautiful,
                accessible color schemes for their projects. Using advanced algorithms, we generate
                harmonious color combinations that meet WCAG accessibility standards.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">Features</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-blue)] font-bold">•</span>
                  <span><strong>AI-Powered Generation:</strong> Smart color combinations based on color theory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-blue)] font-bold">•</span>
                  <span><strong>Accessibility Check:</strong> WCAG AA and AAA compliance for color contrast</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-blue)] font-bold">•</span>
                  <span><strong>Tailwind CSS Export:</strong> Copy colors directly in Tailwind format</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-blue)] font-bold">•</span>
                  <span><strong>Multiple Formats:</strong> HEX, RGB, HSL color codes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--ios-blue)] font-bold">•</span>
                  <span><strong>Free Forever:</strong> No signup required, unlimited use</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">How to Use</h3>
              <ol className="space-y-3 text-white/80">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm flex items-center justify-center font-bold">1</span>
                  <span>Click "Generate" to create a new AI-generated color scheme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm flex items-center justify-center font-bold">2</span>
                  <span>Lock colors you like by clicking the lock icon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm flex items-center justify-center font-bold">3</span>
                  <span>Check accessibility ratings for color contrast</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm flex items-center justify-center font-bold">4</span>
                  <span>Copy individual colors or export entire Tailwind config</span>
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">Color Theory Basics</h3>
              <p className="text-white/80 leading-relaxed">
                Our AI uses proven color theory principles including complementary colors, analogous colors,
                triadic schemes, and more to create visually appealing palettes. Each palette is designed
                to be harmonious and accessible.
              </p>
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
                  What is an AI color palette generator?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  An AI color palette generator uses machine learning algorithms to create harmonious
                  color combinations automatically. Our tool considers color theory, accessibility standards,
                  and current design trends to generate beautiful palettes.
                </p>
              </details>

              <details className="glass-card p-6 group">
                <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                  Are these colors WCAG compliant?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Yes! Each color pair in our generated palettes is checked against WCAG 2.1 guidelines
                  for color contrast. We display accessibility ratings for each combination so you can
                  ensure your designs are accessible to all users.
                </p>
              </details>

              <details className="glass-card p-6 group">
                <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                  Can I export colors to Tailwind CSS?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Absolutely! Each color includes a Tailwind CSS format that you can copy with one click.
                  You can also export the entire palette as a Tailwind config snippet.
                </p>
              </details>

              <details className="glass-card p-6 group">
                <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                  Is this tool free to use?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Yes, our AI color palette generator is completely free with no signup required.
                  Generate unlimited palettes for your projects.
                </p>
              </details>

              <details className="glass-card p-6 group">
                <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                  How do I choose the right colors for my brand?
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Start by generating multiple palettes and locking colors that resonate with your brand.
                  Consider your industry, target audience, and the emotions you want to evoke. Use our
                  accessibility checker to ensure your colors work for everyone.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-12 text-center">
              <h2 className="text-4xl font-bold mb-4 text-white">Need More Design Tools?</h2>
              <p className="text-white/70 mb-8 text-lg">
                Check out our free QR code generator for creating custom QR codes with logos and colors.
              </p>
              <Link
                href="/tools/qr-generator"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl button-primary font-semibold text-lg"
              >
                Try QR Code Generator →
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
