import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQS, HOTEL_INFO } from '../data/hotelData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-20 bg-stone-950 text-stone-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-400 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            MİSAFİR BİLGİLENDİRME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-stone-300 text-base font-light">
            Konaklamanız öncesinde merak ettiğiniz tüm soruların yanıtları.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-stone-900 border border-stone-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif font-semibold text-base sm:text-lg text-white hover:text-amber-300 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-stone-300 text-sm font-light leading-relaxed border-t border-stone-800/80 bg-stone-900/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct contact note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-stone-900 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-white font-semibold text-base">Farklı bir sorunuz mu var?</h4>
            <p className="text-stone-400 text-xs mt-0.5">7/24 resepsiyonumuz sorularınızı yanıtlamaktan mutluluk duyar.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>0216 504 00 00</span>
            </a>
            <a
              href={`https://wa.me/${HOTEL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
