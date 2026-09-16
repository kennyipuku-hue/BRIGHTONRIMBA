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

export default function App() {
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