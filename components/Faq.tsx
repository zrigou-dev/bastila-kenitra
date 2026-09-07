import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { waLink } from "@/lib/business";
import { ChevronDownIcon } from "./icons";
import { Ornament } from "./Ornament";

export function Faq({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <section id="faq" className="bg-cream-50 py-14 sm:py-24">
      <div className="wrap">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-700">{t.faq.eyebrow}</p>
          <h2 className="h-display mt-3 text-balance text-[2.1rem] text-plum-900 sm:text-5xl">{t.faq.title}</h2>
          <Ornament className="mt-6" />
        </div>

        <div className="reveal mx-auto mt-12 max-w-3xl divide-y divide-cream-300/90 border-y border-cream-300/90">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-start">
                <h3 className="font-display text-[1.3rem] font-semibold leading-snug text-plum-900 sm:text-2xl">
                  {item.q}
                </h3>
                <ChevronDownIcon className="h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="max-w-2xl pb-6 pe-8 text-pretty leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-[0.92rem] text-muted">
          {t.faq.more}
          <a
            href={waLink(t.waMessages.generic)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-plum-900 underline decoration-gold-500 decoration-2 underline-offset-4 hover:text-gold-700"
          >
            {t.faq.moreLink}
          </a>
          {t.faq.moreEnd}
        </p>
      </div>
    </section>
  );
}
