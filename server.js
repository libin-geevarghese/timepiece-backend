require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const apiRoutes = require("./Express/route");
const app = express();

const PORT = process.env.PORT || 8005;
const AtlasDB = process.env.DBURL;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

mongoose.connect(AtlasDB);
const db = mongoose.connection;

db.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send(
    "Welcome to TimePiece by Libin Geevarghese. Login to timepiece Web or Mobile App. visit iamlibin.in to connect with me"
  );
});

app.use("/api", apiRoutes); // Mount API routes under /api

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.   localhost:${PORT} `);
});
