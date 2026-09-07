import { WhatsAppIcon } from "./icons";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "outline" | "outline-gold";
  className?: string;
  label?: string;
};

const VARIANTS = {
  gold: "btn-gold",
  outline: "btn-outline",
  "outline-gold": "btn-outline-gold",
} as const;

export function WhatsAppButton({ href, children, variant = "gold", className = "", label }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${VARIANTS[variant]} ${className}`}
    >
      <WhatsAppIcon className="relative z-10 h-[1.15em] w-[1.15em] shrink-0" />
      <span className="relative z-10">{children}</span>
    </a>
  );
}
