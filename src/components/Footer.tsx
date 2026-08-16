import React from 'react';
import { Star, MapPin, Phone, MessageCircle, ShieldCheck, Instagram, Mail } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-serif font-bold text-xl shadow-inner border border-amber-400/30">
                R
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  ROZAR HOTEL
                </span>
                <div className="flex items-center gap-1">
                  <div className="flex text-amber-400">
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-amber-300 tracking-widest uppercase">3 Yıldızlı Otel</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed font-light">
              İstanbul Ataşehir Ferhatpaşa bölgesinde yer alan resmi 3 yıldızlı şehir oteli. Standart, Deluxe ve Suit oda seçenekleri ve Spa olanağı ile hizmetinizdedir.
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Resmi 3 Yıldızlı Şehir Oteli</span>
              </div>
              <a
                href={HOTEL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-pink-400 hover:text-pink-300 font-medium transition-colors pt-1"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram: {HOTEL_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-amber-400">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#odalar" className="hover:text-amber-400 transition-colors">Odalarımız (Standart, Deluxe, Suit)</a>
              </li>
              <li>
                <a href="#spa" className="hover:text-amber-400 transition-colors">Rozar Spa & Wellness</a>
              </li>
              <li>
                <a href="#olanaklar" className="hover:text-amber-400 transition-colors">Otel Olanakları & Hizmetler</a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-amber-400 transition-colors">Fotoğraf Galerisi</a>
              </li>
              <li>
                <a href="#konum" className="hover:text-amber-400 transition-colors">Ataşehir Konum & Harita</a>
              </li>
              <li>
                <a href="#sss" className="hover:text-amber-400 transition-colors">Sıkça Sorulan Sorular</a>
              </li>
            </ul>
          </div>

          {/* Room Types Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-amber-400">
              Oda Türleri
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Standart Oda (1 Çift Kişilik Yatak)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Deluxe Oda (1 Çift Kişilik Yatak)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Suit Oda 2+1 (1 Çift Kişilik Yatak)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Suit Oda 1+1 (1 Çift Kişilik Yatak)</span>
              </li>
              <li className="pt-1 text-[11px] text-amber-300/80">
                * Tüm odalarda isteğe bağlı 1 tek kişilik ek yatak olanağı. Odalarımız balkonsuzdur.
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider text-amber-400">
              İletişim & Konum
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-stone-300">{HOTEL_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="text-white font-semibold hover:text-amber-400">
                  {HOTEL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="text-stone-300 hover:text-amber-300 hover:underline">
                  {HOTEL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-medium hover:underline"
                >
                  WhatsApp: {HOTEL_INFO.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href={HOTEL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-300 hover:text-pink-200 hover:underline"
                >
                  Instagram: {HOTEL_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Rozar Hotel - Tüm Hakları Saklıdır.</p>
          <p className="text-stone-400">
            Ferhatpaşa, Ataşehir / İstanbul
          </p>
        </div>
      </div>
    </footer>
  );
};
