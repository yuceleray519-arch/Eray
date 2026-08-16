export interface Room {
  id: string;
  name: string;
  title: string;
  description: string;
  size: string;
  capacity: string;
  bedConfig: string; // "1 Adet 2 Kişilik Çift Kişilik Yatak"
  extraBed: string; // "İsteğe bağlı 1 adet tek kişilik ek yatak"
  balconyInfo: string; // "Balkonsuz Konfor Oda"
  features: string[];
  images: string[];
  priceNote?: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface BookingFormState {
  roomId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  needExtraBed: boolean;
  name: string;
  phone: string;
  notes: string;
}
