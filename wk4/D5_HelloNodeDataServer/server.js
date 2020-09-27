const express =require('express');
const data =  require('./data.json');

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data);
});

app.listen(5000, () => { console.log("Server started at http://localhost:5000") });
