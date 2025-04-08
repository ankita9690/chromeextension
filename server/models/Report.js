const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  domain: String,
  seconds: Number,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Report", reportSchema);
