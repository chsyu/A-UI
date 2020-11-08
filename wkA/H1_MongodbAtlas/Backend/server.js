const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const MONGODB_ATLAS_URL = "mongodb+srv://test:test@cluster0.u4s4h.mongodb.net/amazona?retryWrites=true&w=majority";
const productRouter = require("./routers/productRouter");

mongoose.connect(MONGODB_ATLAS_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
