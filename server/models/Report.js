const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  domain: String,
  timeSpent: Number
}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);
