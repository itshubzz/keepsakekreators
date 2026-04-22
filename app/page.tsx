import Hero from '@/components/sections/Hero';
import Marquee from '@/components/ui/Marquee';
import Experiences from '@/components/sections/Experiences';
import Spotlight from '@/components/sections/Spotlight';
import EventTypes from '@/components/sections/EventTypes';
import GalleryPreview from '@/components/sections/GalleryPreview';
import HowItWorks from '@/components/sections/HowItWorks';
import PackagesPreview from '@/components/sections/PackagesPreview';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';
import SocialSection from '@/components/sections/SocialSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          '360° VIDEO BOOTH',
          'PHOTO BOOTH',
          'INSTANT SHARING',
          'CUSTOM BRANDING',
          'UNFORGETTABLE NIGHTS',
          'BOOK THE VIBE',
        ]}
      />
      <Experiences />
      <Spotlight />
      <EventTypes />
      <GalleryPreview />
      <HowItWorks />
      <PackagesPreview />
      <Testimonials />
      <SocialSection />
      <CTASection />
    </>
  );
}
