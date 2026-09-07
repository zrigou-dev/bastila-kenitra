"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { getContent } from "@/lib/content";
import { hrefFor } from "@/lib/i18n";
import { PHONE_DISPLAY, PHONE_TEL, waLink } from "@/lib/business";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";
import { WhatsAppButton } from "./WhatsAppButton";
import { LangSwitcher } from "./LangSwitcher";

export function MobileMenu({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const t = getContent(lang);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "✕" : "☰"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-plum-900/15 text-plum-900 transition-colors hover:bg-plum-900/5"
      >
        {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {open ? (
        <div
          className="fixed inset-x-0 bottom-0 top-[68px] z-40 bg-plum-950/50 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
        >
          <div
            id="menu-mobile"
            ref={panelRef}
            onClick={(e) => e.stopPropagation()}
            className="border-b border-gold-500/25 bg-cream-50 px-5 pb-7 pt-3 shadow-lift [animation:rise_.35s_cubic-bezier(.2,.7,.3,1)_both]"
          >
            <nav aria-label={t.langSwitch.label}>
              <ul className="divide-y divide-cream-300/80">
                {t.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={hrefFor(lang, item.href)}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[54px] items-center font-display text-2xl font-semibold text-plum-900"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <WhatsAppButton href={waLink(t.waMessages.generic)} className="mt-5 w-full">
              {t.cta.order}
            </WhatsAppButton>
            <div className="mt-4 flex items-center justify-between gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="nums flex items-center gap-2 text-sm font-semibold text-muted"
              >
                <PhoneIcon className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
              <LangSwitcher lang={lang} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
