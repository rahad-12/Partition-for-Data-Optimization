import express from "express";
import path from "path";
import http from "http";

const app = express();
const expressServer = http.createServer(app);
const port = 3001;

app.get("/", (req, res) => {
  res.send("send");
});

expressServer.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
