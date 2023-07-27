import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
const port = process.env.PORT || 3000;
import router from "./routes/index.js";

mongoose.connect(process.env.MONGO_URL).catch((error) => handleError(error));
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
