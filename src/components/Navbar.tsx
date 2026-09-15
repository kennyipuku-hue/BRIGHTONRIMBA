import { useEffect, useState } from 'react';
import { Menu, X, Headphones } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-ivory-50/95 backdrop-blur-md py-3 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-wide flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className={`font-serif text-lg font-medium tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-charcoal-900' : 'text-ivory-100'
            }`}
          >
            <span className="block leading-none">BRIGHTON</span>
            <span className="block text-xs font-sans font-light uppercase tracking-[0.4em] leading-none mt-0.5">
              RIMBA
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`link-underline text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
                  scrolled ? 'text-charcoal-600 hover:text-charcoal-900' : 'text-ivory-200 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#masterclass"
              className={`link-underline text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-500 ${
                scrolled ? 'text-charcoal-600 hover:text-charcoal-900' : 'text-ivory-200 hover:text-white'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <Headphones className="h-4 w-4" />
                Listen
              </span>
            </a>
            <a
              href="#contact"
              className={`border px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-500 ${
                scrolled
                  ? 'border-charcoal-900 text-charcoal-900 hover:bg-charcoal-900 hover:text-ivory-100'
                  : 'border-ivory-200/40 text-ivory-100 hover:bg-ivory-100 hover:text-charcoal-900'
              }`}
            >
              Book Brighton
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden transition-colors duration-500 ${
              scrolled ? 'text-charcoal-900' : 'text-ivory-100'
            }`}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[60] bg-charcoal-900 transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-serif text-lg text-ivory-100">
              <span className="block leading-none">BRIGHTON</span>
              <span className="block text-xs font-sans font-light uppercase tracking-[0.4em] leading-none mt-0.5">
                RIMBA
              </span>
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-ivory-100"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center px-6">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group border-b border-charcoal-700 py-4 font-serif text-3xl text-ivory-100 transition-all duration-500 hover:pl-4 hover:text-accent"
                  style={{
                    transitionDelay: menuOpen ? `${i * 80}ms` : '0ms',
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary bg-ivory-100 text-charcoal-900 hover:bg-accent"
              >
                Book Brighton
              </a>
              <a
                href="#masterclass"
                onClick={() => setMenuOpen(false)}
                className="btn-light"
              >
                Listen to the Masterclass
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
