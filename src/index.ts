import express from "express";
import diariesRouter from "./Routes/diaries";


const app = express();

app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("SOMEONE PINGED HERE!!");
  res.send("pong");
})


app.use("/api/diaries", diariesRouter);


app.listen(PORT, () => {
  console.log(`server running  on port ${PORT}`);
})
