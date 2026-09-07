import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { HTML_LOCALE, pathFor } from "@/lib/i18n";
import {
  BRAND_LATIN,
  PHOTOS,
  MAX_PRICE,
  MIN_PRICE,
  PHONE_TEL,
  PRICES,
  SERVINGS,
  SITE_URL,
  type VariantId,
} from "@/lib/business";

const VARIANTS: VariantId[] = ["poulet", "poisson"];

/**
 * Données structurées Schema.org.
 * Uniquement des informations vérifiables (affiche du commerçant) :
 * ni avis, ni note, ni horaires, ni adresse postale, ni coordonnées GPS.
 */
export function JsonLd({ lang }: { lang: Lang }) {
  const t = getContent(lang);
  const businessId = `${SITE_URL}/#bastila-kenitra`;
  const pageUrl = `${SITE_URL}${pathFor(lang)}`.replace(/\/$/, "") || SITE_URL;
  const city = lang === "ar" ? "القنيطرة" : "Kénitra";

  const graph = [
    {
      "@type": "FoodEstablishment",
      "@id": businessId,
      name: BRAND_LATIN,
      alternateName: t.brand,
      description: t.metaDescription,
      url: SITE_URL,
      image: `${SITE_URL}${PHOTOS.poulet.square.src}`,
      telephone: PHONE_TEL,
      servesCuisine: lang === "ar" ? "مغربية" : "Marocaine",
      priceRange: `${MIN_PRICE} – ${MAX_PRICE} MAD`,
      currenciesAccepted: "MAD",
      address: { "@type": "PostalAddress", addressLocality: city, addressCountry: "MA" },
      areaServed: { "@type": "City", name: city },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: t.products.title,
        itemListElement: VARIANTS.flatMap((v) =>
          SERVINGS.map((s) => ({
            "@type": "Offer",
            name: `${t.products.items[v].name} — ${s}`,
            price: String(PRICES[v][s]),
            priceCurrency: "MAD",
            availability: "https://schema.org/InStock",
            url: `${pageUrl}#tarifs`,
            eligibleQuantity: { "@type": "QuantitativeValue", value: s },
          })),
        ),
      },
      potentialAction: {
        "@type": "OrderAction",
        target: `https://wa.me/${PHONE_TEL.replace("+", "")}`,
      },
    },
    ...VARIANTS.map((v) => ({
      "@type": "Product",
      "@id": `${pageUrl}#${v}`,
      name: t.products.items[v].name,
      description: t.products.items[v].description,
      image: `${SITE_URL}${PHOTOS[v].square.src}`,
      brand: { "@type": "Brand", name: BRAND_LATIN },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "MAD",
        lowPrice: String(Math.min(...SERVINGS.map((s) => PRICES[v][s]))),
        highPrice: String(Math.max(...SERVINGS.map((s) => PRICES[v][s]))),
        offerCount: SERVINGS.length,
        availability: "https://schema.org/InStock",
        seller: { "@id": businessId },
      },
    })),
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      inLanguage: HTML_LOCALE[lang],
      mainEntity: t.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#site`,
      url: SITE_URL,
      name: BRAND_LATIN,
      alternateName: t.brand,
      inLanguage: HTML_LOCALE[lang],
      publisher: { "@id": businessId },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
