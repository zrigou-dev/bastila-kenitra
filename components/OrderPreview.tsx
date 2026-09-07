import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { PRICES, waLink } from "@/lib/business";
import { CheckIcon, WhatsAppIcon } from "./icons";
import { WhatsAppButton } from "./WhatsAppButton";

/**
 * Lève la principale hésitation : « qu'est-ce qui se passe si je clique ? »
 * On montre exactement le message qui sera pré-rempli dans WhatsApp.
 */
export function OrderPreview({ lang }: { lang: Lang }) {
  const t = getContent(lang);
  const name = t.products.items.poulet.name;
  const servings = 8;
  const price = PRICES.poulet[servings];
  const message = t.preview.message(name, servings, price);

  return (
    <section aria-labelledby="preview-title" className="bg-cream-100 py-20 sm:py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="reveal order-2 lg:order-1">
          {/* Maquette de conversation — illustration, pas une vraie capture */}
          <div className="mx-auto w-full max-w-[24rem] overflow-hidden rounded-[1.6rem] border border-cream-300 bg-white shadow-lift">
            <div className="flex items-center gap-3 bg-plum-900 px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/20 text-gold-300">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-[0.9rem] font-semibold text-cream-100">
                  {t.preview.bubbleName}
                </span>
                <span className="block text-[0.7rem] text-cream-200/60">WhatsApp</span>
              </span>
            </div>

            <div className="space-y-3 bg-[#EDE4D6] px-4 py-6">
              <div className="ms-auto max-w-[92%] rounded-2xl rounded-ee-sm bg-[#DCF8C6] px-4 py-3 shadow-sm">
                <p className="text-[0.92rem] leading-relaxed text-[#1F2C1A]">{message}</p>
                <span className="mt-1 flex items-center justify-end gap-1 text-[0.65rem] text-[#5A6B4F]">
                  <CheckIcon className="h-3 w-3" />
                  <CheckIcon className="-ms-2 h-3 w-3" />
                </span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-[0.8rem] text-muted">{t.preview.hint}</p>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow text-gold-700">{t.preview.eyebrow}</p>
          <h2 id="preview-title" className="h-display mt-3 text-balance text-[2.1rem] text-plum-900 sm:text-[2.9rem]">
            {t.preview.title}
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted">{t.preview.text}</p>
          <WhatsAppButton href={waLink(t.waMessages.generic)} className="mt-8 w-full sm:w-auto">
            {t.cta.startOrder}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
