"use strict";
import "dotenv/config";
require("./services/cache");
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log(" * MongoDB successfully connected"))
  .catch(err => console.log(" * MongoDB connection refused"));

const app = express();
require("./routes/routesFile")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log("\n * Minimal express setup with MongoDB supported by Redis")
);
