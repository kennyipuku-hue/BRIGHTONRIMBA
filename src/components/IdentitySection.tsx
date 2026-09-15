import Reveal from '@/components/Reveal';
import { identities } from '@/data/content';

export default function IdentitySection() {
  return (
    <section className="relative bg-ivory-50 py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container-wide">
        {/* Header */}
        <Reveal className="mb-16 md:mb-24 text-center">
          <p className="eyebrow mb-6">The Unlikely Combination</p>
          <h2 className="font-serif text-display font-light text-charcoal-900 text-balance">
            The Engineer.
            <br />
            The Pastor.
            <br />
            <span className="italic text-earth-terracotta">The Orphan.</span>
          </h2>
        </Reveal>

        {/* Identity cards */}
        <div className="grid grid-cols-1 gap-px bg-charcoal-200 md:grid-cols-3">
          {identities.map((identity, i) => (
            <Reveal
              key={identity.title}
              delay={(i + 1) as 1 | 2 | 3}
              className="h-full"
            >
              <div
                className={`group h-full p-10 md:p-12 transition-all duration-500 ${
                  i === 1
                    ? 'bg-charcoal-900 text-ivory-100 hover:bg-charcoal-800'
                    : 'bg-ivory-50 text-charcoal-900 hover:bg-ivory-100'
                }`}
              >
                {/* Title */}
                <h3
                  className={`mb-6 font-serif text-4xl font-light md:text-5xl ${
                    i === 1 ? 'text-ivory-50' : 'text-charcoal-900'
                  }`}
                >
                  {identity.title}
                </h3>

                {/* Divider */}
                <div
                  className={`mb-6 h-px w-12 transition-all duration-700 group-hover:w-20 ${
                    i === 1 ? 'bg-accent/60' : 'bg-earth-ochre/50'
                  }`}
                />

                {/* Words */}
                <ul className="mb-8 space-y-3">
                  {identity.words.map((word) => (
                    <li
                      key={word}
                      className={`font-serif text-xl italic ${
                        i === 1 ? 'text-ivory-300' : 'text-charcoal-500'
                      }`}
                    >
                      {word}
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed text-pretty ${
                    i === 1 ? 'text-ivory-400' : 'text-charcoal-400'
                  }`}
                >
                  {identity.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing statement */}
        <Reveal className="mt-20 md:mt-28" delay={2}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-earth-ochre/40" />
              <span className="text-xs uppercase tracking-[0.3em] text-earth-ochre">
                The Point
              </span>
              <div className="h-px w-12 bg-earth-ochre/40" />
            </div>
            <p className="font-serif text-2xl leading-relaxed text-charcoal-700 md:text-3xl text-pretty">
              Transformation is not only something Brighton understands
              professionally.
              <br />
              <span className="italic text-earth-terracotta">
                It is something he has lived personally.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
