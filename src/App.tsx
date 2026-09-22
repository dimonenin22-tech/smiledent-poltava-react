import { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { BentoAdvantages } from './components/BentoAdvantages.tsx';
import { TeamSection } from './components/TeamSection.tsx';
import { BeforeAfterSlider } from './components/BeforeAfterSlider.tsx';
import { ServicesPricing } from './components/ServicesPricing.tsx';
import { ReviewsMarquee } from './components/ReviewsMarquee.tsx';
import { ContactsSection } from './components/ContactsSection.tsx';
import { Footer } from './components/Footer.tsx';
import { StickyContactBar } from './components/StickyContactBar.tsx';
import { BookingModal } from './components/BookingModal.tsx';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedEntity, setSelectedEntity] = useState<string>('');

  const handleOpenBooking = (entity?: string) => {
    if (entity) {
      setSelectedEntity(entity);
    } else {
      setSelectedEntity('');
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedEntity('');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500 selection:text-black flex flex-col font-sans">
      {/* Top Header & Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        {/* 1. Hero Section with Trust Metrics & ShimmerButton */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Bento Advantages Grid with SpotlightCard Cursor Track */}
        <BentoAdvantages />

        {/* 3. Team Section (E-E-A-T Verified Specialists) */}
        <TeamSection onSelectDoctor={(name) => handleOpenBooking(`Лікар: ${name}`)} />

        {/* 4. Before / After Clinical Cases (Anti-Stretch CSS clip-path) */}
        <BeforeAfterSlider />

        {/* 5. Services & Pricing with Live Filter & Instant Booking */}
        <ServicesPricing onSelectService={(service) => handleOpenBooking(`Послуга: ${service}`)} />

        {/* 6. Magic UI Infinite Reviews Marquee */}
        <ReviewsMarquee />

        {/* 7. Contacts & Interactive Google Maps */}
        <ContactsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Bar (Call, Telegram, Booking) */}
      <StickyContactBar onOpenBooking={() => handleOpenBooking()} />

      {/* Full-featured Booking Modal with +380 Ukrainian Phone Mask */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialEntity={selectedEntity}
      />
    </div>
  );
}
