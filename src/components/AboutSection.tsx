import Reveal from '@/components/Reveal';
import Portrait from '@/components/Portrait';
import { ArrowRight } from 'lucide-react';
import { aboutRoles } from '@/data/content';

export default function AboutSection() {
  return (
    <section className="relative bg-charcoal-900 bg-grain py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Portrait */}
          <Reveal>
            <Portrait
  label="Brighton Rimba"
  sublabel="Chemical Engineer & Pastor"
  aspect="portrait"
  dark
  image="/brighton-portrait.png"
/>
          </Reveal>

          {/* Content */}
          <div>
            <Reveal>
              <p className="eyebrow mb-6 text-accent/80">Meet Brighton</p>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="mb-8 font-serif text-section font-light leading-tight text-ivory-50 text-balance">
                The boy who had to grow up
                <br />
                became the man who
                <br />
                <span className="italic text-accent">helps others rise.</span>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <div className="mb-8 h-px w-24 bg-accent/40" />
            </Reveal>

            <Reveal delay={2}>
              <p className="mb-8 max-w-lg font-serif text-lg leading-relaxed text-ivory-300 md:text-xl text-pretty">
                Brighton Rimba is a chemical engineer, pastor, speaker and
                mentor whose life is proof that where you start does not
                determine where you finish. From losing both parents before
                sixteen to rebuilding his life from a R100 gift, Brighton now
                dedicates his life to helping others transform adversity into
                purpose.
              </p>
            </Reveal>

            {/* Roles */}
            <Reveal delay={3}>
              <div className="mb-10 flex flex-wrap gap-3">
                {aboutRoles.map((role) => (
                  <span
                    key={role.label}
                    className="border border-charcoal-600 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-ivory-300 transition-colors duration-300 hover:border-accent hover:text-accent"
                  >
                    {role.label}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal delay={4}>
              <a
                href="#story"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ivory-100 link-underline"
              >
                Read My Full Story
                <ArrowRight className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
