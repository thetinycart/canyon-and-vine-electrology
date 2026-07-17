import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const fallbackSiteUrl = new URL(
  "https://canyon-and-vine-electrology.sukhpalc.chatgpt.site",
);
const publicSiteUrl = new URL(
  "https://tycheventuresllc.com/canyon-and-vine-electrology/",
);

async function getMetadataBase() {
  const requestHeaders = await headers();
  const rawHost =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const host = rawHost?.split(",")[0].trim();
  const rawProtocol = requestHeaders.get("x-forwarded-proto")?.split(",")[0].trim();
  const protocol = rawProtocol === "http" || rawProtocol === "https"
    ? rawProtocol
    : host?.startsWith("localhost")
      ? "http"
      : "https";

  if (!host || !/^[a-z0-9.-]+(?::\d+)?$/i.test(host)) {
    return fallbackSiteUrl;
  }

  return new URL(`${protocol}://${host}`);
}

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = await getMetadataBase();
  const socialImage = new URL("/og.png", metadataBase).toString();
  const description =
    "Nav’s private electrology studio serving American Canyon and the Napa–Solano community with refined, inclusive permanent hair removal care.";

  return {
    metadataBase,
    title: "Canyon & Vine Electrology | American Canyon, CA",
    description,
    alternates: {
      canonical: publicSiteUrl,
    },
    keywords: [
      "electrolysis American Canyon",
      "electrologist Napa",
      "permanent hair removal Solano County",
      "gender affirming electrolysis",
      "PCOS facial hair removal",
    ],
    openGraph: {
      title: "Canyon & Vine Electrology",
      description:
        "Permanent hair removal, thoughtfully done. Now welcoming clients in American Canyon, California.",
      type: "website",
      locale: "en_US",
      url: publicSiteUrl,
      images: [
        {
          url: socialImage,
          width: 1731,
          height: 909,
          alt: "Canyon & Vine Electrology — permanent hair removal, thoughtfully done.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Canyon & Vine Electrology",
      description:
        "Permanent hair removal, thoughtfully done. Now welcoming clients in American Canyon, California.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
