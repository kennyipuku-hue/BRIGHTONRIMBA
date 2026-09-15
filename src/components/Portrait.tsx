import { type LucideIcon } from 'lucide-react';

type PortraitProps = {
  label: string;
  sublabel?: string;
  icon?: LucideIcon;
  aspect?: 'portrait' | 'square' | 'landscape' | 'wide';
  className?: string;
  dark?: boolean;
  image?: string;
};

const aspectClasses: Record<string, string> = {
  portrait: 'aspect-[3/4]',
  square: 'aspect-square',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
};

export default function Portrait({
  label,
  sublabel,
  icon: Icon,
  aspect = 'portrait',
  className = '',
  dark = false,
  image,
}: PortraitProps) {
  return (
    <div
      className={`relative ${aspectClasses[aspect]} w-full overflow-hidden ${
        dark
          ? 'bg-charcoal-800 border border-charcoal-700'
          : 'bg-charcoal-100 border border-charcoal-200'
      } ${className}`}
    >
      {image && (
        <img
          src={image}
          alt={label}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      )}

      <div
        className={`absolute inset-0 ${
          dark
            ? 'bg-gradient-to-t from-charcoal-900/70 via-transparent to-charcoal-900/10'
            : 'bg-gradient-to-t from-black/20 via-transparent to-transparent'
        }`}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E\")",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.35) 100%)',
        }}
      />

      {!image && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          {Icon && (
            <Icon
              className={`h-8 w-8 ${
                dark ? 'text-ivory-400/40' : 'text-charcoal-300/50'
              }`}
              strokeWidth={1}
            />
          )}

          <div
            className={`text-[10px] font-medium uppercase tracking-[0.3em] ${
              dark ? 'text-ivory-400/60' : 'text-charcoal-300/70'
            }`}
          >
            Portrait
          </div>

          <div
            className={`font-serif text-lg italic ${
              dark ? 'text-ivory-200/70' : 'text-charcoal-400/60'
            }`}
          >
            {label}
          </div>

          {sublabel && (
            <div
              className={`text-xs ${
                dark ? 'text-ivory-400/40' : 'text-charcoal-300/50'
              }`}
            >
              {sublabel}
            </div>
          )}
        </div>
      )}
    </div>
  );
}