import express, { Application } from "express";
import dotenv from "dotenv";
import main from "./models/db";
import fileRouter from "./routes/files.routes"


dotenv.config();

const app: Application = express();
const PORT: number = 3000;


main()
  .then(() => {
    app.listen(PORT, (): void => {
      console.log("SERVER IS UP ON PORT:", PORT);
    });
    console.log("DB connected");
  })
  .catch(console.error);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", fileRouter);


