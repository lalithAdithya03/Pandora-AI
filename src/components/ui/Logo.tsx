import { Link } from 'react-router-dom';

export function LogoMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="vq-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgb(var(--hero-a))" />
          <stop offset="1" stopColor="rgb(var(--hero-b))" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#vq-g)" />
      <path d="M16 18h9l7 18 7-18h9L36 48h-8z" fill="#fff" />
    </svg>
  );
}

export function Logo({ to = '/', compact = false }: { to?: string; compact?: boolean }) {
  return (
    <Link to={to} className="flex items-center gap-2.5" aria-label="VYQORA AI home">
      <LogoMark />
      {!compact && (
        <span className="leading-tight">
          <span className="block font-display text-lg font-extrabold tracking-tight">
            VYQORA <span className="text-accent">AI</span>
          </span>
          <span className="block text-[11px] font-medium text-muted">Knowledge Without Boundaries</span>
        </span>
      )}
    </Link>
  );
}
