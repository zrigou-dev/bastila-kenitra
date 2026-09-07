import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";

export function ClaimsStrip({ lang }: { lang: Lang }) {
  const t = getContent(lang);
  const isAr = lang === "ar";

  return (
    <section aria-label={t.claims.map((c) => c.title).join(" · ")} className="border-b border-cream-300/70 bg-cream-100">
      <div className="wrap grid grid-cols-1 divide-y divide-cream-300/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0 rtl:sm:divide-x-reverse">
        {t.claims.map((claim) => (
          <div
            key={claim.title}
            className="flex items-center justify-center gap-3 px-4 py-4 sm:flex-col sm:gap-1 sm:py-6"
          >
            <p className="font-display text-xl font-semibold text-plum-900 sm:text-2xl">{claim.title}</p>
            <p
              lang={isAr ? "fr" : "ar"}
              dir={isAr ? "ltr" : "rtl"}
              className={`text-sm text-gold-700 ${isAr ? "" : "font-arabic"}`}
            >
              {claim.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
