import Reveal from '@/components/Reveal';
import { ArrowRight, Mic } from 'lucide-react';
import { speakingAudiences } from '@/data/content';

export default function SpeakingSection() {
  return (
    <section
      id="speaking"
      className="relative overflow-hidden bg-charcoal-900 bg-grain py-24 md:py-32 lg:py-40"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/speaking-stage.webp"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/80 to-charcoal-900/60" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Left — headline + message */}
          <div>
            <Reveal>
              <div className="mb-6 flex items-center gap-3">
                <Mic className="h-5 w-5 text-accent" strokeWidth={1.5} />
                <p className="eyebrow text-accent/80">Speaking</p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="mb-8 font-serif text-display font-light text-ivory-50 text-balance">
                I teach people
                <br />
                how to <span className="italic text-accent">rise.</span>
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <div className="mb-8 h-px w-24 bg-accent/40" />
            </Reveal>

            <Reveal delay={2}>
              <blockquote className="max-w-lg border-l-2 border-accent/50 pl-6 font-serif text-xl italic leading-relaxed text-ivory-200 md:text-2xl text-pretty">
                "I'm not just a motivational speaker. I'm a chemical engineer
                who understands transformation, a pastor who understands the
                soul, and an orphan who understands the bottom."
              </blockquote>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-10">
                <a href="#contact" className="btn-primary bg-ivory-100 text-charcoal-900 hover:bg-accent">
                  Book Brighton
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — audiences */}
          <Reveal delay={2}>
            <div>
              <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-ivory-400">
                Brighton speaks for
              </p>
              <div className="space-y-px bg-charcoal-700">
                {speakingAudiences.map((audience, i) => (
                  <div
                    key={audience.label}
                    className="group flex items-center justify-between bg-charcoal-800 px-6 py-5 transition-all duration-500 hover:bg-charcoal-700"
                  >
                    <span className="font-serif text-2xl font-light text-ivory-100 transition-colors duration-300 group-hover:text-accent md:text-3xl">
                      {audience.label}
                    </span>
                    <span className="text-sm text-charcoal-400 transition-colors duration-300 group-hover:text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
