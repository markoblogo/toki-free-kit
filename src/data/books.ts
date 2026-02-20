export interface LocalizedString {
  en: string;
  tp: string;
}

export interface Book {
  id: string;
  type: 'commercial' | 'gift';
  title: LocalizedString;
  author: LocalizedString;
  coverImage: string;
  promoImage: string;
  amazonKindleUrl?: string;
  amazonPrintUrl?: string;
  downloadPdfUrl?: string;
  downloadEpubUrl?: string;
  readOnlineUrl?: string;
  teaserVideoId?: string;
  identifiers?: {
    asinKindle?: string;
    asinPrint?: string;
    isbn13Print?: string;
  };
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
}

export const books: Book[] = [
  {
    id: 'readers-kit',
    type: 'gift',
    title: {
      en: 'The Toki Pona Reader\'s Kit (Free)',
      tp: 'ilo lipu pi toki pona (mani ala)',
    },
    author: {
      en: 'ABVX',
      tp: 'jan ABVX',
    },
    coverImage: '/books/reader-kit/cover.jpg',
    promoImage: '/books/reader-kit/promo.jpg',
    downloadPdfUrl: '/books/reader-kit/reader-kit.pdf',
    teaserVideoId: 'F7fSBElppzI',
    shortDescription: {
      en: 'A practical free starter pack for reading and learning toki pona.',
      tp: 'ilo open ni li pona tawa kama sona pi toki pona.',
    },
    longDescription: {
      en: 'Includes a guided entry to reading practice, compact references, and curated links for people starting with free toki pona resources.',
      tp: 'ona li jo e nasin open tawa lukin lipu, e kulupu nimi lili, e linja tawa ilo kama sona pi mani ala.',
    },
  },
  {
    id: 'chinese-wisdom',
    type: 'gift',
    title: {
      en: 'Chinese Wisdom in toki pona (Free Kit)',
      tp: 'sona Sina lon toki pona (ilo pi mani ala)',
    },
    author: {
      en: 'ABVX',
      tp: 'jan ABVX',
    },
    coverImage: '/books/chinese-wisdom/cover.jpg',
    promoImage: '/books/chinese-wisdom/promo.png',
    downloadPdfUrl: '/books/chinese-wisdom/chinese-wisdom.pdf',
    teaserVideoId: 'BOVyG1jP580',
    shortDescription: {
      en: 'A free reading kit for Chinese classics adapted to toki pona learning flow.',
      tp: 'ilo ni li pana e lipu open pi sona Sina lon nasin kama sona toki pona.',
    },
    longDescription: {
      en: 'Focused on calm, short reading sessions: includes a free PDF layout and entry points for learners who want parallel text exploration.',
      tp: 'ona li pona tawa lukin lili lon tenpo lili: lipu PDF li lon, en nasin open tawa jan kama sona pi lukin toki tu.',
    },
  },
  {
    id: 'heart-sutra',
    type: 'gift',
    title: {
      en: 'Heart Sutra in toki pona (Free Translation)',
      tp: 'Heart Sutra lon toki pona (ante toki pi mani ala)',
    },
    author: {
      en: 'ABVX',
      tp: 'jan ABVX',
    },
    coverImage: '/books/heart-sutra/cover.svg',
    promoImage: '/books/heart-sutra/promo.png',
    downloadPdfUrl: '/books/heart-sutra/heart-sutra.pdf',
    teaserVideoId: '5q0eaRllDJQ',
    shortDescription: {
      en: 'A free toki pona translation track for Heart Sutra reading and study.',
      tp: 'lipu ni li ante toki pi mani ala tawa lukin Heart Sutra lon toki pona.',
    },
    longDescription: {
      en: 'Prepared as a free translation page with download and read entry points. Links are placeholders and can be replaced when final files are published.',
      tp: 'lipu ni li pali tawa ante toki pi mani ala, li jo e nena tawa kama jo e lipu en lukin lipu lon linja. linja li TODO tawa tenpo kama.',
    },
  },
];
