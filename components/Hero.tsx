import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { hrefFor } from "@/lib/i18n";
import { MIN_PRICE, PHOTOS, pricePerPerson, waLink } from "@/lib/business";
import { ArrowDownIcon, HomeHeartIcon, LeafIcon, ScooterIcon } from "./icons";
import { WhatsAppButton } from "./WhatsAppButton";

const ICONS = [HomeHeartIcon, LeafIcon, ScooterIcon];

export function Hero({ lang }: { lang: Lang }) {
  const t = getContent(lang);
  const isAr = lang === "ar";
  const photo = PHOTOS.poulet.portrait;

  return (
    <section
      id="top"
      className="grain relative isolate overflow-hidden bg-plum-900 text-cream-100"
      aria-labelledby="hero-title"
    >
      <div aria-hidden="true" className="pattern absolute inset-0 opacity-[0.05]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(115%_80%_at_75%_20%,rgba(214,163,74,0.32),transparent_58%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,4,16,0.35),transparent_28%,transparent_70%,rgba(10,4,16,0.55))]"
      />

      <div className="wrap relative grid items-center gap-10 pb-16 pt-10 sm:gap-12 sm:pb-20 sm:pt-14 lg:grid-cols-[1fr_0.92fr] lg:gap-14 lg:pb-24 lg:pt-20">
        <div className="max-w-xl">
          <p className="eyebrow flex items-center gap-3 text-gold-400">
            <span aria-hidden="true" className="h-px w-8 shrink-0 bg-gold-500/70" />
            {t.hero.eyebrow}
          </p>

          <h1
            id="hero-title"
            className={`h-display mt-4 text-balance text-cream-100 sm:mt-5 ${
              isAr
                ? "text-[2.1rem] sm:text-[3.1rem] lg:text-[3.6rem]"
                : "text-[2.45rem] sm:text-6xl lg:text-[4.15rem]"
            }`}
          >
            {t.hero.titleLead}{" "}
            <em className="not-italic text-gold-300">{t.hero.titleAccent}</em>
          </h1>

          <p className="mt-4 max-w-[34rem] text-pretty text-[1rem] leading-relaxed text-cream-200/85 sm:mt-5 sm:text-[1.05rem]">
            {t.hero.lede}{" "}
            <span className="nums whitespace-nowrap font-semibold text-cream-100">
              {t.hero.fromPrice} {MIN_PRICE} {isAr ? "درهم" : "dh"}
            </span>
            .
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <WhatsAppButton href={waLink(t.waMessages.generic)} className="w-full sm:w-auto">
              {t.cta.order}
            </WhatsAppButton>
            <a href={hrefFor(lang, "#tarifs")} className="btn-outline-gold w-full sm:w-auto">
              {t.cta.seePrices}
              <ArrowDownIcon className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-5 flex items-start gap-2.5 text-[0.86rem] leading-snug text-cream-200/70">
            <span aria-hidden="true" className="relative mt-1.5 flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-70" />
            </span>
            {t.hero.responseNote}
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t border-gold-500/20 pt-5 sm:mt-9 sm:pt-6">
            {t.hero.points.map((label, i) => {
              const Icon = ICONS[i];
              return (
                <li key={label} className="flex items-center gap-2 text-[0.85rem] font-medium text-cream-200/80">
                  <Icon className="h-[18px] w-[18px] shrink-0 text-gold-400" />
                  {label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* La photo est présentée en arche, comme une porte marocaine : le plat
            occupe le bas du cadre, la courbe dégage la tête de la composition. */}
        <div className="relative mx-auto w-full max-w-[23rem] sm:max-w-[27rem] lg:max-w-[30rem]">
          <div
            aria-hidden="true"
            className="absolute -inset-6 bg-[radial-gradient(circle_at_50%_45%,rgba(224,192,117,0.28),transparent_65%)]"
          />
          <div
            aria-hidden="true"
            className="pattern absolute -bottom-6 -end-6 -z-10 hidden h-40 w-40 opacity-25 sm:block"
          />

          <div className="arch-shadow relative">
            {/* Filet doré : l'arche extérieure dorée dépasse de 3 px sous la photo. */}
            <div className="arch bg-[linear-gradient(160deg,#f3dfae_0%,#c9a24a_38%,#8a6618_100%)] p-[3px]">
              <div className="arch relative aspect-[4/5] bg-plum-950">
                <Image
                  src={photo.src}
                  alt={t.products.items.poulet.alt}
                  width={photo.width}
                  height={photo.height}
                  priority
                  fetchPriority="high"
                  quality={75}
                  sizes="(max-width: 639px) 88vw, (max-width: 1023px) 27rem, 30rem"
                  className="h-full w-full object-cover"
                />
                {/* Ancre le bas de la photo dans le fond prune et porte le badge. */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-[linear-gradient(180deg,transparent,rgba(20,10,29,0.72))]"
                />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 start-0 rounded-2xl border border-gold-500/35 bg-plum-950/90 px-5 py-3 shadow-lift backdrop-blur-sm sm:-start-4 sm:px-6 sm:py-3.5">
            <p className="eyebrow text-gold-500">{t.hero.badgeLabel}</p>
            <p className="nums font-display text-3xl font-semibold leading-none text-gold-200 sm:text-[2.2rem]">
              {MIN_PRICE} <span className="text-xl">{isAr ? "درهم" : "dh"}</span>
            </p>
            <p className="mt-1 text-[0.72rem] text-cream-200/70">{t.hero.badgeNote}</p>
            <p className="nums mt-1.5 border-t border-gold-500/20 pt-1.5 text-[0.7rem] text-gold-400/90">
              {t.products.perPerson(4, pricePerPerson(MIN_PRICE, 4))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
