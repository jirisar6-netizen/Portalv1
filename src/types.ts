export interface Symbol {
  _id: number;
  word: string;
  category?: string;
  tags?: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  keywords: string[];
}

export interface SocialScript {
  id: string;
  title: string;
  description: string;
  steps: number[]; // Array of symbol IDs
}
