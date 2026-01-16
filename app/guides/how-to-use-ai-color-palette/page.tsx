import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Palette, Lock, Unlock, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Use AI Color Palette Generator - Complete Guide",
  description: "Step-by-step tutorial on how to use our AI color palette generator. Create beautiful, WCAG-compliant color schemes for your design projects.",
  keywords: [
    "how to use ai color palette",
    "color palette tutorial",
    "accessible color design",
    "wcag color contrast",
    "color theory guide",
  ],
  alternates: {
    canonical: "https://colorqrcode.com/guides/how-to-use-ai-color-palette",
  },
};

export default function HowToUseAIColorPalette() {
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

      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <Link href="/guides" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Link>

            {/* Hero */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-10 h-10 text-primary-600" />
                <h1 className="text-4xl font-bold">How to Use AI Color Palette Generator</h1>
              </div>
              <p className="text-xl text-gray-600">
                A complete guide to creating beautiful, accessible color schemes with AI
              </p>
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                <span>⏱️ 5 min read</span>
                <span>•</span>
                <span>Last updated: January 16, 2025</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                Our AI Color Palette Generator makes it easy to create stunning color schemes for your
                web design, branding, or creative projects. This guide will walk you through all the features
                and how to make the most of them.
              </p>

              <h2>Getting Started</h2>
              <p>
                First, navigate to our <a href="/tools/color-palette">AI Color Palette Generator</a>.
                You'll see a clean interface with color generation controls and a palette display area.
              </p>

              <h3>Step 1: Generate Your First Palette</h3>
              <p>
                Click the blue "Generate Palette" button to create a new AI-generated color scheme.
                Our algorithm creates 5 harmonious colors based on proven color theory principles.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                <p className="font-semibold">💡 Pro Tip:</p>
                <p>Each generation creates a unique color scheme. Keep generating until you find one you love!</p>
              </div>

              <h3>Step 2: Lock Colors You Like</h3>
              <p>
                Found a color you want to keep? Click the <Lock className="w-4 h-4 inline mx-1" /> lock icon
                on any color card. Locked colors will remain in place when you generate new palettes.
                This is perfect for keeping your brand color while exploring complementary colors.
              </p>

              <h3>Step 3: Check Accessibility</h3>
              <p>
                Each color card displays accessibility ratings based on WCAG guidelines:
              </p>
              <ul>
                <li><strong>AAA</strong>: Excellent contrast ratio (7:1 or higher)</li>
                <li><strong>AA</strong>: Good contrast ratio (4.5:1 or higher)</li>
                <li><strong>Fail</strong>: Does not meet accessibility standards</li>
              </ul>

              <p>
                You'll see contrast ratios for both white text and black text on each color, helping you
                make accessible design choices.
              </p>

              <h3>Step 4: Copy or Export Colors</h3>
              <p>
                Need to use a color? Click the "Copy" button on any color card to copy the HEX code to your
                clipboard. You can also click "Export Tailwind" to get the entire palette in Tailwind CSS
                format, ready to paste into your project.
              </p>

              <h2>Advanced Features</h2>

              <h3>Understanding Color Contrast</h3>
              <p>
                Our tool automatically checks color contrast ratios for both white and black text.
                The contrast ratio is calculated using the WCAG 2.1 formula:
              </p>
              <pre className="bg-gray-100 p-4 rounded"><code>Contrast Ratio = (L1 + 0.05) / (L2 + 0.05)</code></pre>
              <p>Where L1 and L2 are the relative luminances of the lighter and darker colors.</p>

              <h3>Tailwind CSS Integration</h3>
              <p>
                Each color displays its Tailwind CSS format (RGB values as percentages). The Export Tailwind
                button generates a complete configuration snippet:
              </p>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto"><code>{`module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '65, 88, 208',
        secondary: '233, 69, 96',
        // ... more colors
      },
    },
  },
}`}</code></pre>

              <h2>Best Practices</h2>

              <h3>1. Start with Your Brand Color</h3>
              <p>
                If you have an established brand color, lock it first. Then generate palettes to find
                complementary colors that work with your brand.
              </p>

              <h3>2. Consider Accessibility from the Start</h3>
              <p>
                Always check accessibility ratings before finalizing your palette. WCAG AA compliance should be
                your minimum standard for web projects.
              </p>

              <h3>3. Test in Context</h3>
              <p>
                Colors look different in isolation than they do in your design. Always test your palette in
                the actual design environment before finalizing.
              </p>

              <h3>4. Limit Your Palette</h3>
              <p>
                Most successful designs use 3-5 colors maximum. Our generator creates 5 colors, but you don't
                have to use all of them.
              </p>

              <h2>Common Use Cases</h2>

              <h3>Web Design</h3>
              <p>Create cohesive color schemes for websites. Use primary colors for CTAs, secondary colors
              for backgrounds, and accent colors for highlights.</p>

              <h3>Branding</h3>
              <p>Develop brand identities with consistent color usage across all materials.</p>

              <h3>UI/UX Design</h3>
              <p>Design accessible interfaces with proper color contrast for text and interactive elements.</p>

              <h2>Troubleshooting</h2>

              <h3>Q: Can I adjust individual colors?</h3>
              <p>
                A: Currently, our tool generates entire palettes. To adjust individual colors, you can lock
                the ones you like and regenerate the rest, or copy the HEX codes and modify them in your
                design tool.
              </p>

              <h3>Q: Why do some colors fail accessibility?</h3>
              <p>
                A: Colors with low saturation or very light/dark values may not provide enough contrast for
                text. Try generating a new palette or using locked accessible colors as your base.
              </p>

              <h3>Q: Can I save palettes for later?</h3>
              <p>
                A: Currently, you can export the Tailwind config or copy individual HEX codes to save in your
                project. We're working on a save feature for future updates.
              </p>

              <h2>Next Steps</h2>
              <p>
                Once you have your perfect color palette, check out our other guides:
              </p>
              <ul>
                <li><a href="/guides/ai-color-palette-for-branding">AI Color Palette for Branding</a></li>
                <li><a href="/guides/accessible-color-design-guide">Accessible Color Design Guide</a></li>
                <li><a href="/tools/qr-generator">QR Code Generator</a></li>
              </ul>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mt-8">
                <h3 className="font-bold mb-2">🎨 Ready to Create?</h3>
                <p className="mb-4">
                  Start generating beautiful color palettes now with our free AI Color Palette Generator.
                </p>
                <a
                  href="/tools/color-palette"
                  className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
                >
                  Try Color Palette Generator →
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
