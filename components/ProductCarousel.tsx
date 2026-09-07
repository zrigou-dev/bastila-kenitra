"use client";

import { Children, useRef, useState } from "react";

/**
 * Sur mobile, les deux cartes produit défilent en carrousel (scroll-snap,
 * chaque carte occupe l'essentiel de l'écran avec un aperçu de la suivante) :
 * ça évite un long défilement vertical et signale tout de suite qu'il y a un
 * second choix. À partir de sm, retour à la grille à deux colonnes.
 */
export function ProductCarousel({ children }: { children: React.ReactNode }) {
  const items = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el || el.children.length === 0) return;
    const slide = el.children[0] as HTMLElement;
    const step = slide.offsetWidth + 16;
    // abs() : en RTL, scrollLeft part de 0 et devient négatif en avançant —
    // seule la magnitude nous intéresse ici, pas le signe.
    const index = Math.round(Math.abs(el.scrollLeft) / step);
    setActive(Math.min(items.length - 1, Math.max(0, index)));
  };

  return (
    <div>
      {/* contain-layout : en RTL, les enfants qui débordent à gauche d'un
          conteneur overflow-x-auto élargissent quand même le scrollWidth du
          document (bug de rendu bien connu) malgré un clip visuel correct.
          Le containment isole la boîte et supprime cette fuite. */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-ps-5 px-5 pb-1 contain-layout
                   [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                   sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-7 sm:overflow-visible sm:px-0 sm:pb-0 sm:contain-none lg:gap-9"
      >
        {items.map((child, i) => (
          <div key={i} className="w-[84%] shrink-0 snap-start sm:w-auto">
            {child}
          </div>
        ))}
      </div>

      {items.length > 1 ? (
        <div className="mt-5 flex items-center justify-center gap-1.5 sm:hidden" aria-hidden="true">
          {items.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-plum-900" : "w-1.5 bg-plum-900/25"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
