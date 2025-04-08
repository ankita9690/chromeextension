const express = require("express");
const Report = require("../models/Report");
const router = express.Router();

router.post("/report", async (req, res) => {
  const { domain, seconds } = req.body;
  const report = new Report({ domain, seconds });
  await report.save();
  res.json({ message: "Logged" });
});

module.exports = router;
