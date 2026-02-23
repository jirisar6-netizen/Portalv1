import { Category, SocialScript } from './types';

export const CATEGORIES: Category[] = [
  { id: 'basics', name: 'Základy', icon: 'Home', keywords: ['ano', 'ne', 'prosím', 'děkuji', 'chci', 'pomoc'] },
  { id: 'food', name: 'Jídlo', icon: 'Utensils', keywords: ['jíst', 'pít', 'hlad', 'žízeň', 'jablko', 'chleba', 'voda'] },
  { id: 'actions', name: 'Činnosti', icon: 'Play', keywords: ['hrát', 'spát', 'umýt', 'jít', 'číst', 'kreslit'] },
  { id: 'emotions', name: 'Emoce', icon: 'Smile', keywords: ['šťastný', 'smutný', 'naštvaný', 'unavený', 'strach'] },
  { id: 'people', name: 'Lidé', icon: 'Users', keywords: ['máma', 'táta', 'bratr', 'sestra', 'paní učitelka', 'kamarád'] },
  { id: 'places', name: 'Místa', icon: 'MapPin', keywords: ['domov', 'škola', 'hřiště', 'obchod', 'doktor'] },
];

export const SOCIAL_SCRIPTS: SocialScript[] = [
  {
    id: 'doctor',
    title: 'U doktora',
    description: 'Jak se chovat a co se bude dít u lékaře.',
    steps: [2548, 3012, 5487, 8952] // Placeholder IDs
  },
  {
    id: 'school',
    title: 'Cesta do školy',
    description: 'Příprava na ranní rutinu a odchod do školy.',
    steps: [1234, 5678, 9012] // Placeholder IDs
  }
];

export const ARASAAC_API_BASE = 'https://api.arasaac.org/api/symbols/cs';
export const ARASAAC_IMAGE_BASE = 'https://static.arasaac.org/symbols';
