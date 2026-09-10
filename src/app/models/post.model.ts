export type PostContentBlock =
  | string
  | { type: 'markdown'; value: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: PostContentBlock[];
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}
