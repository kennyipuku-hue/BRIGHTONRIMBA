import Reveal from '@/components/Reveal';
import ServiceCard from '@/components/ServiceCard';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/content';

export default function ServicesSection() {
  return (
    <section
      id="work-with-me"
      className="relative bg-ivory-200 py-24 md:py-32 lg:py-40"
    >
      <div className="container-wide">
        {/* Header */}
        <Reveal className="mb-16 md:mb-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-6">Work With Me</p>
            <h2 className="font-serif text-display font-light text-charcoal-900 text-balance">
              How I can help you <span className="italic text-earth-terracotta">rise.</span>
            </h2>
            <div className="mt-8 h-px w-32 bg-earth-ochre/40" />
          </div>
        </Reveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-px bg-charcoal-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-16 text-center" delay={2}>
          <a href="#contact" className="btn-primary">
            Work With Brighton
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
