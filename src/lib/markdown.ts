import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getMarkdownFilesData<Type extends { date?: Date }>({
  folder,
  limit,
}: {
  folder: string;
  limit?: number;
}): Type[] {
  try {
    // The path for the content directory which holds the markdown folders
    const contentDirectory = path.join(process.cwd(), "src", "content", folder);
    // A list of the file names for the given folder
    const files = fs.readdirSync(contentDirectory);

    let filesData: Type[] = [];
    // An array of the data and content for each file from the markdown folder
    files.forEach((file) => {
      const fileContent = fs.readFileSync(
        path.join(contentDirectory, file),
        "utf-8"
      );
      const { data } = matter(fileContent);

      filesData.push(data as Type);
    });

    // If every object from the filesData contains a date sort the files data in descending order (most recent first)
    if (filesData.every((item) => item.date !== undefined)) {
      filesData.sort((a, b) => {
        if (a.date && b.date) {
          const dateA = new Date(a.date).getTime();
          const dateB = new Date(b.date).getTime();
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
