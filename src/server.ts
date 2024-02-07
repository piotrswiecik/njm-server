import express from "express";

import { config } from "./config/config";

const app = express();

// kubernetes health check
app.get("/status", (req, res) => {
  res.status(200).json({
    "status": "ok"
  });
});

app.listen(config.NODE_PORT, () => {
  console.log(`server started on port ${config.NODE_PORT}`);
});