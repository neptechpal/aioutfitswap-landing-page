export interface BlogPost {
  author_name: string;
  id: number;
  title: string;
  slug: string;
  content: string;
  description: string;
  image: string ;
  project: number;
  category: number;
  author: string;
  category_name?: string; 
  
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  Canonical_url?: string;
  created_at: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
}