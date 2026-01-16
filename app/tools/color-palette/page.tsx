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
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">
                <a href="/">ColorQRCode Tools</a>
              </h1>
              <nav className="flex gap-6">
                <a href="/tools/color-palette" className="text-primary-600">
                  Color Palette
                </a>
                <a href="/tools/qr-generator" className="hover:text-primary-600">
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
                AI Color Palette Generator
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Generate beautiful, accessible color schemes with AI. Perfect for web design, branding, and more.
              </p>

              {/* Tool Component */}
              <ColorPaletteTool />

              {/* Features */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold text-lg mb-2">⚡ AI Powered</h3>
                  <p className="text-gray-600 text-sm">
                    Smart algorithms create harmonious color combinations instantly
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold text-lg mb-2">♿ Accessible</h3>
                  <p className="text-gray-600 text-sm">
                    WCAG compliant color contrast checking for better accessibility
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-bold text-lg mb-2">🎨 Tailwind Ready</h3>
                  <p className="text-gray-600 text-sm">
                    Export directly to Tailwind CSS format for your projects
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
              <h2>About AI Color Palette Generator</h2>
              <p>
                Our free AI-powered color palette generator helps designers and developers create beautiful,
                accessible color schemes for their projects. Using advanced algorithms, we generate
                harmonious color combinations that meet WCAG accessibility standards.
              </p>

              <h3>Features</h3>
              <ul>
                <li><strong>AI-Powered Generation:</strong> Smart color combinations based on color theory</li>
                <li><strong>Accessibility Check:</strong> WCAG AA and AAA compliance for color contrast</li>
                <li><strong>Tailwind CSS Export:</strong> Copy colors directly in Tailwind format</li>
                <li><strong>Multiple Formats:</strong> HEX, RGB, HSL color codes</li>
                <li><strong>Free Forever:</strong> No signup required, unlimited use</li>
              </ul>

              <h3>How to Use</h3>
              <ol>
                <li>Click "Generate Palette" to create a new AI-generated color scheme</li>
                <li>Adjust individual colors using the color picker</li>
                <li>Check accessibility ratings for color contrast</li>
                <li>Export to Tailwind CSS or copy individual color codes</li>
                <li>Lock colors you like and regenerate the rest</li>
              </ol>

              <h3>Color Theory Basics</h3>
              <p>
                Our AI uses proven color theory principles including complementary colors, analogous colors,
                triadic schemes, and more to create visually appealing palettes. Each palette is designed
                to be harmonious and accessible.
              </p>
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
                    What is an AI color palette generator?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    An AI color palette generator uses machine learning algorithms to create harmonious
                    color combinations automatically. Our tool considers color theory, accessibility standards,
                    and current design trends to generate beautiful palettes.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow p-6">
                  <summary className="font-semibold cursor-pointer">
                    Are these colors WCAG compliant?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    Yes! Each color pair in our generated palettes is checked against WCAG 2.1 guidelines
                    for color contrast. We display accessibility ratings for each combination so you can
                    ensure your designs are accessible to all users.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow p-6">
                  <summary className="font-semibold cursor-pointer">
                    Can I export colors to Tailwind CSS?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    Absolutely! Each color includes a Tailwind CSS format that you can copy with one click.
                    You can also export the entire palette as a Tailwind config snippet.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow p-6">
                  <summary className="font-semibold cursor-pointer">
                    Is this tool free to use?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    Yes, our AI color palette generator is completely free with no signup required.
                    Generate unlimited palettes for your projects.
                  </p>
                </details>

                <details className="bg-white rounded-lg shadow p-6">
                  <summary className="font-semibold cursor-pointer">
                    How do I choose the right colors for my brand?
                  </summary>
                  <p className="mt-3 text-gray-600">
                    Start by generating multiple palettes and locking colors that resonate with your brand.
                    Consider your industry, target audience, and the emotions you want to evoke. Use our
                    accessibility checker to ensure your colors work for everyone.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need More Design Tools?</h2>
            <p className="text-gray-600 mb-6">
              Check out our free QR code generator for creating custom QR codes with logos and colors.
            </p>
            <a
              href="/tools/qr-generator"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
            >
              Try QR Code Generator →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="container mx-auto px-4">
            <div className="text-center text-gray-600">
              <p>&copy; 2025 ColorQRCode Tools. Free AI-powered design tools.</p>
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
