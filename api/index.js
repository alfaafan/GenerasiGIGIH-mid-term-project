import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
const port = process.env.PORT || 3000;
import router from "./routes/index.js";
import cors from "cors";

const app = express();

app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB Atlas");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening at port ${port}`);
});
