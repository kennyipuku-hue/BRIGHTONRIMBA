import { ArrowUpRight } from 'lucide-react';
import type { Service } from '@/data/content';

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group relative overflow-hidden border border-charcoal-200 bg-ivory-50 p-8 transition-all duration-500 hover:border-charcoal-900 hover:bg-charcoal-900 md:p-10">
      {/* Number */}
      <div className="mb-8 flex items-start justify-between">
        <span className="font-serif text-3xl font-light text-charcoal-300 transition-colors duration-500 group-hover:text-accent">
          {service.number}
        </span>
        <Icon
          className="h-6 w-6 text-charcoal-400 transition-colors duration-500 group-hover:text-accent"
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3 className="mb-4 font-serif text-xl font-medium text-charcoal-900 transition-colors duration-500 group-hover:text-ivory-50 md:text-2xl">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-charcoal-500 transition-colors duration-500 group-hover:text-ivory-300 text-pretty">
        {service.description}
      </p>

      {/* Arrow */}
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-charcoal-600 transition-colors duration-500 group-hover:text-accent">
        <span>Learn More</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </article>
  );
}
