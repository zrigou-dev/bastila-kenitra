import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { PRICES, SERVINGS, type VariantId, waLink } from "@/lib/business";
import { Ornament } from "./Ornament";
import { WhatsAppIcon } from "./icons";

const COLUMNS: VariantId[] = ["poulet", "poisson"];

export function PriceTable({ lang }: { lang: Lang }) {
  const t = getContent(lang);
  const isAr = lang === "ar";
  const unit = isAr ? "درهم" : "dh";

  return (
    <section id="tarifs" className="grain relative isolate overflow-hidden bg-plum-900 py-14 text-cream-100 sm:py-24">
      <div aria-hidden="true" className="pattern absolute inset-0 opacity-[0.05]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(201,162,74,0.22),transparent_60%)]"
      />

      <div className="wrap relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-500">{t.prices.eyebrow}</p>
          <h2 className="nums h-display mt-3 text-balance text-[2.1rem] text-cream-100 sm:text-5xl">
            {t.prices.title}
          </h2>
          <Ornament className="mt-6" tone="light" />
          <p className="mt-6 text-pretty leading-relaxed text-cream-200/80">{t.prices.intro}</p>
        </div>

        <div className="reveal mx-auto mt-12 max-w-3xl overflow-hidden rounded-[1.5rem] border border-gold-500/30 bg-plum-950/45 backdrop-blur-sm">
          <table className="w-full table-fixed border-collapse text-center">
            <colgroup>
              <col className="w-[30%]" />
              <col className="w-[35%]" />
              <col className="w-[35%]" />
            </colgroup>
            <caption className="sr-only">{t.prices.caption}</caption>
            <thead>
              <tr className="border-b border-gold-500/25">
                <th
                  scope="col"
                  className="px-2 py-5 text-start text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-cream-200/60 sm:px-6 sm:text-[0.7rem]"
                >
                  {t.prices.colFormat}
                </th>
                {COLUMNS.map((v) => (
                  <th key={v} scope="col" className="px-1 py-5 sm:px-4">
                    <span className="block font-display text-lg font-semibold text-gold-300 sm:text-2xl">
                      {v === "poulet" ? t.prices.colPoulet : t.prices.colPoisson}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SERVINGS.map((s) => (
                <tr key={s} className="border-b border-gold-500/15 last:border-0">
                  <th
                    scope="row"
                    className="nums whitespace-nowrap px-2 py-1 text-start font-sans text-[0.85rem] font-semibold text-cream-100 sm:px-6 sm:text-base"
                  >
                    {s} <span className="font-normal text-cream-200/60">{t.prices.people}</span>
                  </th>
                  {COLUMNS.map((v) => {
                    const price = PRICES[v][s];
                    return (
                      <td key={v} className="px-1 py-1.5 sm:px-3">
                        <a
                          href={waLink(t.waMessages.order(t.products.items[v].name, s, price))}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={t.prices.cellAria(price, t.products.items[v].name, s)}
                          className="nums group flex min-h-[52px] items-center justify-center gap-2 rounded-xl px-2
                                     font-display text-xl font-semibold text-cream-100 transition-colors
                                     hover:bg-gold-500/15 hover:text-gold-200 sm:text-[1.7rem]"
                        >
                          {price}
                          <span className="font-sans text-xs font-medium text-gold-500 sm:text-sm">{unit}</span>
                          <WhatsAppIcon className="hidden h-4 w-4 text-gold-400 opacity-0 transition-opacity group-hover:opacity-100 sm:block" />
                        </a>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="reveal mx-auto mt-6 max-w-2xl text-center text-[0.8rem] text-cream-200/60">{t.prices.note}</p>
      </div>
    </section>
  );
}
