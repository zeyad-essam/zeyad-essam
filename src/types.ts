export interface BlogData {
  title: string;
  slug: string;
  date: Date;
  thumbnail: string;
  author: string;
  readTime: string;
  tags: string[];
}

export interface ProjectData {
  title: string;
  slug: string;
  date: Date;
  duration: string;
  thumbnail: string;
  projectImages: string[];
  techStack: string;
  url: string;
}

export interface MarkDownData<Type> {
  data: Type;
  content: string;
}
