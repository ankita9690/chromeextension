// const express = require("express");
// const Report = require("../models/Report");
// const router = express.Router();

// router.post("/report", async (req, res) => {
//   const { domain, seconds } = req.body;
//   const report = new Report({ domain, seconds });
//   await report.save();
//   res.json({ message: "Logged" });
// });

// module.exports = router;
const express = require("express");
const Report = require("../models/Report");

const router = express.Router();

// POST - Save report
router.post("/report", async (req, res) => {
  const { domain, timeSpent } = req.body;

  try {
    const report = new Report({ domain, timeSpent });
    await report.save();
    res.status(201).json({ message: "Report saved", report });
  } catch (err) {
    res.status(500).json({ error: "Failed to save report", details: err.message });
  }
});

// GET - Display all reports in HTML
router.get("/report", async (req, res) => {
  try {
    const reports = await Report.find().sort({ updatedAt: -1 });

    const html = `
      <html>
        <head>
          <title>Productivity Report</title>
          <style>
            body { font-family: Arial; padding: 20px; }
            h1 { font-size: 26px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ccc; padding: 10px; text-align: left; }
            th { background: #f4f4f4; }
          </style>
        </head>
        <body>
          <h1>🕒 Productivity Report</h1>
          <table>
            <tr>
              <th>Domain</th>
              <th>Time Spent (sec)</th>
              <th>Last Updated</th>
            </tr>
            ${reports.map(r => `
              <tr>
                <td>${r.domain}</td>
                <td>${r.timeSpent}</td>
                <td>${new Date(r.updatedAt).toLocaleString()}</td>
              </tr>
            `).join("")}
          </table>
        </body>
      </html>
    `;

    res.send(html);
  } catch (err) {
    res.status(500).send("Error loading reports.");
  }
});

module.exports = router;
