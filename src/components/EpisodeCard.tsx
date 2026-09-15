import { Play, Clock } from 'lucide-react';
import type { Episode } from '@/data/content';

export default function EpisodeCard({
  episode,
  featured = false,
}: {
  episode: Episode;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative overflow-hidden bg-charcoal-800 border border-charcoal-700 transition-all duration-500 hover:border-accent/50 ${
        featured ? 'lg:flex lg:items-center' : ''
      }`}
    >
      {/* Artwork */}
      <div
        className={`relative overflow-hidden bg-charcoal-900 ${
          featured ? 'aspect-[16/10] lg:aspect-[4/3] lg:w-1/2' : 'aspect-[16/10]'
        }`}
      >
        {/* Artwork gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-900" />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E\")",
          }}
        />

        {/* Podcast mark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-3 flex items-center justify-center gap-2 text-accent/40">
              <div className="h-px w-8 bg-accent/40" />
              <span className="text-[10px] uppercase tracking-[0.3em]">The Orphan's Masterclass</span>
              <div className="h-px w-8 bg-accent/40" />
            </div>
            <div className="font-serif text-3xl italic text-ivory-200/40">
              {episode.number}
            </div>
          </div>
        </div>

        {/* Play button on hover */}
        <div className="absolute inset-0 flex items-center justify-center bg-charcoal-900/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <button className="flex h-14 w-14 items-center justify-center rounded-full border border-ivory-200/40 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-accent hover:bg-accent">
            <Play className="h-5 w-5 ml-0.5 text-ivory-100" fill="currentColor" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className={featured ? 'p-8 lg:p-12 lg:w-1/2' : 'p-6'}>
        {/* Meta */}
        <div className="mb-3 flex items-center gap-4 text-xs text-charcoal-300">
          <span className="font-medium uppercase tracking-[0.2em] text-accent">
            {episode.number}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {episode.duration}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`mb-3 font-serif font-light text-ivory-50 transition-colors duration-300 group-hover:text-accent ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}
        >
          {episode.title}
        </h3>

        {/* Description */}
        <p
          className={`mb-6 text-charcoal-300 leading-relaxed text-pretty ${
            featured ? 'text-base md:text-lg' : 'text-sm'
          }`}
        >
          {episode.description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4">
          <button className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-ivory-200 transition-colors hover:text-accent">
            <Play className="h-4 w-4" fill="currentColor" />
            Play
          </button>
          <div className="h-4 w-px bg-charcoal-600" />
          <div className="flex items-center gap-3 text-xs text-charcoal-400">
            <a href="#" className="hover:text-accent transition-colors">Spotify</a>
            <a href="#" className="hover:text-accent transition-colors">Apple</a>
            <a href="#" className="hover:text-accent transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </article>
  );
}
