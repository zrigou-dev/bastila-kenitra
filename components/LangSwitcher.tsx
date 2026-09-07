import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { pathFor } from "@/lib/i18n";

export function LangSwitcher({ lang, tone = "dark" }: { lang: Lang; tone?: "dark" | "light" }) {
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
            className={`flex h-8 items-center rounded-full px-3 text-[0.78rem] font-semibold transition-colors ${
              active
                ? "bg-plum-900 text-gold-200"
                : tone === "dark"
                  ? "text-muted hover:text-plum-900"
                  : "text-cream-200/70 hover:text-cream-100"
            } ${item.code === "ar" ? "font-arabic" : ""}`}
          >
            {item.label}
          </a>
        );
      })}
    </div>
  );
}
