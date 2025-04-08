// const mongoose = require("mongoose");

// const reportSchema = new mongoose.Schema({
//   domain: String,
//   seconds: Number,
//   timestamp: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model("Report", reportSchema);
const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  domain: String,
  timeSpent: Number
}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);
