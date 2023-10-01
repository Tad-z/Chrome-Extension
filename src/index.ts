import express, { Application } from "express";
import fileRouter from "./routes/files.routes";
import path from "path";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import main from "./models/db";

dotenv.config();

declare global {
  var __basedir: string;
}

const app: Application = express();
const PORT: number = 3000;

global.__basedir = __dirname;

main()
  .then(() => {
    app.listen(PORT, (): void => {
      console.log("SERVER IS UP ON PORT:", PORT);
    });
    console.log("DB connected");
  })
  .catch(console.error);

app.use(express.json({ limit: '50mb' }));

app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "uploads")));
app.use("/file", bodyParser.raw({ type: 'application/octet-stream', limit: '50mb' }), fileRouter);
