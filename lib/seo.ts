import { Metadata } from "next";

export function generateToolMetadata({
  title,
  description,
  keywords,
  path,
}: {
  title: string;
  description: string;
  keywords: string[];
  path: string;
}): Metadata {
  const baseUrl = "https://colorqrcode.com";
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "ColorQRCode Tools",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateToolSchema({
  name,
  description,
  category,
}: {
  name: string;
  description: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory: category,
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "AI-powered generation",
      "Free to use",
      "No signup required",
      "Instant results",
    ],
  };
}
