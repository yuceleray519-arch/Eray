import React, { useState } from 'react';
import { Bed, PlusCircle, CheckCircle2, Info, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { ROOMS, HOTEL_INFO } from '../data/hotelData';
import { Room } from '../types';

interface RoomsSectionProps {
  onOpenBooking: (roomId?: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ onOpenBooking }) => {
  const [selectedRoomModal, setSelectedRoomModal] = useState<Room | null>(null);

  return (
    <section id="odalar" className="py-20 bg-stone-900 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            3 YILDIZLI KONFOR & MİMARİ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Oda Seçeneklerimiz
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            Rozar Hotel'de tüm oda türlerimiz misafirlerimizin rahatlığı ve dinlenmesi hedeflenerek tasarlanmıştır.
          </p>

          {/* Key Room Rules Highlights */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 p-3 rounded-xl bg-stone-800/80 border border-stone-700 text-xs text-amber-200">
            <span className="flex items-center gap-1.5 font-medium">
              <Bed className="w-4 h-4 text-amber-400" />
              Tüm Odalarda 1 Adet Çift Kişilik Yatak
            </span>
            <span className="text-stone-600">•</span>
            <span className="flex items-center gap-1.5 font-medium">
              <PlusCircle className="w-4 h-4 text-amber-400" />
              İsteğe Bağlı 1 Tek Kişilik Ek Yatak
            </span>
            <span className="text-stone-600">•</span>
            <span className="text-stone-400 font-medium">
              Sessiz ve İzolasyonlu Camlar (Balkonsuz)
            </span>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="group bg-stone-800/90 rounded-2xl overflow-hidden border border-stone-700/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col shadow-xl shadow-black/40 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-950">
                <img
                  src={room.images[0]}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />

                {/* Badge top left */}
                <div className="absolute top-4 left-4 bg-stone-900/90 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-amber-500/30 shadow-md">
                  {room.name}
                </div>

                {/* Badge top right */}
                <div className="absolute top-4 right-4 bg-stone-900/90 backdrop-blur-md text-stone-200 text-xs font-medium px-3 py-1.5 rounded-lg border border-stone-700">
                  {room.size}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {room.title}
                  </h3>
                  <p className="text-stone-300 text-sm font-light leading-relaxed mb-6">
                    {room.description}
                  </p>

                  {/* Bed Configuration Box */}
                  <div className="bg-stone-900/80 p-3.5 rounded-xl border border-stone-700/60 mb-6 space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-stone-200 font-medium">
                      <Bed className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{room.bedConfig}</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-200/90">
                      <PlusCircle className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{room.extraBed}</span>
                    </div>
                  </div>

                  {/* Feature Highlights Pill List */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-stone-300 mb-6">
                    {room.features.slice(0, 6).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Room Card Footer Actions */}
                <div className="pt-4 border-t border-stone-700/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedRoomModal(room)}
                    className="flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-semibold transition-colors"
                  >
                    <Info className="w-4 h-4" />
                    <span>Oda Detayları</span>
                  </button>

                  <button
                    onClick={() => onOpenBooking(room.id)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-amber-900/30"
                  >
                    <span>Odayı Rezerve Et</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Room Information Footer Note */}
        <div className="mt-12 bg-stone-800/50 rounded-xl p-5 border border-stone-700/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <span>
              Tüm odalarımızda 24 saat sıcak su, banyo gereçleri, klima ve yüksek hızlı ücretsiz Wi-Fi mevcuttur.
            </span>
          </div>
          <a
            href={`tel:${HOTEL_INFO.phoneRaw}`}
            className="flex items-center gap-2 text-amber-300 font-semibold hover:text-amber-200 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Bilgi İçin: 0216 504 00 00</span>
          </a>
        </div>
      </div>

      {/* Room Detail Modal */}
      {selectedRoomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-stone-900 border border-stone-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-stone-100 shadow-2xl">
            <button
              onClick={() => setSelectedRoomModal(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300"
            >
              ✕
            </button>

            <div className="mb-6">
              <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                ROZAR HOTEL ODA DETAYI
              </span>
              <h3 className="text-3xl font-serif font-bold text-white mt-1">
                {selectedRoomModal.name} - {selectedRoomModal.title}
              </h3>
            </div>

            {/* Gallery inside modal */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {selectedRoomModal.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${selectedRoomModal.name} ${i}`}
                  className="rounded-lg h-28 w-full object-cover border border-stone-800"
                />
              ))}
            </div>

            {/* Specs */}
            <div className="bg-stone-800/80 p-4 rounded-xl border border-stone-700/80 space-y-2 mb-6 text-sm">
              <div className="flex justify-between border-b border-stone-700 pb-2">
                <span className="text-stone-400">Oda Büyüklüğü:</span>
                <span className="font-semibold text-white">{selectedRoomModal.size}</span>
              </div>
              <div className="flex justify-between border-b border-stone-700 pb-2">
                <span className="text-stone-400">Kapasite:</span>
                <span className="font-semibold text-white">{selectedRoomModal.capacity}</span>
              </div>
              <div className="flex justify-between border-b border-stone-700 pb-2">
                <span className="text-stone-400">Yatak Düzeni:</span>
                <span className="font-semibold text-amber-300">{selectedRoomModal.bedConfig}</span>
              </div>
              <div className="flex justify-between border-b border-stone-700 pb-2">
                <span className="text-stone-400">Ek Yatak:</span>
                <span className="font-semibold text-amber-300">{selectedRoomModal.extraBed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Balkon Durumu:</span>
                <span className="font-semibold text-stone-300">{selectedRoomModal.balconyInfo}</span>
              </div>
            </div>

            {/* Features list */}
            <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider mb-3">
              Oda Özellikleri & Donanımı
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-stone-200 mb-8">
              {selectedRoomModal.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-1.5 rounded bg-stone-800/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  const roomId = selectedRoomModal.id;
                  setSelectedRoomModal(null);
                  onOpenBooking(roomId);
                }}
                className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-xl font-semibold text-center transition-colors"
              >
                Bu Odayı Rezerve Et
              </button>
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="px-4 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl font-medium text-center flex items-center justify-center gap-2 border border-stone-700"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>0216 504 00 00</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
