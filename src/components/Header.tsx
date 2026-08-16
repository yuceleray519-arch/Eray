import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Star, MessageCircle, Menu, X, Instagram, Mail } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface HeaderProps {
  onOpenBooking: (roomId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Odalarımız', href: '#odalar' },
    { name: 'Spa & Wellness', href: '#spa' },
    { name: 'Otel Olanakları', href: '#olanaklar' },
    { name: 'Foto Galerisi', href: '#galeri' },
    { name: 'Konum & İletişim', href: '#konum' },
    { name: 'SSS', href: '#sss' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top bar info */}
      <div className="bg-stone-900 text-amber-100/90 text-xs py-2 px-4 border-b border-amber-500/20 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <span className="flex text-amber-400 gap-0.5">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span>{HOTEL_INFO.stars} Yıldızlı Şehir Oteli</span>
            </span>
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Ferhatpaşa, Ataşehir / İstanbul</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold">{HOTEL_INFO.phone}</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href={`mailto:${HOTEL_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              title="E-posta gönderin"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{HOTEL_INFO.email}</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
              <span>WhatsApp: {HOTEL_INFO.whatsappDisplay}</span>
            </a>
            <span className="text-stone-600">|</span>
            <a
              href={HOTEL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-pink-400 hover:text-pink-300 transition-colors font-medium"
              title="Instagram sayfamız"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-900/95 backdrop-blur-md shadow-lg border-b border-stone-800 py-3'
            : 'bg-stone-900/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-serif font-bold text-xl shadow-inner border border-amber-400/30">
              R
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  ROZAR HOTEL
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="flex text-amber-400">
                  {[...Array(3)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] text-amber-200/70 tracking-widest uppercase">Ataşehir</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-200 hover:text-amber-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-100 text-sm font-medium border border-stone-700 transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{HOTEL_INFO.phone}</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-sm font-semibold shadow-md shadow-amber-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Rezerve Et</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="p-2 rounded-lg bg-amber-600/20 text-amber-400 border border-amber-500/30"
              aria-label="Telefon et"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 border border-stone-700"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-900/98 border-b border-stone-800 px-4 pt-3 pb-6 mt-2 space-y-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-amber-500/10 rounded-lg text-amber-300 text-xs font-medium border border-amber-500/20">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>3 Yıldızlı Otel - Ferhatpaşa, Ataşehir/İstanbul</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-stone-200 hover:bg-stone-800 hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-800 space-y-2.5">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-stone-800 text-stone-100 font-medium text-sm border border-stone-700"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Hemen Ara: {HOTEL_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${HOTEL_INFO.email}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-stone-800 text-stone-200 font-medium text-sm border border-stone-700"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>E-Posta: {HOTEL_INFO.email}</span>
              </a>
              <a
                href={HOTEL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-pink-950/60 text-pink-300 border border-pink-500/30 font-medium text-sm"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram: {HOTEL_INFO.instagramHandle}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm shadow-md"
              >
                <span>WhatsApp Rezervasyon Talebi</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
