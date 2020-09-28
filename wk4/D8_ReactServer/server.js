
const path = require("path");
const express = require("express");
const app = express(); // create express app
const data = require("./data.json");

// add middleware：讓express可以處理build目錄內的static files
app.use(express.static(path.join(__dirname, "build")));

// add router: 處理 url=/ 與 url=/api/:products 的Get request
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api/:products", (req, res) => {
  res.send(data);
});

// 所有不在上面router定義的url request, express 都回傳index.html
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});