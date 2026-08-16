import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../data/hotelData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('TümFotoğraflar');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'TümFotoğraflar', label: 'Tüm Fotoğraflar' },
    { id: 'Odalar', label: 'Odalar' },
    { id: 'Spa', label: 'Spa & Wellness' },
    { id: 'Genel', label: 'Genel Alanlar' },
  ];

  const filteredImages =
    activeTab === 'TümFotoğraflar'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeTab);

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === 0 ? filteredImages.length - 1 : activeImageIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === filteredImages.length - 1 ? 0 : activeImageIndex + 1
      );
    }
  };

  return (
    <section id="galeri" className="py-20 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            FOTOĞRAF GALERİSİ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Rozar Hotel Görselleri
          </h2>
          <p className="text-stone-300 text-base font-light mb-3">
            Otelimiz, konforlu odalarımız ve Spa alanımızdan kareler.
          </p>
          <a
            href="https://www.instagram.com/rozarhotelspa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-pink-400 hover:text-pink-300 font-medium transition-colors bg-pink-950/40 px-3.5 py-1.5 rounded-full border border-pink-500/30"
          >
            <span>Instagram Sayfamız: @rozarhotelspa</span>
          </a>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === cat.id
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-900 border border-stone-800 cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-amber-400 text-[10px] font-semibold uppercase tracking-wider">
                  {img.category}
                </span>
                <span className="text-white text-sm font-semibold truncate">
                  {img.title}
                </span>
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-stone-900/80 text-amber-400">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setActiveImageIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-stone-800 hover:bg-stone-700 text-white z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredImages[activeImageIndex].url}
              alt={filteredImages[activeImageIndex].title}
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-stone-800"
            />
            <div className="mt-4 text-center">
              <h4 className="text-white font-serif text-lg font-bold">
                {filteredImages[activeImageIndex].title}
              </h4>
              <p className="text-amber-400 text-xs">
                {activeImageIndex + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
