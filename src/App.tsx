import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RoomsSection } from './components/RoomsSection';
import { SpaSection } from './components/SpaSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { Phone, MessageCircle, Instagram } from 'lucide-react';
import { HOTEL_INFO } from './data/hotelData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 font-sans selection:bg-[#2D3E35] selection:text-white">
      {/* Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <RoomsSection onOpenBooking={handleOpenBooking} />
        <SpaSection onOpenBooking={handleOpenBooking} />
        <FacilitiesSection />
        <GallerySection />
        <LocationSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Reservation & Inquiry Modal */}
      <ReservationModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialRoomId={selectedRoomId}
      />

      {/* Floating Quick Action Widget (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all border-2 border-white/20"
          title={`WhatsApp İletişim: ${HOTEL_INFO.whatsappDisplay}`}
          aria-label="WhatsApp İletişim"
        >
          <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        </a>

        <a
          href={HOTEL_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all border-2 border-white/20"
          title={`Instagram: ${HOTEL_INFO.instagramHandle}`}
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 text-white" />
        </a>

        <a
          href={`tel:${HOTEL_INFO.phoneRaw}`}
          className="w-12 h-12 rounded-full bg-[#2D3E35] hover:bg-[#23322B] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all border-2 border-white/40"
          title={`${HOTEL_INFO.phone} Telefon Et`}
          aria-label="Telefon Et"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
