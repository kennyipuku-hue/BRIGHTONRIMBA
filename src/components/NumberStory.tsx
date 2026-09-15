import Reveal from '@/components/Reveal';
import { numbers } from '@/data/content';

export default function NumberStory() {
  return (
    <section className="relative bg-charcoal-900 bg-grain py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Faint top/bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-transparent to-charcoal-950 pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Eyebrow */}
        <Reveal className="mb-16 text-center md:mb-24">
          <p className="eyebrow text-accent/80">The Story in Four Numbers</p>
        </Reveal>

        {/* Numbers grid */}
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-8 md:gap-y-20 lg:grid-cols-4 lg:gap-x-4">
          {numbers.map((item, i) => (
            <Reveal
              key={item.number}
              delay={(i + 1) as 1 | 2 | 3 | 4}
              className="group text-center"
            >
              <div className="relative">
                {/* Number */}
                <div className="font-serif font-light text-ivory-50 text-[clamp(5rem,12vw,9rem)] leading-none tracking-tight transition-all duration-700 group-hover:text-accent group-hover:scale-105">
                  {item.number}
                </div>

                {/* Divider */}
                <div className="mx-auto mt-6 h-px w-12 bg-accent/40 transition-all duration-700 group-hover:w-20" />

                {/* Text */}
                <p className="mt-6 font-serif text-lg italic text-ivory-300 md:text-xl">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom line */}
        <Reveal className="mt-20 md:mt-28" delay={2}>
          <div className="mx-auto max-w-xl text-center">
            <p className="font-serif text-2xl italic text-ivory-200 md:text-3xl text-pretty">
              Four moments. One life. A story that was supposed to end — but
              didn't.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
