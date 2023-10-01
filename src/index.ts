import express, { Application } from "express";
import fileRouter from "./routes/files.routes";
import path from "path";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import exp from "constants";

dotenv.config();

declare global {
  var __basedir: string;
}

const app: Application = express();
const PORT: number = 3000;

global.__basedir = __dirname;

app.listen(PORT, (): void => {
  console.log("SERVER IS UP ON PORT:", PORT);
});

app.use(express.json({ limit: '50mb' }));

app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "uploads")));
app.use("/file", bodyParser.raw({ type: 'application/octet-stream', limit: '50mb' }), fileRouter);
