import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectData {
  title: string;
  slug: string;
  date: string;
  duration: string;
  thumbnail: string;
  projectImages: string[];
}

export interface BlogData {
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

export interface FileData<Type> {
  data: Type;
  content: string;
}

export function getMarkdownFilesData<Type extends { date?: string }>(
  folder: string,
  limit?: number
): FileData<Type>[] {
  try {
    // The path for the content directory which holds the markdown folders
    const contentDirectory = path.join(process.cwd(), "src", "content", folder);
    // A list of the file names for the given folder
    const files = fs.readdirSync(contentDirectory);

    let filesData: FileData<Type>[] = [];
    // An array of the data and content for each file from the markdown folder
    files.forEach((file) => {
      const fileContent = fs.readFileSync(
        path.join(contentDirectory, file),
        "utf-8"
      );
      const { data, content } = matter(fileContent);

      filesData.push({ data, content } as FileData<Type>);
    });

    // If every object from the filesData contains a date sort the files data in descending order (most recent first)
    if (filesData.every((item) => item.data.date !== undefined)) {
      filesData.sort((a, b) => {
        if (a.data.date && b.data.date) {
          const dateA = new Date(a.data.date).getTime();
          const dateB = new Date(b.data.date).getTime();
          return dateB - dateA;
        } else {
          return 0;
        }
      });
    }
    // If the limit is not === undefined slice the data according to the given limit
    if (limit !== undefined) {
      filesData = filesData.slice(0, limit);
    }

    return filesData;
  } catch (error) {
    console.error(`Error reading files from folder: ${folder}`, error);
    return [];
  }
}
