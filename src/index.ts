import express, { Application, Request, Response } from "express";
import fileRouter from "./routes/files.routes";
import path from "path";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import main from "./models/db";
import { Deepgram } from "@deepgram/sdk";


dotenv.config();

declare global {
  var __basedir: string;
}

const app: Application = express();
const PORT: number = 3000;
const deepgram = new Deepgram("9eedab2278a9a22f9bc1f567f520ec656ce54ab0");

global.__basedir = __dirname;

main()
  .then(() => {
    app.listen(PORT, (): void => {
      console.log("SERVER IS UP ON PORT:", PORT);
    });
    console.log("DB connected");
  })
  .catch(console.error);

// const videoFilePath =
//   "C:/Users/user/Documents/Stage5/src/uploads/declan.mp4";

// transcribeLocalVideo(videoFilePath)
//   .then((transcript) => {
//     console.dir(transcript, { depth: null });
//   })
//   .catch((error) => {
//     console.error("Error transcribing video:", error);
//   });

app.use(express.json({ limit: "50mb" }));

app.get('/transcribe', async function (req: Request, res: Response) {
  try {
    const response = await deepgram.transcription.preRecorded(
      { url: "https://helpmeout-e2c4.onrender.com/file/declan.mp4" },
      { punctuate: true, utterances: true }
    );

    const srtTranscript = response.toSRT();
    console.log({ srtTranscript });
    res.status(200).json({ transcript: srtTranscript });
  } catch (error) {
    console.error("Error transcribing video:", error);
    return res.status(400).json({ message: "Error transcribing video" });
  }
});

app.get('/api/:videoName', async function (req: Request, res: Response) {
  const videoName = req.params.videoName;
  console.log({ videoName });
  res.sendFile(path.join(process.cwd(), '/src/uploads/') + videoName);
}
);

app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: ["http://localhost:3000", "http://127.0.0.1:5500/index.html"]
}));

app.use("/", express.static(path.join(__dirname, "uploads")));
app.use(
  "/file",
  // bodyParser.raw({ type: "application/octet-stream", limit: "50mb" }),
  fileRouter
);
