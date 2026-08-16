import React from 'react';
import { Sparkles, Wifi, Clock, Car, ShieldCheck, Thermometer, Info } from 'lucide-react';
import { VERIFIED_FACILITIES } from '../data/hotelData';

export const FacilitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-amber-400" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-amber-400" />;
      case 'Car':
        return <Car className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'Thermometer':
        return <Thermometer className="w-6 h-6 text-amber-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="olanaklar" className="py-20 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            OTEL HİZMETLERİ & OLANAKLAR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Doğrulanmış Konaklama Olanakları
          </h2>
          <p className="text-stone-300 text-base sm:text-lg font-light leading-relaxed">
            3 yıldızlı Rozar Hotel, Ataşehir Ferhatpaşa'da konaklamanız boyunca ihtiyacınız olan tüm temel ve konforlu hizmetleri sunmaktadır.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700/80 hover:border-amber-500/40 transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                {getIcon(facility.iconName)}
              </div>
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                {facility.title}
              </h3>
              <p className="text-stone-300 text-sm font-light leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>

        {/* Clear Note Box clarifying non-present services directly for guest clarity */}
        <div className="mt-12 bg-stone-950/80 rounded-2xl p-6 border border-stone-800 text-stone-300 text-xs sm:text-sm space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
            <Info className="w-4 h-4" />
            <span>Şehir Oteli Bilgilendirmesi</span>
          </div>
          <p className="font-light leading-relaxed">
            Otelimiz Ataşehir İstanbul'da yer alan bir şehir konaklama otelidir. Otelimizde restoran/yemek servisi, bar, havuz, plaj, deniz manzarası ve havalimanı transfer hizmeti bulunmamaktadır. Çevredeki restoran seçeneklerinden sipariş verebilir veya Ataşehir merkezindeki restoranları tercih edebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  );
};
