import express from "express";
import { ENV } from "./config/env";

const app = express();
const PORT = ENV.PORT;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
