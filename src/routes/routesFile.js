"use strict";
require("express");
const mongoose = require("mongoose");
const clearCache = require("../middlewares/clearCache"); // Clearing middleware

module.exports = app => {
  app.get("/", (req, res) => {
    res.send("Minimal Express setup with MongoDB supported by Redis");
  });
};
