import { Request, Response } from "express";
import File from "../models/file";
import multer from "multer";
import fs from "fs"


export const fileUpload = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    const upload = new File({
      file: req.file?.path,
    });
    const result = await upload.save();
    res.status(200).json({
      result,
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.log(error);

    if (error instanceof multer.MulterError) {
      if (error.code === "LIMIT_FILE_SIZE") {
        return res.status(500).send({
          message: "File size cannot be larger than 200MB!",
        });
      }
    }

    res.status(500).json({
      message: "Internal server error",
    });
  }
};


export const fileDownload = async (req: Request, res: Response) => {
  try {
    const name = req.params.fileName;

    const fileName = `src\\uploads\\${name}`;

    // Find the file record in your database
    const file = await File.findOne({ file: fileName });

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    // Send the file as an attachment for download
    res.download(file.file);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export const streamVideoFiles = async (req: Request, res: Response) => {
  try {
    const name = req.params.videoName;

    const filePath = `src\\uploads\\${name}`;

    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
  
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      
      const chunksize = end - start + 1;
      const file = fs.createReadStream(filePath, { start, end });

      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4', 
      }
      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4', 
      };
      res.writeHead(200, head);
      fs.createReadStream(filePath).pipe(res);
    }
  } catch (error) {
    console.log(error)
  }
};


