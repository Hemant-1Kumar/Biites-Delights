const mongoose = require("mongoose");

const mangoSchema = new mongoose.Schema({
  name: String,
  phone: String,
  location: String,
  quantity: String,
  message: String
}, { timestamps: true });

module.exports = mongoose.model("Mango", mangoSchema);