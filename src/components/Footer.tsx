import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { navLinks, socialLinks } from '@/data/content';

const footerLinks = [
  ...navLinks,
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="relative bg-charcoal-950 text-ivory-200">
      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] lg:gap-16">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl font-medium text-ivory-50">
              <span className="block leading-none">BRIGHTON</span>
              <span className="block text-xs font-sans font-light uppercase tracking-[0.4em] leading-none mt-1 text-accent">
                RIMBA
              </span>
            </div>
            <p className="mt-6 font-serif text-sm italic leading-relaxed text-charcoal-300">
              Chemical Engineer.
              <br />
              Pastor.
              <br />
              Speaker.
              <br />
              Mentor.
            </p>
            <p className="mt-6 max-w-xs text-xs leading-relaxed text-charcoal-400">
              "No amount of humble beginnings can stop you from becoming all you
              were created to be."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Navigate
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-charcoal-300 transition-colors duration-300 hover:text-ivory-100 link-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Connect
            </p>
            <ul className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="group flex items-center gap-3 text-sm text-charcoal-300 transition-colors duration-300 hover:text-ivory-100"
                    >
                      <Icon
                        className="h-4 w-4 transition-colors duration-300 group-hover:text-accent"
                        strokeWidth={1.5}
                      />
                      {social.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Newsletter
            </p>
            <p className="mb-5 text-sm leading-relaxed text-charcoal-400">
              Stories, lessons and encouragement for people ready to rise.
            </p>
            {submitted ? (
              <div className="flex items-center gap-3 border border-accent/30 bg-accent/10 px-5 py-4">
                <Check className="h-5 w-5 text-accent" strokeWidth={2} />
                <span className="text-sm text-ivory-200">You're in. Welcome.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex items-stretch border border-charcoal-700"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-transparent px-4 py-3 text-sm text-ivory-100 placeholder-charcoal-500 outline-none focus:bg-charcoal-900"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-charcoal-800 px-5 transition-colors duration-300 hover:bg-accent hover:text-charcoal-900"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-800">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="text-xs text-charcoal-500">
            © {new Date().getFullYear()} Brighton Rimba. All rights reserved.
          </p>
          <p className="text-xs text-charcoal-500">
            From humble beginnings to purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
