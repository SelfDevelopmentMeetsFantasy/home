
import React from 'react';
import { Book, AppProject } from './types';
import { BookOpen, Smartphone, Zap, FlaskConical } from 'lucide-react';

// Import images from assets to ensure they are correctly bundled for production
import hoppingForHappinessImg from './assets/images/hopping-for-happiness.jpg';
import thousandfoldTideImg from './assets/images/thousandfold-tide.jpg';
import incompleteVersesImg from './assets/images/incomplete-verses.jpg';
import versosIncompletosImg from './assets/images/versos-incompletos.jpg';
import happierDecisionsLogoImg from './assets/images/happier-decisions-logo.jpg';
import fit4gymiLogoImg from './assets/images/fit4gymi-logo.jpg';

// To add local screenshots:
// 1. Place your screenshot images in src/assets/images/
// 2. Import them here like: import happierScreenshot from './assets/images/happier-screenshot.jpg';
// 3. Add them to the PROJECTS array using the localScreenshotUrl property.

export const AUTHOR_STORE_LINK = 'https://www.amazon.com/stores/author/B0GDGXQGQS/allbooks';

export const BOOKS: Book[] = [
  {
    id: 'thousandfold-tide',
    title: 'The Thousandfold Tide',
    subtitle: 'YA Sea Fantasy',
    description: 'A gripping YA Sea Fantasy where Emily Voss must awaken a fractured "Sleeper" to save her village. A journey through ancient ruins where every secret carries a heavy price from the rising tide.',
    bookstoreLinks: [
      { name: 'Amazon', url: 'https://www.amazon.com/Thousandfold-Tide-Eduardo-J-Aleman/dp/B0GM7D96JK' },
      { name: 'Bol.com', url: 'https://www.bol.com/nl/nl/p/the-thousandfold-tide/9300000262431893/' },
      { name: 'La Feltrinelli', url: 'https://www.lafeltrinelli.it/thousandfold-tide-libro-inglese-eduardo-j-aleman/e/9798247179061' }
    ],
    amazonLink: 'https://www.amazon.com/Thousandfold-Tide-Eduardo-J-Aleman/dp/B0GM7D96JK',
    imageUrl: 'https://m.media-amazon.com/images/P/B0GM7D96JK.01._SCLZZZZZZZ_.jpg',
    tiktokLink: 'https://www.tiktok.com/@booksbyeja/video/7609782415485193494',
    localImageUrl: thousandfoldTideImg,
    reviewLink: 'https://booksprout.co/reviewer/review-copy/view/265868/the-thousandfold-tide',
    status: 'Published'
  },
  {
    id: 'incomplete-verses',
    title: '(Some) Incomplete Verses',
    subtitle: 'Surrealist Anthology',
    description: 'A haunting surrealist anthology of prose-poems exploring cosmic longing and dreamlike distortions. A collection that preserves the rhythmic chaos and surrealist depth of the human subconscious.',
    bookstoreLinks: [
      { name: 'Amazon', url: 'https://www.amazon.com/Incomplete-Verses-Other-Letters-Never-ebook/dp/B0GCXNLPR1' },
      { name: 'Google Books', url: 'https://books.google.ch/books/about/Some_Incomplete_Verses_and_Other_Letters.html?id=0Pre0QEACAAJ' },
      { name: 'Foyles', url: 'https://www.foyles.co.uk/book/some-incomplete-verses-and-other-letters-never-sent/eduardo-j-aleman/9798247364504' }
    ],
    amazonLink: 'https://www.amazon.com/Incomplete-Verses-Other-Letters-Never-ebook/dp/B0GCXNLPR1',
    imageUrl: 'https://m.media-amazon.com/images/P/B0GCXNLPR1.01._SCLZZZZZZZ_.jpg',
    tiktokLink: 'https://www.tiktok.com/@booksbyeja/video/7598627853579832598',
    localImageUrl: incompleteVersesImg,
    status: 'Published'
  },
  {
    id: 'versos-incompletos',
    title: '(Unos) Versos Incompletos',
    subtitle: 'Antología Surrealista',
    description: 'Una antología surrealista que explora la angustia cósmica y la distorsión del tiempo. Una obra inspirada en la poética de Borges y el surrealismo bretoniano, capturando la esencia de lo onírico.',
    bookstoreLinks: [
      { name: 'Amazon', url: 'https://www.amazon.com/Versos-Incompletos-Cartas-Enviadas-Spanish-ebook/dp/B0G4JYFXSJ' }
    ],
    amazonLink: 'https://www.amazon.com/Versos-Incompletos-Cartas-Enviadas-Spanish-ebook/dp/B0G4JYFXSJ',
    imageUrl: 'https://m.media-amazon.com/images/P/B0G4JYFXSJ.01._SCLZZZZZZZ_.jpg',
    tiktokLink: 'https://www.tiktok.com/@booksbyeja/video/7599327762075159830',
    localImageUrl: versosIncompletosImg,
    status: 'Published'
  }
];

export const PROJECTS: AppProject[] = [
  {
    id: 'happier-decisions',
    name: 'Hopping for Happiness and Happier Decisions',
    tagline: 'Read the Book, Use the App, Transform Your Life',
    description: 'A Simple Framework for Smarter, Happier Decisions. With a powerful AI Copilot to guide you through',
    status: 'Published',
    platform: 'App Store & Bookstore',
    link: 'https://apps.apple.com/app/happier-decisions/id6759266086',
    bookstoreLinks: [
      { name: 'Amazon', url: 'https://www.amazon.com/Hopping-Happiness-framework-smarter-decisions-ebook/dp/B0GRWSS34N' },
      { name: 'Walmart', url: 'https://www.walmart.com/ip/Hopping-for-Happiness-a-simple-framework-for-smarter-happier-decisions-Paperback-9798251663341/19815466558' },
      { name: 'Bol.com', url: 'https://www.bol.com/be/nl/p/hopping-for-happiness-a-simple-framework-for-smarter-happier-decisions/9300000268435252/' }
    ],
    reviewLink: 'https://booksprout.co/reviewer/review-copy/view/269333/hopping-for-happiness-a-simple-framework-for-smarter-happier-decisions',
    localImageUrl: happierDecisionsLogoImg,
    localScreenshotUrl: '/images/happier-bundle.jpg',
    icon: 'BrainCircuit',
    featured: true
  },
  {
    id: 'fit4gymi',
    name: 'Fit4Gymi',
    tagline: 'KI-Coach für den Gymi-Erfolg 🚀',
    description: 'Intelligent AI coach designed to guide 6th graders in Switzerland through the Gymnasium entrance exam (ZAP) with stress-free, 24/7 learning support.',
    status: 'Published',
    platform: 'App Store',
    link: 'https://apps.apple.com/app/fit4gymi/id6759988048',
    localImageUrl: fit4gymiLogoImg,
    localScreenshotUrl: '/images/Fit4Gymi.PNG',
    icon: 'GraduationCap'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />
};