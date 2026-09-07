"use client";

import Image from "next/image";
import { useState } from "react";
import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import {
  PHOTOS,
  PRICES,
  SERVINGS,
  type Servings,
  type VariantId,
  pricePerPerson,
  waLink,
} from "@/lib/business";
import { WhatsAppButton } from "./WhatsAppButton";

export function ProductCard({ lang, variant }: { lang: Lang; variant: VariantId }) {
  const t = getContent(lang);
  const item = t.products.items[variant];
  const isAr = lang === "ar";
  const [servings, setServings] = useState<Servings>(8);
  const price = PRICES[variant][servings];
  const photo = PHOTOS[variant].square;

  return (
    <article className="card group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative aspect-square overflow-hidden bg-plum-900">
        <Image
          src={photo.src}
          alt={item.alt}
          width={photo.width}
          height={photo.height}
          loading="lazy"
          quality={75}
          sizes="(max-width: 767px) 92vw, (max-width: 1199px) 46vw, 36rem"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,10,29,0.28)_0%,transparent_26%,transparent_58%,rgba(20,10,29,0.78)_100%)]"
        />
        <span className="absolute bottom-4 start-5 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-plum-950/60 px-3.5 py-1.5 backdrop-blur-sm">
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-gold-400" />
          <span className="eyebrow text-gold-200">{item.tag}</span>
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className={`h-display text-plum-900 ${isAr ? "text-[1.7rem]" : "text-[1.9rem] sm:text-[2.1rem]"}`}>
          {item.name}
        </h3>
        <p className="mt-2.5 text-pretty text-[0.95rem] leading-relaxed text-muted">{item.description}</p>

        <fieldset className="mt-6">
          <legend className="eyebrow mb-3 text-gold-700">{t.products.servingsLegend}</legend>
          <div className="flex flex-wrap gap-2">
            {SERVINGS.map((s) => (
              <label key={s} className="cursor-pointer">
                <input
                  type="radio"
                  name={`servings-${variant}`}
                  value={s}
                  checked={servings === s}
                  onChange={() => setServings(s)}
                  className="peer sr-only"
                />
                <span
                  className="nums flex h-11 min-w-[3.25rem] items-center justify-center rounded-xl border border-cream-300
                             bg-cream-50 px-3 text-[0.95rem] font-semibold text-muted transition-colors
                             hover:border-gold-500/60 hover:text-plum-900
                             peer-checked:border-plum-900 peer-checked:bg-plum-900 peer-checked:text-gold-200
                             peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2
                             peer-focus-visible:outline-gold-600"
                >
                  {s}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 border-t border-cream-200 pt-5">
          <p
            key={servings}
            className="nums font-display text-[2.6rem] font-semibold leading-none text-plum-900 [animation:rise_.3s_cubic-bezier(.2,.7,.3,1)_both]"
          >
            {price} <span className="text-2xl text-gold-600">{isAr ? "درهم" : "dh"}</span>
          </p>
          <p className="nums mt-1.5 text-[0.8rem] text-muted">
            {t.products.perPerson(servings, pricePerPerson(price, servings))}
          </p>
        </div>

        <WhatsAppButton
          href={waLink(t.waMessages.order(item.name, servings, price))}
          className="mt-5 w-full"
          label={t.products.orderAria(item.name, servings)}
        >
          {t.cta.order}
        </WhatsAppButton>
      </div>
    </article>
  );
}
