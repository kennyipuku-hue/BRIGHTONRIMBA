import Reveal from '@/components/Reveal';
import Portrait from '@/components/Portrait';
import { User, MapPin, Coins, GraduationCap, Wrench, Heart } from 'lucide-react';
import { storyPoints } from '@/data/content';

const pointIcons = [
  User,
  Heart,
  User,
  Heart,
  GraduationCap,
  MapPin,
  Coins,
  User,
  GraduationCap,
  Wrench,
];

export default function StoryTimeline() {
  return (
    <section id="story" className="relative bg-ivory-50 py-24 md:py-32 lg:py-40">
      <div className="container-wide">
        {/* Headline */}
        <Reveal className="mb-20 md:mb-32">
          <div className="max-w-4xl">
            <p className="eyebrow mb-6">The Story</p>
            <h2 className="font-serif text-display font-light text-charcoal-900 text-balance">
              I am not just a storyteller.
              <br />
              <span className="italic text-earth-terracotta">I am the story.</span>
            </h2>
            <div className="mt-8 h-px w-32 bg-earth-ochre/40" />
          </div>
        </Reveal>

        {/* Story timeline */}
        <div className="space-y-20 md:space-y-32 lg:space-y-40">
          {storyPoints.map((point, i) => {
            const Icon = pointIcons[i] || User;
            const isEven = i % 2 === 0;

            return (
              <Reveal key={point.year}>
                <div
                  className={`grid grid-cols-1 items-center gap-8 md:gap-12 lg:gap-20 ${
                    isEven ? 'lg:grid-cols-[1fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1fr]'
                  }`}
                >
                  {/* Image / Portrait */}
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="group relative overflow-hidden">
                      <Portrait
                        label={point.title}
                        sublabel={point.year}
                        icon={Icon}
                        aspect="landscape"
                        dark={i % 3 === 0}
                        className="transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className={isEven ? '' : 'lg:order-1'}>
                    {/* Year tag */}
                    <div className="mb-4 flex items-center gap-4">
                      <span className="text-xs font-medium uppercase tracking-[0.3em] text-earth-ochre">
                        {point.year}
                      </span>
                      <span className="h-px flex-1 bg-charcoal-200" />
                      <span className="text-xs font-medium text-charcoal-300">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 font-serif text-3xl font-light text-charcoal-900 md:text-4xl">
                      {point.title}
                    </h3>

                    {/* Text */}
                    <p className="max-w-md font-serif text-lg leading-relaxed text-charcoal-500 md:text-xl text-pretty">
                      {point.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Closing statement */}
        <Reveal className="mt-24 md:mt-32 lg:mt-40" delay={2}>
          <div className="border-t border-charcoal-200 pt-16 text-center">
            <p className="font-serif text-4xl font-light italic text-charcoal-900 md:text-5xl lg:text-6xl text-balance">
              If I can rise,
              <br />
              <span className="text-earth-terracotta">so can you.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
