export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}
