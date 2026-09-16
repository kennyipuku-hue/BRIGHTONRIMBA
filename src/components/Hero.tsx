import { useState } from 'react';
import BookingModal from '@/components/BookingModal';
import { ArrowDown, Headphones } from 'lucide-react';
import { heroRoles } from '@/data/content';

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (

    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-charcoal-900"
    >
      {/* Background image */}
<div className="absolute inset-0">
  <img
    src="/background.png"
    alt="Brighton Rimba"
    className="h-full w-full object-cover"
  />
</div>
    

      {/* Content */}
      <div className="container-wide relative z-10 flex min-h-screen flex-col justify-center pt-24 pb-16">
        {/* Roles */}
        <div className="animate-fade-in mb-8" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {heroRoles.map((role, i) => (
              <span key={role}>
                {role}
                {i < heroRoles.length - 1 ? ' ' : ''}
              </span>
            ))}
          </p>
        </div>

        {/* Name */}
        <h1 className="font-serif font-light text-ivory-50 text-hero leading-[0.9] tracking-tight">
          <span
            className="block animate-fade-up"
            style={{ animationDelay: '0.5s', opacity: 0 }}
          >
            BRIGHTON
          </span>
          <span
            className="block animate-fade-up italic text-accent"
            style={{ animationDelay: '0.7s', opacity: 0 }}
          >
            RIMBA
          </span>
        </h1>

        {/* Divider */}
        <div
          className="animate-draw-line mt-8 h-px w-24 origin-left bg-accent/60"
          style={{ opacity: 0, animationDelay: '1s' }}
        />

        {/* Main statement */}
        <p
          className="animate-fade-up mt-8 max-w-2xl font-serif text-xl italic leading-relaxed text-ivory-200 md:text-2xl text-pretty"
          style={{ animationDelay: '1.1s', opacity: 0 }}
        >
          "No amount of humble beginnings can stop you from becoming all you
          were created to be."
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up mt-12 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: '1.3s', opacity: 0 }}
        >
          <a href="#story" className="btn-primary bg-ivory-100 text-charcoal-900 hover:bg-accent">
            My Story
          </a>
          <button
  type="button"
  onClick={() => setIsBookingOpen(true)}
  className="btn-light"
>
  Book Brighton
</button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.8s', opacity: 0 }}>
        <div className="flex flex-col items-center gap-2 text-ivory-300/50">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" strokeWidth={1.5} />
        </div>
      </div>

            {/* Side label */}
      <div className="absolute bottom-8 right-6 hidden lg:block">
        <a
          href="#masterclass"
          className="flex items-center gap-3 text-ivory-300/60 hover:text-accent transition-colors duration-500 group"
        >
          <Headphones className="h-5 w-5" strokeWidth={1.5} />
          <span className="text-[10px] uppercase tracking-[0.3em]">
            The Orphan's Masterclass
          </span>
        </a>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </section>
  );
}