import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - ColorQRCode Tools",
  description: "Privacy policy for ColorQRCode Tools. Learn how we protect your data and privacy.",
  alternates: {
    canonical: "https://colorqrcode.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto prose">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 16, 2025</p>

          <h2>Information We Collect</h2>
          <p>ColorQRCode Tools is committed to protecting your privacy. We do not collect personal information from users of our free tools.</p>

          <h3>Automatic Data Collection</h3>
          <p>We use Google Analytics to understand how visitors use our website. This information helps us improve our tools and user experience.</p>

          <h3>Cookies</h3>
          <p>We use cookies to enhance your browsing experience and analyze site traffic. You can disable cookies through your browser settings.</p>

          <h2>Data Usage</h2>
          <p>All data processed by our tools is processed locally in your browser. We do not store, transmit, or have access to any information you enter into our tools.</p>

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services:</p>
          <ul>
            <li><strong>Google Analytics:</strong> For website analytics</li>
            <li><strong>Google AdSense:</strong> For displaying advertisements</li>
          </ul>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access information about you</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of analytics tracking</li>
          </ul>

          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at: <a href="/contact">Contact Page</a></p>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> This privacy policy may be updated from time to time. We encourage you to review this page periodically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
