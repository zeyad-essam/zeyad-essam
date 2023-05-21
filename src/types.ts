export interface BlogData {
  title: string;
  slug: string;
  date: Date;
  thumbnail: string;
  author: string;
  category: string;
  tags: string[];
}

export interface ProjectData {
  title: string;
  slug: string;
  date: string;
  duration: string;
  thumbnail: string;
  projectImages: string[];
}

export interface MarkDownData<Type> {
  data: Type;
  content: string;
}
