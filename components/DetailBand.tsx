import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { PHOTOS, type VariantId } from "@/lib/business";

const VARIANTS: VariantId[] = ["poulet", "poisson"];

/**
 * Bandeau pleine largeur : deux gros plans, croûte et garniture.
 * Aucune information — c'est la texture du produit qui parle.
 */
export function DetailBand({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <section aria-label={t.detailBand.label} className="bg-plum-950">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {VARIANTS.map((variant, i) => {
          const photo = PHOTOS[variant].detail;
          return (
            <div
              key={variant}
              className={`group relative h-[48vw] max-h-[22rem] min-h-[10rem] overflow-hidden sm:h-[32vw] ${
                i === 0 ? "border-b border-gold-500/30 sm:border-b-0 sm:border-e" : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={t.products.items[variant].altDetail}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                quality={72}
                sizes="(max-width: 639px) 100vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,10,29,0.3),transparent_45%,rgba(20,10,29,0.35))]"
              />
              <span className="eyebrow absolute bottom-3 start-4 text-cream-100/80 sm:bottom-5 sm:start-7">
                {t.products.items[variant].name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
