import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
