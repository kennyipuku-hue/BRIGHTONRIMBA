import { useState } from 'react';
import Reveal from '@/components/Reveal';
import BookingModal from '@/components/BookingModal';
import { ArrowRight, Headphones } from 'lucide-react';

export default function FinalCTA() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-charcoal-950 bg-grain py-24 md:py-32 lg:py-40"
    >
      {/* Cinematic backdrop */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.webp"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-900/80 to-charcoal-950" />
      </div>

      {/* Radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(201, 173, 130, 0.08) 0%, transparent 60%)',
        }}
      />

      <div className="container-wide relative z-10 text-center">
        <Reveal>
          <p className="eyebrow mb-8 text-accent/80">The Question</p>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="mx-auto max-w-4xl font-serif text-mega font-light leading-[0.9] text-ivory-50 text-balance">
            What are you
            <br />
            going to do
            <br />
            <span className="italic text-accent">with what you've been through?</span>
          </h2>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
  type="button"
  onClick={() => setIsBookingOpen(true)}
  className="btn-primary bg-ivory-100 text-charcoal-900 hover:bg-accent"
>
              Book Brighton
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#masterclass" className="btn-light">
              Listen to the Masterclass
              <Headphones className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
          </div>

      <BookingModal
  isOpen={isBookingOpen}
  onClose={() => setIsBookingOpen(false)}
/>
    </section>
  );
}
