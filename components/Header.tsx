import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { hrefFor, pathFor } from "@/lib/i18n";
import { waLink } from "@/lib/business";
import { LangSwitcher } from "./LangSwitcher";
import { MobileMenu } from "./MobileMenu";
import { WhatsAppButton } from "./WhatsAppButton";
import { Wordmark } from "./Wordmark";

export function Header({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/20 bg-cream-50/90 backdrop-blur-md">
      <div className="wrap flex h-[68px] items-center justify-between gap-4">
        <a href={pathFor(lang)} className="shrink-0">
          <Wordmark lang={lang} />
        </a>

        <nav aria-label={t.nav[0].label} className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {t.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={hrefFor(lang, item.href)}
                  className="relative text-[0.92rem] font-medium text-muted transition-colors hover:text-plum-900
                             after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold-500
                             after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitcher lang={lang} compactOnMobile />
          <WhatsAppButton
            href={waLink(t.waMessages.generic)}
            className="hidden !min-h-[44px] !px-5 !text-[0.85rem] sm:inline-flex"
          >
            {t.cta.orderShort}
          </WhatsAppButton>
          <MobileMenu lang={lang} />
        </div>
      </div>
    </header>
  );
}
