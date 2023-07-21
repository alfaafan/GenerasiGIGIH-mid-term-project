import "dotenv/config.js";
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
