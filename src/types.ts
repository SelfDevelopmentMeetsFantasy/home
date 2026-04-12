
export interface BookstoreLink {
  name: string;
  url: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  bookstoreLinks?: BookstoreLink[];
  amazonLink?: string; // Keep for backward compatibility or as a primary link
  tiktokLink?: string;
  imageUrl?: string;
  localImageUrl?: string;
  reviewLink?: string;
  status?: 'Published' | 'In Progress';
}

export interface AppProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'Published' | 'In Progress' | 'Beta';
  platform: string;
  link?: string;
  bookstoreLinks?: BookstoreLink[];
  reviewLink?: string;
  icon: string;
  logo?: string;
  logoUrl?: string;
  localImageUrl?: string;
  screenshotUrl?: string;
  localScreenshotUrl?: string;
  featured?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  source: 'LinkedIn' | 'Reddit' | 'Medium' | 'Other';
  embedUrl?: string;
  htmlEmbed?: string;
  externalUrl: string;
  imageUrl?: string;
  localImageUrl?: string;
  tags: string[];
}
