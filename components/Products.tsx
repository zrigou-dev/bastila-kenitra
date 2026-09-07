import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { Ornament } from "./Ornament";
import { ProductCard } from "./ProductCard";

export function Products({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <section id="bastilas" className="bg-cream-50 py-20 sm:py-24">
      <div className="wrap">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-700">{t.products.eyebrow}</p>
          <h2 className="h-display mt-3 text-balance text-[2.2rem] text-plum-900 sm:text-5xl">
            {t.products.title}
          </h2>
          <Ornament className="mt-6" />
          <p className="mt-6 text-pretty leading-relaxed text-muted">{t.products.intro}</p>
        </div>

        <div className="reveal mt-14 grid gap-7 md:grid-cols-2 lg:gap-9">
          <ProductCard lang={lang} variant="poulet" />
          <ProductCard lang={lang} variant="poisson" />
        </div>
      </div>
    </section>
  );
}
