import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { PHONE_DISPLAY, PHONE_TEL, TEXTURE, waLink } from "@/lib/business";
import Image from "next/image";
import { Ornament } from "./Ornament";
import { PhoneIcon } from "./icons";
import { WhatsAppButton } from "./WhatsAppButton";

export function FinalCta({ lang }: { lang: Lang }) {
  const t = getContent(lang);

  return (
    <section
      aria-labelledby="cta-title"
      className="grain relative isolate overflow-hidden bg-plum-950 py-16 text-cream-100 sm:py-28"
    >
      <Image
        src={TEXTURE.src}
        alt=""
        aria-hidden="true"
        width={TEXTURE.width}
        height={TEXTURE.height}
        loading="lazy"
        quality={55}
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-plum-950/75" />
      <div aria-hidden="true" className="pattern absolute inset-0 opacity-[0.07]" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(201,162,74,0.24),transparent_65%)]"
      />

      <div className="wrap relative mx-auto max-w-2xl text-center">
        <Ornament tone="light" />
        <h2 id="cta-title" className="h-display mt-8 text-balance text-[2.2rem] sm:text-[3.4rem]">
          {t.finalCta.title}
        </h2>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-cream-200/85">{t.finalCta.text}</p>

        <div className="mt-9 flex flex-col items-center gap-4">
          <WhatsAppButton href={waLink(t.waMessages.generic)} className="w-full sm:w-auto">
            {t.cta.order}
          </WhatsAppButton>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 text-[0.95rem] font-medium text-cream-200/75 transition-colors hover:text-gold-300"
          >
            <PhoneIcon className="h-4 w-4 text-gold-500" />
            <span>
              {t.finalCta.orCall} <span className="nums">{PHONE_DISPLAY}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
