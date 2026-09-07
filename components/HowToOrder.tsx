import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { waLink } from "@/lib/business";
import { Ornament } from "./Ornament";
import { WhatsAppButton } from "./WhatsAppButton";

export function HowToOrder({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <section id="commander" className="bg-cream-100 py-14 sm:py-24">
      <div className="wrap">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-gold-700">{t.how.eyebrow}</p>
          <h2 className="h-display mt-3 text-balance text-[2.1rem] text-plum-900 sm:text-5xl">{t.how.title}</h2>
          <Ornament className="mt-6" />
        </div>

        <ol className="reveal mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {t.how.steps.map((step, i) => (
            <li key={step.title} className="relative rounded-2xl border border-cream-300/80 bg-cream-50 p-6 pt-8">
              <span
                aria-hidden="true"
                className="nums absolute -top-4 start-6 flex h-9 w-9 items-center justify-center rounded-full border border-gold-500/50 bg-plum-900 font-display text-lg font-semibold text-gold-300"
              >
                {i + 1}
              </span>
              <h3 className="font-display text-2xl font-semibold text-plum-900">{step.title}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-12 flex justify-center">
          <WhatsAppButton href={waLink(t.waMessages.generic)}>{t.cta.startOrder}</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
