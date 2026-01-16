import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - ColorQRCode Tools",
  description: "Terms of service for ColorQRCode Tools. Rules and guidelines for using our free design tools.",
  alternates: {
    canonical: "https://colorqrcode.com/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose">
          <h1>Terms of Service</h1>
          <p>Last updated: January 16, 2025</p>

          <h2>Acceptance of Terms</h2>
          <p>By accessing and using ColorQRCode Tools, you accept and agree to be bound by these Terms of Service.</p>

          <h2>Description of Service</h2>
          <p>ColorQRCode Tools provides free online design tools including:</p>
          <ul>
            <li>AI Color Palette Generator</li>
            <li>QR Code Generator</li>
            <li>Related design utilities</li>
          </ul>

          <h2>User Responsibilities</h2>
          <p>As a user, you agree to:</p>
          <ul>
            <li>Use our tools for lawful purposes only</li>
            <li>Not attempt to circumvent any security measures</li>
            <li>Not use automated tools to abuse our services</li>
            <li>Respect intellectual property rights</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>ColorQRCode Tools is provided "as is" without warranties of any kind. We are not liable for any damages arising from the use of our tools.</p>

          <h2>Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, and software, is owned by ColorQRCode Tools and protected by intellectual property laws.</p>

          <h2>Privacy Policy</h2>
          <p>Your use of our services is also governed by our <a href="/privacy">Privacy Policy</a>.</p>

          <h2>Modifications</h2>
          <p>We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of changes.</p>

          <h2>Contact Information</h2>
          <p>For questions about these Terms of Service, please visit our <a href="/contact">Contact Page</a>.</p>

          <h2>Governing Law</h2>
          <p>These terms are governed by and construed in accordance with applicable laws.</p>
        </div>
      </div>
    </div>
  );
}
