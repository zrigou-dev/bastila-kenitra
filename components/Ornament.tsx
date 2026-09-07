export function Ornament({ className = "", tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "#C9A24A" : "#E0C075";
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="rule-gold w-14 opacity-70 sm:w-24" />
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke={color} strokeWidth="1.1">
        <path d="M13 1.6 18 6.6 23.4 13 18 19.4 13 24.4 8 19.4 2.6 13 8 6.6Z" />
        <circle cx="13" cy="13" r="3.1" />
      </svg>
      <span className="rule-gold w-14 opacity-70 sm:w-24" />
    </div>
  );
}
