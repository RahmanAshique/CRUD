require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoutes = require("./controllers/ProductsController.js");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello bro  from node api");
});

app.use(productRoutes);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("mongoose is Connected!");
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
