import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { hrefFor } from "@/lib/i18n";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/business";
import { LangSwitcher } from "./LangSwitcher";
import { ScooterIcon, WhatsAppIcon } from "./icons";
import { Wordmark } from "./Wordmark";

export function Footer({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <footer className="border-t border-gold-500/20 bg-plum-900 pb-28 pt-14 text-cream-200/75 sm:pb-14">
      <div className="wrap">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Wordmark lang={lang} tone="light" />
            <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed">{t.footer.about}</p>
            <div className="mt-5">
              <LangSwitcher lang={lang} tone="light" />
            </div>
          </div>

          <nav aria-label={t.footer.siteHeading}>
            <h2 className="eyebrow text-gold-500">{t.footer.siteHeading}</h2>
            <ul className="mt-4 space-y-2.5">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <a href={hrefFor(lang, item.href)} className="text-[0.92rem] transition-colors hover:text-gold-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-gold-500">{t.footer.orderHeading}</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={waLink(t.waMessages.generic)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 font-display text-2xl font-semibold text-gold-200 transition-colors hover:text-gold-300"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  <span className="nums-ltr">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_TEL}`} className="text-[0.92rem] transition-colors hover:text-gold-300">
                  {t.footer.callLabel} <span className="nums-ltr">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-[0.92rem]">
                <ScooterIcon className="h-4 w-4 shrink-0 text-gold-500 flip-rtl" />
                {t.footer.delivery}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold-500/15 pt-6 text-[0.78rem] text-cream-200/55 sm:flex-row">
          <p>
            <span className="nums">© {new Date().getFullYear()}</span> {t.brand}. {t.footer.rights}
          </p>
          <p>{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
