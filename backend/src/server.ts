import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const PORT = process.env.PORT || 8000;

app.get("/", (_req, res) => {
  res.send("MentorOS Backend Running");
});

app.get("/health", (_req, res) => {
  res.json({
    success: true,
    message: "Backend Connected",
  });
});

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});