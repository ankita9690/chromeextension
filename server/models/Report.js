// const mongoose = require("mongoose");

// const reportSchema = new mongoose.Schema({
//   domain: String,
//   timeSpent: Number
// }, { timestamps: true });

// module.exports = mongoose.model("Report", reportSchema);
const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  domain: { type: String, required: true },
  timeSpent: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);
