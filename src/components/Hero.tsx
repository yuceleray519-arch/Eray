import React, { useState } from 'react';
import { Star, MapPin, Phone, Calendar, Users, ChevronRight, Bed, ShieldCheck, Sparkles } from 'lucide-react';
import { HOTEL_INFO, ROOMS } from '../data/hotelData';

interface HeroProps {
  onOpenBooking: (roomId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0].id);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center pt-28 pb-16 bg-stone-950 overflow-hidden">
      {/* Background Image Overlay with Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80"
          alt="Rozar Hotel Ataşehir"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.4] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-900/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-stone-950/40 to-stone-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto">
          {/* Star Category & Location Tag */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 backdrop-blur-md mb-6">
            <div className="flex text-amber-400">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-amber-200 text-xs sm:text-sm font-semibold tracking-wide">
              3 YILDIZLI ŞEHİR OTELİ
            </span>
            <span className="text-stone-500">•</span>
            <span className="text-stone-300 text-xs sm:text-sm font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Ferhatpaşa, Ataşehir / İstanbul
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Ataşehir'de Huzurlu ve <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              Konforlu Konaklama
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-stone-300 leading-relaxed mb-8 max-w-2xl mx-auto font-light">
            İstanbul Ataşehir Ferhatpaşa bölgesinde yer alan <strong className="text-white font-medium">3 yıldızlı Rozar Hotel</strong>;
            Standart, Deluxe ve Suit odaları, Spa olanağı ve merkezi konumuyla konaklamalarınız için ideal bir seçenektir.
          </p>

          {/* Key Feature Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 text-left max-w-2xl mx-auto">
            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-stone-900/80 border border-stone-800/80 text-stone-200 text-xs sm:text-sm backdrop-blur-sm">
              <Bed className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Her Odada 2 Kişilik Yatak (+Ek Yatak)</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-stone-900/80 border border-stone-800/80 text-stone-200 text-xs sm:text-sm backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Bünyesinde Spa Hizmeti</span>
            </div>
            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-stone-900/80 border border-stone-800/80 text-stone-200 text-xs sm:text-sm backdrop-blur-sm col-span-2 sm:col-span-1">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>7/24 Danışma & Otopark</span>
            </div>
          </div>
        </div>

        {/* Quick Booking & Availability Card */}
        <div className="max-w-4xl mx-auto bg-stone-900/90 backdrop-blur-xl p-5 sm:p-6 rounded-2xl border border-stone-700/80 shadow-2xl shadow-black/80">
          <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-3 flex items-center justify-between">
            <span>Hızlı Rezervasyon & Bilgi Talebi</span>
            <span className="text-stone-400 lowercase font-normal">Tel: {HOTEL_INFO.phone}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Room Selection */}
            <div>
              <label className="block text-xs text-stone-300 font-medium mb-1">Oda Türü Seçin</label>
              <select
                value={selectedRoom}
                onChange={(e) => setSelectedRoom(e.target.value)}
                className="w-full bg-stone-800 border border-stone-700 rounded-lg px-3 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
              >
                {ROOMS.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Guest Count */}
            <div>
              <label className="block text-xs text-stone-300 font-medium mb-1">Kişi Sayısı</label>
              <div className="flex items-center bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-stone-100">
                <Users className="w-4 h-4 text-amber-400 mr-2 shrink-0" />
                <span className="text-sm">1 - 3 Kişilik Konaklama</span>
              </div>
            </div>

            {/* Phone Contact Quick Link */}
            <div>
              <label className="block text-xs text-stone-300 font-medium mb-1">Telefon Doğrudan Hat</label>
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-stone-800 border border-stone-700 hover:border-amber-500/50 rounded-lg px-3 py-2 text-amber-300 text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>0216 504 00 00</span>
              </a>
            </div>

            {/* Action CTA */}
            <div>
              <label className="block text-xs text-transparent mb-1">İşlem</label>
              <button
                onClick={() => onOpenBooking(selectedRoom)}
                className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg px-4 py-2.5 font-semibold text-sm transition-all shadow-lg shadow-amber-900/40 hover:scale-[1.01]"
              >
                <span>Müsaitlik Sor</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between text-xs text-stone-400 gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Resepsiyonumuz 7/24 aktiftir. Bilgi için hemen arayabilirsiniz.</span>
            </div>
            <div className="text-amber-300 font-medium">
              Açık Adres: Ferhatpaşa Yolu Sk. No:93 Ataşehir/İstanbul
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
