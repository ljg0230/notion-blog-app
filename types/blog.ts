export interface NotionTag {
  id: string;
  name: string;
  count: number;
}

export interface NotionPost {
  id: string;
  title: string;
  description?: string;
  coverImage?: string;
  tags?: NotionTag[];
  author?: string;
  date?: string;
}

export interface TagFilterItem {
  id: string;
  name: string;
  count: number;
}

export interface Post {
  id: string;
  title: string;
  description?: string;
  coverImage?: string;
  tags?: string[];
  author?: string;
  date?: string;
  modifiedDate?: string;
  slug: string;
}
