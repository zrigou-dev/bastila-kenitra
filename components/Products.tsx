import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { Ornament } from "./Ornament";
import { ProductCard } from "./ProductCard";
import { ProductCarousel } from "./ProductCarousel";

export function Products({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <section id="bastilas" className="bg-cream-50 py-14 sm:py-24">
      <div className="wrap">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-700">{t.products.eyebrow}</p>
          <h2 className="h-display mt-3 text-balance text-[2rem] text-plum-900 sm:text-5xl">{t.products.title}</h2>
          <Ornament className="mt-5 sm:mt-6" />
          <p className="mt-5 text-pretty leading-relaxed text-muted sm:mt-6">{t.products.intro}</p>
        </div>

        <p className="reveal mt-6 text-center text-[0.8rem] font-medium text-gold-700 sm:hidden" aria-hidden="true">
          {t.products.swipeHint}
        </p>

        <div className="reveal mt-4 sm:mt-14">
          <ProductCarousel>
            <ProductCard lang={lang} variant="poulet" />
            <ProductCard lang={lang} variant="poisson" />
          </ProductCarousel>
        </div>
      </div>
    </section>
  );
}
