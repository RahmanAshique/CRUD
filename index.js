const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello bro  from node api");
});

app.post("/api/products", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

mongoose
  .connect(
    "mongodb+srv://admin:admin1997@crud.gaca4.mongodb.net/?retryWrites=true&w=majority&appName=CRUD"
  )
  .then(() => {
    console.log("mongoose is Connected!");
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
