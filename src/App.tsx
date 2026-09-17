import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import NumberStory from '@/components/NumberStory';
import StoryTimeline from '@/components/StoryTimeline';
import AboutSection from '@/components/AboutSection';
import PodcastSection from '@/components/PodcastSection';
import ServicesSection from '@/components/ServicesSection';
import SpeakingSection from '@/components/SpeakingSection';
import IdentitySection from '@/components/IdentitySection';
import RiseSection from '@/components/RiseSection';
import NewsletterSection from '@/components/NewsletterSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

const MAINTENANCE_MODE = true;

function MaintenancePage() {
  return (
    <div className="min-h-screen bg-ivory-50 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">

        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-charcoal-500">
          Website Maintenance
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-charcoal-900 sm:text-6xl">
          We’re making a few improvements.
        </h1>

        <p className="mx-auto mb-8 max-w-xl text-lg leading-8 text-charcoal-600">
          We’re currently working behind the scenes to make your experience
          even better. The website will be back shortly.
        </p>

        <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-charcoal-200 bg-white px-6 py-3 text-sm text-charcoal-700 shadow-sm">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-charcoal-900" />
          We’re working on it
        </div>

        <p className="mt-10 text-sm text-charcoal-500">
          Thank you for your patience.
        </p>

        <p className="mt-2 text-sm text-charcoal-500">
          For assistance, please contact the administrator.
        </p>

      </div>
    </div>
  );
}

export default function App() {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <div className="min-h-screen bg-ivory-50 font-sans text-charcoal-900">
      <Navbar />

      <main>
        <Hero />
        <NumberStory />
        <StoryTimeline />
        <AboutSection />
        <PodcastSection />
        <ServicesSection />
        <SpeakingSection />
        <IdentitySection />
        <RiseSection />
        <NewsletterSection />
        <FinalCTA />
      </main>

      <Footer />

      <CookieBanner />
    </div>
  );
}