import { useState } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => {
    return localStorage.getItem('brighton-cookie-consent') === null;
  });

  const acceptCookies = () => {
    localStorage.setItem('brighton-cookie-consent', 'accepted');
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('brighton-cookie-consent', 'necessary');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] p-4 md:p-6">
      <div className="mx-auto max-w-6xl border border-charcoal-700 bg-charcoal-900/95 p-5 shadow-2xl backdrop-blur-md md:p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          
          {/* Message */}
          <div className="flex gap-4">
            <div className="hidden h-10 w-10 shrink-0 items-center justify-center border border-accent/30 text-accent sm:flex">
              <Cookie className="h-5 w-5" />
            </div>

            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Your Privacy
              </p>

              <p className="max-w-2xl text-sm leading-relaxed text-ivory-200">
                We use cookies to improve your experience, understand how
                visitors use our website, and provide relevant content.
                You can choose which cookies you allow.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={rejectCookies}
              className="border border-ivory-200/30 px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] text-ivory-200 transition-colors hover:border-ivory-100 hover:text-ivory-100"
            >
              Necessary Only
            </button>

            <button
              type="button"
              onClick={acceptCookies}
              className="bg-ivory-100 px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] text-charcoal-900 transition-colors hover:bg-accent"
            >
              Accept All
            </button>
          </div>
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={rejectCookies}
          className="absolute right-3 top-3 text-charcoal-400 transition-colors hover:text-ivory-100"
          aria-label="Close cookie notice"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}