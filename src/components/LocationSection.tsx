import React, { useState } from 'react';
import { MapPin, Phone, Copy, Check, Navigation, MessageCircle, Building2, ShieldCheck, Instagram, Mail } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOTEL_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nearbyPoints = [
    { name: 'İstanbul Finans Merkezi (İFM)', distance: '10-12 dk' },
    { name: 'Sabiha Gökçen Havalimanı (SAW)', distance: '20-25 dk' },
    { name: 'Metropol İstanbul AVM', distance: '8-10 dk' },
    { name: 'TEM / D-100 Otoyol Bağlantısı', distance: '3-5 dk' },
    { name: 'Ataşehir Ağız ve Diş Sağlığı M.', distance: '7 dk' },
    { name: 'Brandium AVM', distance: '6 dk' },
  ];

  return (
    <section id="konum" className="py-20 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            KONUM VE İLETİŞİM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            İstanbul / Ataşehir Ferhatpaşa
          </h2>
          <p className="text-stone-300 text-base font-light">
            Anadolu Yakası'nın merkezi iş ve finans aksı Ataşehir Ferhatpaşa'da kolay ulaşılabilir konum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Address & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-stone-800/90 border border-stone-700/80 shadow-xl space-y-6">
              {/* Full Address */}
              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-2">
                  AÇIK ADRESİMİZ
                </span>
                <div className="flex items-start gap-3 text-stone-200">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-white text-base">
                      {HOTEL_INFO.name}
                    </p>
                    <p className="text-sm font-light text-stone-300 leading-relaxed">
                      {HOTEL_INFO.fullAddress}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyAddress}
                  className="mt-3 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-stone-900 hover:bg-stone-950 text-xs text-amber-300 border border-stone-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Adres Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Adresi Kopyala</span>
                    </>
                  )}
                </button>
              </div>

              <div className="border-t border-stone-700/80 pt-4">
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-2">
                  TELEFON VE SOSYAL MEDYA
                </span>
                <div className="space-y-3">
                  <a
                    href={`tel:${HOTEL_INFO.phoneRaw}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-stone-900 hover:bg-stone-950 border border-stone-700/80 transition-all text-white font-semibold text-base"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-stone-400 font-normal">Resepsiyon Telefonu</div>
                      <div>{HOTEL_INFO.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${HOTEL_INFO.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-stone-900 hover:bg-stone-950 border border-stone-700/80 transition-all text-stone-200 font-semibold text-base"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-stone-400 font-normal">E-Posta Adresimiz</div>
                      <div>{HOTEL_INFO.email}</div>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/30 border border-emerald-500/30 transition-all text-emerald-300 font-semibold text-base"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-emerald-200/70 font-normal">WhatsApp İletişim Hattı</div>
                      <div>{HOTEL_INFO.whatsappDisplay}</div>
                    </div>
                  </a>

                  <a
                    href={HOTEL_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-pink-950/40 hover:bg-pink-900/30 border border-pink-500/30 transition-all text-pink-300 font-semibold text-base"
                  >
                    <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] text-pink-200/70 font-normal">Instagram Sayfamız</div>
                      <div>{HOTEL_INFO.instagramHandle}</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Nearby locations */}
              <div className="border-t border-stone-700/80 pt-4">
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-amber-400" />
                  ÖNEMLİ NOKTALARA ULAŞIM
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {nearbyPoints.map((item, idx) => (
                    <div key={idx} className="p-2 rounded bg-stone-900/70 border border-stone-800">
                      <div className="text-stone-300 font-medium truncate">{item.name}</div>
                      <div className="text-amber-400 text-[11px] font-semibold">{item.distance}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="lg:col-span-7 h-full min-h-[420px] rounded-2xl overflow-hidden border border-stone-700 shadow-2xl relative bg-stone-950">
            <iframe
              title="Rozar Hotel Konum Haritası"
              src={HOTEL_INFO.mapEmbedUrl}
              className="w-full h-full min-h-[450px] border-0 filter grayscale-[0.3] contrast-[1.1]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute top-4 left-4 bg-stone-900/95 backdrop-blur-md px-4 py-2 rounded-xl border border-amber-500/30 text-xs text-amber-200 font-semibold shadow-lg">
              📍 Rozar Hotel - Ferhatpaşa, Ataşehir/İstanbul
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
