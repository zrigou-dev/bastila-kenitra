import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { LeafIcon, ShieldIcon, SparkleIcon } from "./icons";

const ICONS = [ShieldIcon, LeafIcon, SparkleIcon];

/**
 * Bandeau de confiance, toujours sur 3 colonnes — y compris sur mobile.
 * Chaque motif est écrit dans les deux langues (le titre dans la langue
 * courante, la légende dans l'autre) : une signature bilingue assumée,
 * pas une traduction technique.
 */
export function ClaimsStrip({ lang }: { lang: Lang }) {
  const t = getContent(lang);
  const isAr = lang === "ar";

  return (
    <section aria-label={t.claims.map((c) => c.title).join(" · ")} className="border-b border-cream-300/70 bg-cream-100">
      <div className="wrap grid grid-cols-3 divide-x divide-cream-300/80 rtl:divide-x-reverse">
        {t.claims.map((claim, i) => {
          const Icon = ICONS[i];
          return (
            <div key={claim.title} className="flex flex-col items-center gap-1.5 px-2 py-4 text-center sm:gap-2 sm:py-6">
              <Icon className="h-5 w-5 shrink-0 text-gold-600 sm:h-6 sm:w-6" />
              <p className="font-display text-[0.95rem] font-semibold leading-tight text-plum-900 sm:text-xl">
                {claim.title}
              </p>
              <p
                lang={isAr ? "fr" : "ar"}
                dir={isAr ? "ltr" : "rtl"}
                className={`text-[0.7rem] leading-tight text-gold-700/90 sm:text-sm ${isAr ? "" : "font-arabic"}`}
              >
                {claim.note}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
