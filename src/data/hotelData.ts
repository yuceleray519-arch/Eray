import { Room, Facility, FAQItem } from '../types';

export const HOTEL_INFO = {
  name: 'Rozar Hotel',
  stars: 3,
  starRatingText: '3 Yıldızlı Şehir Oteli',
  district: 'Ataşehir',
  city: 'İstanbul',
  neighborhood: 'Ferhatpaşa',
  fullAddress: 'Ferhatpaşa, Ferhatpaşa Yolu Sk. No:93, 34646 Ataşehir/İstanbul',
  phone: '0216 504 00 00',
  phoneRaw: '02165040000',
  phoneIntl: '+902165040000',
  email: 'rozarhotel@gmail.com',
  whatsappNumber: '905522536836',
  whatsappDisplay: '+90 552 253 68 36',
  instagramUrl: 'https://www.instagram.com/rozarhotelspa/',
  instagramHandle: '@rozarhotelspa',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.892348398412!2d29.171230000000003!3d40.983810000000005!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac63e414bd663%3A0x6b4fb24e6a6a24!2sFerhatpa%C5%9Fa%20Yolu%20Sk.%20No%3A93%2C%2034646%20Ata%C5%9Fehir%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str',
  featuresNote: 'Ataşehir Ferhatpaşa bölgesinde konforlu ve huzurlu konaklama sunan 3 yıldızlı şehir oteli.',
};

