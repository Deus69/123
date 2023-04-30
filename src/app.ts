/** @format */

import express from "express";
import dotenv from "dotenv";
import DataBase from "./database/database";
import routes from "./routes/allrouters";

dotenv.config();

const app = express();

const PORT: number = +process.env.PORT;

app.use(express.json());

app.use("/api", routes);

const start = async () => {
  try {
    await DataBase.sync();
    await DataBase.authenticate();
    app.listen(PORT, () => console.log("Server Work " + PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
