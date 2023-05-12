import fs from "fs";
import path from "path";

import { NextApiRequest, NextApiResponse } from "next";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "public", "zeyad-essam-resume.pdf");
  const stat = fs.statSync(filePath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    // Parse the range header to get the start and end bytes of the requested chunk
    const [startStr, endStr] = range.replace(/bytes=/, "").split("-");
    const start: number = parseInt(startStr, 10);
    const end: number = parseInt(endStr, 10);
    const chunkSize = end - start + 1;
    const fileStream = fs.createReadStream(filePath, {
      start: start,
      end: end,
    });
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; zeyad-essam-resume.pdf",
    };

    res.writeHead(206, headers);
    fileStream.pipe(res);
  } else {
    const headers = {
      "Content-Length": fileSize,
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; zeyad-essam-resume.pdf",
    };

    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  }
}
