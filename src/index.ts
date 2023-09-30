import express, { Application } from "express";
import fileRouter from "./routes/files.routes";
import path from "path";

declare global {
  var __basedir: string;
}

const app: Application = express();
const PORT: number = 3000;

global.__basedir = __dirname;

app.listen(PORT, (): void => {
  console.log("SERVER IS UP ON PORT:", PORT);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(path.join(__dirname, "uploads")));
app.use("/file", fileRouter);
