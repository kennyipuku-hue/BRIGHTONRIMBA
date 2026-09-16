import { useState } from 'react';
import { X, ArrowRight, Check } from 'lucide-react';

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BookingModal({
  isOpen,
  onClose,
}: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/85 p-4 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden bg-charcoal-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center border border-ivory-200/20 text-ivory-100 transition-all duration-300 hover:border-accent hover:bg-accent hover:text-charcoal-900"
          aria-label="Close booking form"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[0.85fr_1.15fr]">
          
          {/* Left visual panel */}
          <div className="relative hidden min-h-[650px] overflow-hidden lg:block">
            <img
              src="/brighton-portrait.png"
              alt="Brighton Rimba"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

            <div className="absolute bottom-10 left-10 right-10">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                Speaking • Storytelling • Impact
              </p>

              <h3 className="font-serif text-4xl font-light leading-tight text-ivory-50">
                Give your audience
                <br />
                <span className="italic text-accent">
                  something to remember.
                </span>
              </h3>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-ivory-50 p-6 md:p-10 lg:p-12">
            {!submitted ? (
              <>
                <div className="mb-8 max-w-xl pr-8">
                  <p className="eyebrow mb-4 text-earth-ochre">
                    Book Brighton
                  </p>

                  <h2 className="font-serif text-4xl font-light leading-tight text-charcoal-900 md:text-5xl">
                    Let's create something meaningful.
                  </h2>

                  <p className="mt-4 font-serif text-lg leading-relaxed text-charcoal-500">
                    Tell us about your event and how Brighton can
                    contribute to the experience.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-500"
                      >
                        Full Name *
                      </label>

                      <input
                        id="booking-name"
                        name="name"
                        type="text"
                        required
                        className="w-full border-b border-charcoal-300 bg-transparent py-3 text-charcoal-900 outline-none transition-colors focus:border-earth-terracotta"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-email"
                        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-500"
                      >
                        Email *
                      </label>

                      <input
                        id="booking-email"
                        name="email"
                        type="email"
                        required
                        className="w-full border-b border-charcoal-300 bg-transparent py-3 text-charcoal-900 outline-none transition-colors focus:border-earth-terracotta"
                      />
                    </div>
                  </div>

                  {/* Organisation + Phone */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="booking-organisation"
                        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-500"
                      >
                        Organisation
                      </label>

                      <input
                        id="booking-organisation"
                        name="organisation"
                        type="text"
                        className="w-full border-b border-charcoal-300 bg-transparent py-3 text-charcoal-900 outline-none transition-colors focus:border-earth-terracotta"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-500"
                      >
                        Phone / WhatsApp
                      </label>

                      <input
                        id="booking-phone"
                        name="phone"
                        type="tel"
                        className="w-full border-b border-charcoal-300 bg-transparent py-3 text-charcoal-900 outline-none transition-colors focus:border-earth-terracotta"
                      />
                    </div>
                  </div>

                  {/* Event type + Date */}
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="booking-event-type"
                        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-500"
                      >
                        Event Type
                      </label>

                      <select
                        id="booking-event-type"
                        name="event_type"
                        defaultValue=""
                        className="w-full border-b border-charcoal-300 bg-transparent py-3 text-charcoal-900 outline-none transition-colors focus:border-earth-terracotta"
                      >
                        <option value="" disabled>
                          Select event type
                        </option>
                        <option value="conference">Conference</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="keynote">Keynote</option>
                        <option value="workshop">Workshop</option>
                        <option value="university">University / School</option>
                        <option value="church">Church / Faith Event</option>
                        <option value="podcast">Podcast / Media</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="booking-date"
                        className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-500"
                      >
                        Event Date
                      </label>

                      <input
                        id="booking-date"
                        name="event_date"
                        type="date"
                        className="w-full border-b border-charcoal-300 bg-transparent py-3 text-charcoal-900 outline-none transition-colors focus:border-earth-terracotta"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label
                      htmlFor="booking-location"
                      className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-500"
                    >
                      Event Location
                    </label>

                    <input
                      id="booking-location"
                      name="location"
                      type="text"
                      placeholder="City / Country"
                      className="w-full border-b border-charcoal-300 bg-transparent py-3 text-charcoal-900 outline-none transition-colors focus:border-earth-terracotta"
                    />
                  </div>

                  {/* Audience */}
                  <div>
                    <label
                      htmlFor="booking-audience"
                      className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-500"
                    >
                      Expected Audience
                    </label>

                    <input
                      id="booking-audience"
                      name="audience"
                      type="text"
                      placeholder="e.g. 500 attendees"
                      className="w-full border-b border-charcoal-300 bg-transparent py-3 text-charcoal-900 outline-none transition-colors focus:border-earth-terracotta"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="booking-message"
                      className="mb-2 block text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal-500"
                    >
                      Tell Us About Your Event
                    </label>

                    <textarea
                      id="booking-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your event, audience, goals and anything else we should know..."
                      className="w-full resize-none border border-charcoal-300 bg-transparent p-4 text-charcoal-900 outline-none transition-colors focus:border-earth-terracotta"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 bg-charcoal-900 px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-ivory-100 transition-all duration-300 hover:bg-earth-terracotta"
                  >
                    Submit Booking Request
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              </>
            ) : (
              /* Success */
              <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-earth-ochre/40">
                  <Check className="h-7 w-7 text-earth-terracotta" />
                </div>

                <p className="eyebrow mb-5 text-earth-ochre">
                  Request Received
                </p>

                <h2 className="max-w-lg font-serif text-4xl font-light text-charcoal-900 md:text-5xl">
                  Thank you.
                  <br />
                  <span className="italic text-earth-terracotta">
                    We'll be in touch.
                  </span>
                </h2>

                <p className="mt-6 max-w-md font-serif text-lg leading-relaxed text-charcoal-500">
                  Your booking request has been received. Our team
                  will review the details and get back to you shortly.
                </p>

                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-10 border-b border-earth-ochre/60 pb-2 text-xs font-medium uppercase tracking-[0.2em] text-charcoal-900 transition-colors hover:border-earth-terracotta hover:text-earth-terracotta"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}