export const LANGS = ["ar", "fr"] as const;
export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "ar";

export function isLang(value: string | undefined): value is Lang {
  return value === "ar" || value === "fr";
}

/** `/` pour l'arabe (langue par défaut), `/fr` pour le français. */
export function langFromParams(segments: string[] | undefined): Lang {
  return isLang(segments?.[0]) ? (segments![0] as Lang) : DEFAULT_LANG;
}

export function pathFor(lang: Lang): string {
  return lang === DEFAULT_LANG ? "/" : `/${lang}`;
}

export function hrefFor(lang: Lang, hash: string): string {
  const base = pathFor(lang);
  return base === "/" ? hash : `${base}${hash}`;
}

export const DIR: Record<Lang, "rtl" | "ltr"> = { ar: "rtl", fr: "ltr" };
export const HTML_LOCALE: Record<Lang, string> = { ar: "ar-MA", fr: "fr-MA" };
