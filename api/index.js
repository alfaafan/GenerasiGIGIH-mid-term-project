import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
const port = process.env.PORT || 3000;
import router from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(cors());

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening at port ${port}`);
});
