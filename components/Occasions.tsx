import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { PHOTOS } from "@/lib/business";

export function Occasions({ lang }: { lang: Lang }) {
  const t = getContent(lang);
  const main = PHOTOS.poisson.portrait;
  const inset = PHOTOS.poulet.detail;

  return (
    <section aria-labelledby="occasions-title" className="bg-cream-50 py-14 sm:py-24">
      <div className="wrap grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="reveal relative order-2 pb-14 sm:pb-16 lg:order-1">
          <div className="photo-frame ms-auto w-[86%] rounded-[1.6rem] bg-plum-900 shadow-lift sm:w-[80%] lg:w-[84%]">
            <Image
              src={main.src}
              alt={t.occasions.imageAlt}
              width={main.width}
              height={main.height}
              loading="lazy"
              quality={75}
              sizes="(max-width: 1023px) 74vw, 29rem"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Gros plan en médaillon : la garniture, ce que la vue d'ensemble cache. */}
          <div className="photo-frame absolute bottom-0 start-0 w-[52%] rounded-[1.2rem] bg-plum-900 shadow-lift ring-[6px] ring-cream-50 sm:w-[46%]">
            <Image
              src={inset.src}
              alt={t.occasions.insetAlt}
              width={inset.width}
              height={inset.height}
              loading="lazy"
              quality={72}
              sizes="(max-width: 1023px) 47vw, 16rem"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="eyebrow text-gold-700">{t.occasions.eyebrow}</p>
          <h2 id="occasions-title" className="h-display mt-3 text-balance text-[2.1rem] text-plum-900 sm:text-[2.9rem]">
            {t.occasions.title}
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted">{t.occasions.text}</p>

          <ul className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {t.occasions.items.map((o) => (
              <li key={o.title} className="border-s-2 border-gold-500/40 ps-4">
                <h3 className="font-display text-xl font-semibold text-plum-900">{o.title}</h3>
                <p className="mt-1 text-[0.88rem] leading-relaxed text-muted">{o.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
