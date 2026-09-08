import type { Lang } from "@/lib/i18n";

export function Wordmark({
  lang,
  tone = "dark",
  className = "",
}: {
  lang: Lang;
  tone?: "dark" | "light";
  className?: string;
}) {
  const main = tone === "dark" ? "text-plum-900" : "text-cream-100";
  const sub = tone === "dark" ? "text-gold-700" : "text-gold-300";
  const isAr = lang === "ar";

  return (
    <span className={`flex flex-col items-start leading-none ${className}`}>
      <span
        className={`font-display font-semibold ${main} ${isAr ? "text-[1.5rem] leading-tight" : "text-[1.35rem] uppercase tracking-[0.22em]"
          }`}
      >
        {isAr ? "بسطيلة" : "pastilla"}
      </span>
      <span
        className={`mt-[3px] flex items-center gap-1.5 font-semibold ${sub} ${isAr ? "text-[0.68rem] tracking-normal" : "text-[0.5rem] uppercase tracking-[0.42em]"
          }`}
      >
        <span aria-hidden="true" className="inline-block h-px w-3 bg-current opacity-60" />
        {isAr ? "القنيطرة" : "Kénitra"}
        <span aria-hidden="true" className="inline-block h-px w-3 bg-current opacity-60" />
      </span>
    </span>
  );
}
