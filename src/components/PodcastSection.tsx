import Reveal from '@/components/Reveal';
import EpisodeCard from '@/components/EpisodeCard';
import { ArrowRight } from 'lucide-react';
import { episodes } from '@/data/content';

export default function PodcastSection() {
  const featured = episodes.find((e) => e.featured);
  const latest = episodes.filter((e) => !e.featured);

  return (
    <section
      id="masterclass"
      className="relative bg-ivory-100 py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      <div className="container-wide">
        {/* Header */}
        <Reveal className="mb-16 md:mb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">The Podcast</p>
            <h2 className="font-serif text-display font-light text-charcoal-900 text-balance">
              The Orphan's <span className="italic text-earth-terracotta">Masterclass</span>
            </h2>
            <p className="mt-4 font-serif text-xl italic text-charcoal-400">
              A masterclass in resilience.
            </p>
            <div className="mt-8 h-px w-32 bg-earth-ochre/40" />
          </div>
        </Reveal>

        {/* Description */}
        <Reveal delay={1} className="mb-16 md:mb-20">
          <p className="max-w-2xl font-serif text-lg leading-relaxed text-charcoal-500 md:text-xl text-pretty">
            "The Orphan's Masterclass is a podcast for anyone who has ever been
            counted out." Brighton shares real conversations around resilience,
            faith, adversity, humble beginnings and what it takes to rise again
            — no matter where you started.
          </p>
        </Reveal>

        {/* Featured episode */}
        {featured && (
          <Reveal delay={2} className="mb-16 md:mb-20">
            <EpisodeCard episode={featured} featured />
          </Reveal>
        )}

        {/* Latest episodes */}
        <Reveal className="mb-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-light text-charcoal-900 md:text-3xl">
              Latest Episodes
            </h3>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {latest.map((episode, i) => (
            <Reveal key={episode.number} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <EpisodeCard episode={episode} />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-16 text-center" delay={2}>
          <a
            href="#"
            className="btn-primary"
          >
            Explore the Masterclass
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
