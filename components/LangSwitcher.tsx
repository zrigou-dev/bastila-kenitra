import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { pathFor } from "@/lib/i18n";

/* Codes courts (convention universelle des sélecteurs de langue) : plus lisibles
   qu'une lettre arabe isolée pour un visiteur qui ne lit pas encore cette langue. */
const SHORT: Record<Lang, string> = { ar: "AR", fr: "FR" };

type Props = {
  lang: Lang;
  tone?: "dark" | "light";
  /** Réduit aux codes courts (AR/FR) sous `sm` — pour la place comptée du header mobile. */
  compactOnMobile?: boolean;
};

export function LangSwitcher({ lang, tone = "dark", compactOnMobile = false }: Props) {
  const t = getContent(lang);
  const items: { code: Lang; label: string }[] = [
    { code: "ar", label: t.langSwitch.toAr },
    { code: "fr", label: t.langSwitch.toFr },
  ];

  const shell =
    tone === "dark"
      ? "border-plum-900/15 bg-white/70"
      : "border-gold-400/30 bg-white/10";

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border p-0.5 ${shell}`}
      role="group"
      aria-label={t.langSwitch.label}
    >
      {items.map((item) => {
        const active = item.code === lang;
        return (
          <a
            key={item.code}
            href={pathFor(item.code)}
            hrefLang={item.code}
            aria-current={active ? "true" : undefined}
            className={`flex h-8 items-center rounded-full font-semibold transition-colors ${
              compactOnMobile ? "px-2.5 text-[0.72rem] sm:px-3 sm:text-[0.78rem]" : "px-3 text-[0.78rem]"
            } ${
              active
                ? "bg-plum-900 text-gold-200"
                : tone === "dark"
                  ? "text-muted hover:text-plum-900"
                  : "text-cream-200/70 hover:text-cream-100"
            } ${item.code === "ar" && !compactOnMobile ? "font-arabic" : ""}`}
          >
            {compactOnMobile ? (
              <>
                <span className="sm:hidden">{SHORT[item.code]}</span>
                <span className={`hidden sm:inline ${item.code === "ar" ? "font-arabic" : ""}`}>{item.label}</span>
              </>
            ) : (
              item.label
            )}
          </a>
        );
      })}
    </div>
  );
}
