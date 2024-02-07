import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import mainRoute from "./routes/index";
import logger from "morgan";
import cors from "cors";

dotenv.config();

const app = express();
const port = 5000;

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://oguzhanorhan049:TduTOJeyQgtULvDm@cluster0.m0abybi.mongodb.net/"
    );
    console.log("MongoDB bağlantısı başarılı");
  } catch (error) {
    throw error;
  }
};

// middleware
app.use(express.json());
app.use(logger("dev"));
app.use(cors());

app.use("/api", mainRoute);

app.listen(port, () => {
  connect();
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