export const ROOMS: Room[] = [
  {
    id: 'standart-oda',
    name: 'Standart Oda',
    title: 'Standart Konfor Oda',
    description: 'Şehir konaklamalarınız için sade, ferah ve ergonomik olarak tasarlanmış 3 yıldızlı standart oda seçeneği.',
    size: '22 m²',
    capacity: '2 Yetişkin (+1 Çocuk / Ek Yatak)',
    bedConfig: '1 Adet 2 Kişilik Çift Kişilik Yatak',
    extraBed: 'İsteğe bağlı 1 adet tek kişilik ek yatak eklenebilir',
    balconyInfo: 'Balkonsuz (Ses izoleli şehir manzaralı pencereler)',
    features: [
      '1 Adet 2 Kişilik Yatak',
      'İsteğe Bağlı 1 Tek Kişilik Ek Yatak',
      'Özel Banyo & Duşakabin',
      'Split Klima & Isıtma',
      'Yüksek Hızlı Ücretsiz Wi-Fi',
      'LCD HD Televizyon',
      'Çalışma Masası',
      'Saç Kurutma Makinesi',
      'Emanet Kasa',
      'Balkonsuz İzolasyonlu Camlar'
    ],
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'deluxe-oda',
    name: 'Deluxe Oda',
    title: 'Deluxe Şehir Oda',
    description: 'Daha geniş alan ve premium oda detayları ile Ataşehir iş ve seyahat gezilerinizde maksimum konfor sağlayan odamız.',
    size: '28 m²',
    capacity: '2 Yetişkin (+1 Ek Yatak)',
    bedConfig: '1 Adet 2 Kişilik Çift Kişilik Yatak',
    extraBed: 'İsteğe bağlı 1 adet tek kişilik ek yatak eklenebilir',
    balconyInfo: 'Balkonsuz (Lüks iç mekân tasarımı)',
    features: [
      '1 Adet 2 Kişilik Yatak',
      'İsteğe Bağlı 1 Tek Kişilik Ek Yatak',
      'Geniş Banyo & Lüks Banyo Bukletleri',
      'Oturma & Dinlenme Koltuğu',
      'Bağımsız Klima Sistemi',
      'Yüksek Hızlı Wi-Fi',
      'Geniş Ekran LCD TV',
      'Mini Buzdolabı',
      'Saç Kurutma Makinesi',
      'Balkonsuz'
    ],
    images: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'suit-oda-2-1',
    name: 'Suit Oda (2+1)',
    title: 'Geniş Suit Oda (2+1)',
    description: 'Aileler ve uzun süreli konaklamalar için ideal, 2 oda ve 1 geniş yaşam alanından oluşan lüks suit odamız.',
    size: '48 m²',
    capacity: '3-4 Kişilik Konaklama İmkanı',
    bedConfig: '1 Adet 2 Kişilik Çift Kişilik Yatak',
    extraBed: 'İsteğe bağlı 1 adet tek kişilik ek yatak eklenebilir',
    balconyInfo: 'Balkonsuz (Geniş ferah iç mimari)',
    features: [
      '1 Adet 2 Kişilik Çift Kişilik Yatak',
      'İsteğe Bağlı 1 Tek Kişilik Ek Yatak',
      '2+1 Bağımsız Oda Konsepti',
      'Oturma Grubu & Sehpa',
      'Lüks Özel Banyo',
      'Sessiz Şehir İzolasyonu',
      'Yüksek Hızlı İnternet',
      'Büyük Ekran TV',
      'Klima & Isıtma',
      'Balkonsuz'
    ],
    images: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'suit-oda-1-1',
    name: 'Suit Oda (1+1)',
    title: 'Konfor Suit Oda (1+1)',
    description: 'Yatak odası ve ayrı oturma odası konsepti ile iş seyahatlerinde ev konforu sunan 1+1 suit oda.',
    size: '36 m²',
    capacity: '2 Yetişkin (+1 Ek Yatak)',
    bedConfig: '1 Adet 2 Kişilik Çift Kişilik Yatak',
    extraBed: 'İsteğe bağlı 1 adet tek kişilik ek yatak eklenebilir',
    balconyInfo: 'Balkonsuz (Sessiz ve konforlu)',
    features: [
      '1 Adet 2 Kişilik Yatak',
      'İsteğe Bağlı 1 Tek Kişilik Ek Yatak',
      '1+1 Yatak Odası ve Oturma Odası Düzeni',
      'Konforlu Oturma Grubu',
      'Şık Banyo & Duş',
      'Ücretsiz İnternet (Wi-Fi)',
      'Klima & Sıcak Su',
      'Çalışma Köşesi',
      'Balkonsuz'
    ],
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const VERIFIED_FACILITIES: Facility[] = [
  {
    id: 'spa',
    title: 'Spa Hizmeti',
    description: 'Günün yorgunluğunu atabileceğiniz dinlendirici ve yenileyici otel Spa hizmeti.',
    iconName: 'Sparkles'
  },
  {
    id: 'wifi',
    title: 'Ücretsiz Wi-Fi',
    description: 'Otelin tüm odalarında ve genel alanlarında kesintisiz, yüksek hızlı kablosuz internet.',
    iconName: 'Wifi'
  },
  {
    id: 'reception',
    title: '7/24 Resepsiyon',
    description: 'Günün her saatinde hızlı giriş-çıkış ve danışma hizmeti sağlayan resepsiyon ekibi.',
    iconName: 'Clock'
  },
  {
    id: 'parking',
    title: 'Otopark',
    description: 'Otelimizde konaklayan misafirlerimiz için araç park imkânı.',
    iconName: 'Car'
  },
  {
    id: 'cleaning',
    title: 'Günlük Temizlik',
    description: 'Hijyen standartlarına uygun, titizlikle yapılan günlük kat ve oda temizliği.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'climate',
    title: 'Klima ve Isıtma',
    description: 'Her mevsim ideal oda sıcaklığı sağlayan kişisel ayarlanabilir iklimlendirme.',
    iconName: 'Thermometer'
  }
];

export const SPA_DETAILS = {
  title: 'Rozar Spa & Wellness',
  subtitle: 'Ataşehir\'in Kalbinde Huzurlu Bir Mola',
  description: 'Rozar Hotel bünyesinde yer alan Spa alanımız, yoğun şehir temposundan ve iş yorgunluğundan uzaklaşmanız için tasarlanmıştır. Kaliteli hizmet anlayışımızla zihninizi ve bedeninizi tazeleyin.',
  highlights: [
    'Dinlenme ve Yenilenme Alanları',
    'Hijyenik ve Ferah Spa Ortamı',
    'Uzman Hizmet Anlayışı',
    'Otel Konuklarına Özel Rezervasyon Kolaylığı'
  ],
  image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
};

export const FAQS: FAQItem[] = [
  {
    category: 'Geniş Bilgi',
    question: 'Rozar Hotel kaç yıldızlı bir oteldir?',
    answer: 'Rozar Hotel, Ataşehir İstanbul\'da hizmet veren resmi 3 yıldızlı konforlu bir şehir otelidir.'
  },
  {
    category: 'Oda Özellikleri',
    question: 'Odalarda yatak düzeni nasıldır ve ek yatak eklenebilir mi?',
    answer: 'Tüm oda türlerimizde (Standart, Deluxe, Suit 2+1 ve Suit 1+1) 1 adet 2 kişilik çift kişilik yatak bulunmaktadır. Talebiniz halinde odalara ek olarak 1 adet tek kişilik yatak eklenebilmektedir.'
  },
  {
    category: 'Oda Özellikleri',
    question: 'Odalarda balkon bulunmakta mıdır?',
    answer: 'Otelimizdeki hiçbir odada balkon bulunmamaktadır. Tüm odalarımız ses ve ısı izolasyonlu modern şehir pencereleriyle donatılmıştır.'
  },
  {
    category: 'Hizmetler',
    question: 'Otelde Spa hizmeti var mıdır?',
    answer: 'Evet, Rozar Hotel bünyesinde misafirlerimizin dinlenip yenilenebileceği Spa alanı bulunmaktadır.'
  },
  {
    category: 'Hizmetler',
    question: 'Otelde restoran, yemek veya bar hizmeti bulunuyor mu?',
    answer: 'Otelimizde restoran, yemek servisi veya bar hizmeti bulunmamaktadır. Ataşehir bölgesindeki zengin restoran paket servislerinden yararlanabilirsiniz.'
  },
  {
    category: 'Hizmetler',
    question: 'Havuz, plaj veya deniz manzarası var mıdır?',
    answer: 'Hayır, otelimiz İstanbul Ataşehir Ferhatpaşa\'da yer alan bir şehir otelidir; havuz, plaj veya deniz manzarası bulunmamaktadır.'
  },
  {
    category: 'Konum & İletişim',
    question: 'Otelin açık adresi, telefon numarası ve e-posta adresi nedir?',
    answer: 'Açık Adresimiz: Ferhatpaşa, Ferhatpaşa Yolu Sk. No:93, 34646 Ataşehir/İstanbul. Telefon: 0216 504 00 00, WhatsApp: +90 552 253 68 36, E-Posta: rozarhotel@gmail.com.'
  }
];

export const GALLERY_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    title: 'Rozar Hotel Dış Görünüm',
    category: 'Genel'
  },
  {
    url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    title: 'Standart Oda',
    category: 'Odalar'
  },
  {
    url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
    title: 'Deluxe Oda',
    category: 'Odalar'
  },
  {
    url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    title: 'Suit Oda (2+1)',
    category: 'Odalar'
  },
  {
    url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    title: 'Suit Oda (1+1)',
    category: 'Odalar'
  },
  {
    url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    title: 'Spa & Wellness Alanı',
    category: 'Spa'
  },
  {
    url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
    title: 'Resepsiyon & Karşılama',
    category: 'Genel'
  },
  {
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
    title: 'Oda Konfor Alanı',
    category: 'Odalar'
  }
];
