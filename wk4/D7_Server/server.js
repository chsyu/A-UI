
const path = require('path')
const express = require("express");
const app = express(); // create express app

// add middleware：讓express可以處理build目錄內的static files
app.use(express.static(path.join(__dirname, "public")));

// add router: 處理 url=/ 與 url=/post 的Get request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// add router: 處理 url=/ 與 url=/api/:products 的Get request
app.get("/post", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "post.html"));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});

