import Reveal from '@/components/Reveal';
import { riseLines } from '@/data/content';

export default function RiseSection() {
  return (
    <section className="relative bg-charcoal-950 bg-grain py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Faint radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(201, 173, 130, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="container-wide relative z-10">
        {/* Eyebrow */}
        <Reveal className="mb-16 md:mb-20 text-center">
          <p className="eyebrow text-accent/80">The Rise</p>
        </Reveal>

        {/* Manifesto lines */}
        <div className="mx-auto max-w-4xl space-y-2 md:space-y-3">
          {riseLines.map((line, i) => {
            const isFinal = i === riseLines.length - 1;

            return (
              <Reveal key={line.text} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <p
                  className={`text-center font-serif font-light leading-tight transition-all duration-700 ${
                    isFinal
                      ? 'text-[clamp(3rem,8vw,6rem)] italic text-accent'
                      : 'text-[clamp(1.75rem,4.5vw,3.5rem)] text-ivory-200'
                  }`}
                >
                  {line.text}
                </p>
              </Reveal>
            );
          })}
        </div>

        {/* Closing statement */}
        <Reveal className="mt-16 md:mt-24" delay={2}>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-accent/40" />
              <span className="text-xs uppercase tracking-[0.3em] text-accent">
                The Truth
              </span>
              <div className="h-px w-12 bg-accent/40" />
            </div>
            <p className="font-serif text-4xl font-light text-ivory-50 md:text-5xl lg:text-6xl text-balance">
              If I can rise,
              <br />
              <span className="italic text-accent">so can you.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
