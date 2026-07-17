import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Canyon & Vine Electrology | American Canyon, CA",
  description:
    "A future private electrology studio serving American Canyon and the Napa–Solano community with inclusive, permanent hair removal care.",
  keywords: [
    "electrolysis American Canyon",
    "electrologist Napa",
    "permanent hair removal Solano County",
    "gender affirming electrolysis",
    "PCOS facial hair removal",
  ],
  openGraph: {
    title: "Canyon & Vine Electrology",
    description: "Permanent hair removal, thoughtfully done. Opening after licensure in American Canyon, California.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: false,
    follow: false,
  },
};

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
