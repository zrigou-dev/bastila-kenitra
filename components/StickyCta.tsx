import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { PHONE_TEL, waLink } from "@/lib/business";
import { PhoneIcon } from "./icons";
import { WhatsAppButton } from "./WhatsAppButton";

/** Barre de commande fixe — mobile uniquement. */
export function StickyCta({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <div className="safe-bottom fixed inset-x-0 bottom-0 z-40 border-t border-gold-500/25 bg-plum-950/95 px-4 py-3 shadow-[0_-10px_28px_rgba(10,4,16,0.35)] backdrop-blur-md sm:hidden">
      <div className="flex items-center gap-2.5">
        <a
          href={`tel:${PHONE_TEL}`}
          aria-label={t.cta.callShort}
          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-300 transition-[transform,background-color] active:scale-[0.94] active:bg-gold-500/15"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[0.9rem] font-semibold leading-tight text-cream-100">{t.sticky.title}</p>
          <p className="nums truncate text-[0.72rem] text-gold-400">{t.sticky.note}</p>
        </div>
        <WhatsAppButton
          href={waLink(t.waMessages.generic)}
          className="pulse-glow !min-h-[46px] shrink-0 !px-4 !text-[0.85rem] active:scale-[0.96]"
        >
          {t.cta.orderShort}
        </WhatsAppButton>
      </div>
    </div>
  );
}
