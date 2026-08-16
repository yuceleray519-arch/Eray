import React, { useState } from 'react';
import { X, Calendar, Users, Bed, Phone, MessageCircle, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { BookingFormState } from '../types';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
}) => {
  const [formState, setFormState] = useState<BookingFormState>({
    roomId: initialRoomId || ROOMS[0].id,
    checkIn: '',
    checkOut: '',
    guests: 2,
    needExtraBed: false,
    name: '',
    phone: '',
    notes: '',
  });

  if (!isOpen) return null;

  const selectedRoom = ROOMS.find((r) => r.id === formState.roomId) || ROOMS[0];

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Merhaba Rozar Hotel,%0A%0ARezervasyon / Müsaitlik Talebi:%0A- Oda Türü: ${selectedRoom.name}%0A- Giriş Tarihi: ${formState.checkIn || 'Belirtilmedi'}%0A- Çıkış Tarihi: ${formState.checkOut || 'Belirtilmedi'}%0A- Kişi Sayısı: ${formState.guests} Kişi%0A- Ek Yatak Talebi: ${formState.needExtraBed ? 'Evet (1 Tek Kişilik Ek Yatak)' : 'Hayır'}%0A- Ad Soyad: ${formState.name || 'Belirtilmedi'}%0A- İletişim Tel: ${formState.phone || 'Belirtilmedi'}%0A- Notlar: ${formState.notes || 'Yok'}`;

    window.open(`https://wa.me/${HOTEL_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-stone-900 border border-stone-700 rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 relative text-stone-100 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 text-center">
          <span className="text-amber-400 text-xs font-semibold uppercase tracking-widest block mb-1">
            ROZAR HOTEL ATAŞEHİR
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Rezervasyon & Müsaitlik Formu
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm font-light mt-1">
            Talebinizi resepsiyonumuza doğrudan WhatsApp veya telefon ile iletebilirsiniz.
          </p>
        </div>

        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          {/* Room Selector */}
          <div>
            <label className="block text-xs font-medium text-stone-300 mb-1.5">
              Oda Türü
            </label>
            <select
              value={formState.roomId}
              onChange={(e) => setFormState({ ...formState, roomId: e.target.value })}
              className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
            >
              {ROOMS.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.name} ({room.bedConfig})
                </option>
              ))}
            </select>
          </div>

          {/* Selected Room Quick Specs */}
          <div className="p-3 bg-stone-950/80 rounded-xl border border-stone-800 text-xs space-y-1 text-amber-200">
            <div className="flex items-center gap-1.5 font-medium">
              <Bed className="w-3.5 h-3.5 text-amber-400" />
              <span>{selectedRoom.bedConfig}</span>
            </div>
            <div className="text-stone-300">
              {selectedRoom.extraBed}
            </div>
            <div className="text-stone-400">
              {selectedRoom.balconyInfo}
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                Giriş Tarihi
              </label>
              <input
                type="date"
                value={formState.checkIn}
                onChange={(e) => setFormState({ ...formState, checkIn: e.target.value })}
                className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                Çıkış Tarihi
              </label>
              <input
                type="date"
                value={formState.checkOut}
                onChange={(e) => setFormState({ ...formState, checkOut: e.target.value })}
                className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Guest count & Extra bed checkbox */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                Kişi Sayısı
              </label>
              <select
                value={formState.guests}
                onChange={(e) => setFormState({ ...formState, guests: Number(e.target.value) })}
                className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
              >
                <option value={1}>1 Yetişkin</option>
                <option value={2}>2 Yetişkin</option>
                <option value={3}>3 Yetişkin (Ek Yatak İle)</option>
              </select>
            </div>

            <div className="pt-4 sm:pt-6">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-stone-200">
                <input
                  type="checkbox"
                  checked={formState.needExtraBed}
                  onChange={(e) => setFormState({ ...formState, needExtraBed: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 bg-stone-800 border-stone-700"
                />
                <span>1 Tek Kişilik Ek Yatak İstiyorum</span>
              </label>
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                Adınız Soyadınız
              </label>
              <input
                type="text"
                placeholder="Örn: Ahmet Yılmaz"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-300 mb-1.5">
                Telefon Numaranız
              </label>
              <input
                type="tel"
                placeholder="05XX XXX XX XX"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                className="w-full bg-stone-800 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 space-y-2.5">
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/40 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp ile Talebi Gönder</span>
            </button>

            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold text-sm flex items-center justify-center gap-2 border border-stone-700 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Doğrudan Resepsiyonu Ara: {HOTEL_INFO.phone}</span>
            </a>

            <a
              href={`mailto:${HOTEL_INFO.email}`}
              className="w-full py-2.5 rounded-xl bg-stone-800/80 hover:bg-stone-700 text-stone-300 font-medium text-xs flex items-center justify-center gap-2 border border-stone-700/80 transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>E-Posta Gönder: {HOTEL_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 pt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Talebiniz hemen 7/24 resepsiyonumuza iletilir. Kesin fiyat bilgisi ve müsaitlik teyit edilir.</span>
          </div>
        </form>
      </div>
    </div>
  );
};
