const express =require('express');
const data =  require('./data.json');

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data);
});

app.get("/api/:id", (req, res) => {
  res.send(`<h1>Person:${req.params.id}</h1><h2>name: ${req.query.name}</h2>`);
});

app.listen(5000, () => { 
  console.log("Server started at http://localhost:5000") 
});
