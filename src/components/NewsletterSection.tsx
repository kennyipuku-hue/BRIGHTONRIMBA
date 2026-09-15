import { useState } from 'react';
import Reveal from '@/components/Reveal';
import { ArrowRight, Check } from 'lucide-react';

export default function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="resources"
      className="relative bg-ivory-100 py-24 md:py-32 lg:py-40"
    >
      <div className="container-narrow text-center">
        <Reveal>
          <p className="eyebrow mb-6">The Community</p>
        </Reveal>

        <Reveal delay={1}>
          <h2 className="mb-6 font-serif text-display font-light text-charcoal-900 text-balance">
            Your next chapter
            <br />
            <span className="italic text-earth-terracotta">starts here.</span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="mx-auto mb-12 max-w-lg font-serif text-lg italic leading-relaxed text-charcoal-500 text-pretty">
            Stories, lessons and practical encouragement for people who are
            ready to rise.
          </p>
        </Reveal>

        {/* Form */}
        <Reveal delay={3}>
          {submitted ? (
            <div className="mx-auto flex max-w-md flex-col items-center gap-4 border border-accent/30 bg-accent/10 px-8 py-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20">
                <Check className="h-6 w-6 text-earth-ochre" strokeWidth={2} />
              </div>
              <p className="font-serif text-xl text-charcoal-900">
                Welcome to the community.
              </p>
              <p className="text-sm text-charcoal-500">
                We'll be in touch soon. Your next chapter starts now.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
            >
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                className="w-full border border-charcoal-200 bg-ivory-50 px-5 py-4 text-sm text-charcoal-900 placeholder-charcoal-300 outline-none transition-colors focus:border-charcoal-900 sm:flex-1"
              />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full border border-charcoal-200 bg-ivory-50 px-5 py-4 text-sm text-charcoal-900 placeholder-charcoal-300 outline-none transition-colors focus:border-charcoal-900 sm:flex-1"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Join
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </Reveal>

        {/* Trust line */}
        {!submitted && (
          <Reveal delay={4}>
            <p className="mt-6 text-xs text-charcoal-400">
              No spam. Just stories worth your time. Unsubscribe anytime.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
