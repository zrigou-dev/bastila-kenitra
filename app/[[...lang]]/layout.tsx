import type { Metadata, Viewport } from "next";
import { Cairo, Cormorant_Garamond, Manrope, Reem_Kufi } from "next/font/google";
import { getContent } from "@/lib/content";
import { DIR, HTML_LOCALE, LANGS, langFromParams, pathFor } from "@/lib/i18n";
import { SITE_URL } from "@/lib/business";
import "../globals.css";

const displayLatin = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: false,
  variable: "--font-display-latin",
});

const bodyLatin = Manrope({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: false,
  variable: "--font-body-latin",
});

/* Polices variables : un seul fichier par famille, et rien n'est préchargé —
   le navigateur ne télécharge que ce que la page utilise réellement. */
const displayArabic = Reem_Kufi({
  subsets: ["arabic"],
  display: "swap",
  preload: false,
  variable: "--font-display-ar",
});

const bodyArabic = Cairo({
  subsets: ["arabic"],
  display: "swap",
  preload: false,
  variable: "--font-body-ar",
});

const FONTS = [displayLatin, bodyLatin, displayArabic, bodyArabic].map((f) => f.variable).join(" ");

type Params = { params: Promise<{ lang?: string[] }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const lang = langFromParams((await params).lang);
  const t = getContent(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.metaTitle, template: `%s | ${t.brand}` },
    description: t.metaDescription,
    applicationName: t.brand,
    keywords: t.keywords,
    authors: [{ name: t.brand }],
    creator: t.brand,
    publisher: t.brand,
    category: "food",
    alternates: {
      canonical: pathFor(lang),
      languages: {
        ar: "/",
        fr: "/fr",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: HTML_LOCALE[lang].replace("-", "_"),
      alternateLocale: LANGS.filter((l) => l !== lang).map((l) => HTML_LOCALE[l].replace("-", "_")),
      url: pathFor(lang),
      siteName: t.brand,
      title: t.metaTitle,
      description: t.metaDescription,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: t.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDescription,
      images: ["/og.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    formatDetection: { telephone: true, address: false, email: false },
  };
}

export const viewport: Viewport = {
  themeColor: "#1E1029",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang?: string[] }>;
}) {
  const lang = langFromParams((await params).lang);

  return (
    <html lang={lang} dir={DIR[lang]} className={FONTS}>
      <body>{children}</body>
    </html>
  );
}
