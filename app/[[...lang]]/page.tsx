import { ArchClip } from "@/components/ArchClip";
import { ClaimsStrip } from "@/components/ClaimsStrip";
import { DetailBand } from "@/components/DetailBand";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowToOrder } from "@/components/HowToOrder";
import { JsonLd } from "@/components/JsonLd";
import { Occasions } from "@/components/Occasions";
import { OrderPreview } from "@/components/OrderPreview";
import { PriceTable } from "@/components/PriceTable";
import { Products } from "@/components/Products";
import { StickyCta } from "@/components/StickyCta";
import { getContent } from "@/lib/content";
import { langFromParams } from "@/lib/i18n";

export function generateStaticParams() {
  return [{ lang: [] }, { lang: ["fr"] }];
}

export const dynamicParams = false;

export default async function Page({ params }: { params: Promise<{ lang?: string[] }> }) {
  const lang = langFromParams((await params).lang);
  const t = getContent(lang);

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full
                   focus:bg-plum-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-gold-200"
      >
        {t.skipToContent}
      </a>
      <ArchClip />
      <Header lang={lang} />
      <main id="contenu">
        <Hero lang={lang} />
        <ClaimsStrip lang={lang} />
        <Products lang={lang} />
        <DetailBand lang={lang} />
        <PriceTable lang={lang} />
        <OrderPreview lang={lang} />
        <Occasions lang={lang} />
        <HowToOrder lang={lang} />
        <Faq lang={lang} />
        <FinalCta lang={lang} />
      </main>
      <Footer lang={lang} />
      <StickyCta lang={lang} />
      <JsonLd lang={lang} />
    </>
  );
}
