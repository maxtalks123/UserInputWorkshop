import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.listen("300", () => {
  console.log("server is working on port 300");
});

app.post("/messages", (request, response) => {
  console.log("req.body", req.body);
  response.status(200).json({ status: "Message received!" });
});
