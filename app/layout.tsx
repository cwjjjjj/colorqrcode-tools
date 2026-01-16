import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Color & QR Code Tools - Free Online Design Tools",
  description: "Free AI-powered color palette generator and QR code generator. Create stunning color schemes and custom QR codes for your brand. WCAG compliant accessible colors.",
  keywords: ["color palette generator", "qr code generator", "ai color tool", "accessible color", "tailwind colors"],
  authors: [{ name: "ColorQRCode Tools" }],
  openGraph: {
    title: "Color & QR Code Tools - Free Online Design Tools",
    description: "Free AI-powered color palette generator and QR code generator",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Color & QR Code Tools - Free Online Design Tools",
    description: "Free AI-powered color palette generator and QR code generator",
  },
  alternates: {
    canonical: "https://colorqrcode.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Animated Gradient Background */}
        <div className="gradient-background"></div>
        {/* Noise Texture Overlay */}
        <div className="noise-overlay"></div>
        {children}
      </body>
    </html>
  );
}
