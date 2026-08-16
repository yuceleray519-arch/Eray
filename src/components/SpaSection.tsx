import React from 'react';
import { Sparkles, HeartHandshake, ShieldCheck, Phone, Clock } from 'lucide-react';
import { SPA_DETAILS, HOTEL_INFO } from '../data/hotelData';

interface SpaSectionProps {
  onOpenBooking: () => void;
}

export const SpaSection: React.FC<SpaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="spa" className="py-20 bg-stone-950 text-stone-100 relative overflow-hidden border-t border-b border-stone-800">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative group rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl shadow-black/80">
            <img
              src={SPA_DETAILS.image}
              alt={SPA_DETAILS.title}
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-stone-900/90 backdrop-blur-md border border-stone-800 text-xs text-stone-200">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-1">
                <Sparkles className="w-4 h-4" />
                <span>ROZAR HOTEL SPA ALANI</span>
              </div>
              <p className="text-stone-300 font-light">
                Otel konuklarımıza özel rahatlama ve yenilenme alanı.
              </p>
            </div>
          </div>

          {/* Text Content side */}
          <div className="space-y-6">
            <div>
              <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
                YENİLENME & DİNLENME
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
                {SPA_DETAILS.title}
              </h2>
              <p className="text-amber-200/90 text-lg font-medium">
                {SPA_DETAILS.subtitle}
              </p>
            </div>

            <p className="text-stone-300 text-base font-light leading-relaxed">
              {SPA_DETAILS.description}
            </p>

            {/* Verified Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {SPA_DETAILS.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-stone-900 border border-stone-800 text-sm text-stone-200">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-stone-400">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Spa kullanımı hakkında detaylı bilgi almak için resepsiyonumuzu arayabilirsiniz.</span>
              </div>

              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-all shadow-md shadow-amber-900/30"
              >
                <Phone className="w-4 h-4" />
                <span>Spa Bilgisi Al: {HOTEL_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
