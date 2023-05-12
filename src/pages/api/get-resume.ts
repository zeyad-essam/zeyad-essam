import fs from "fs";
import path from "path";

export default async function (req: any, res: any) {
  const filePath = path.join(process.cwd(), "public", "zeyad-essam-resume.pdf");

  const fileContent = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=zeyad-essam-resume.pdf"
  );

  res.send(fileContent);
}
