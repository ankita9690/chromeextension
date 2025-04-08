const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const reportRoutes = require("./routes/reportRoutes");
const Report = require("./models/Report");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://ankitakundliya:Anki1230@cluster0.mx9by2w.mongodb.net/reactprac?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// API Routes
app.use("/api", reportRoutes);

// HTML Report Page
app.get("/report", async (req, res) => {
  try {
    const data = await Report.find().sort({ updatedAt: -1 }).limit(20);

    const html = `
      <html>
        <head>
          <title>Productivity Report</title>
          <style>
            body { font-family: Arial; padding: 2rem; }
            h1 { color: #333; }
            table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
            th, td { padding: 0.5rem; border: 1px solid #ccc; text-align: left; }
            th { background: #f4f4f4; }
          </style>
        </head>
        <body>
          <h1>🕒 Productivity Report</h1>
          <table>
            <tr><th>Domain</th><th>Time Spent (sec)</th><th>Last Updated</th></tr>
            ${data.map(entry => `
              <tr>
                <td>${entry.domain}</td>
                <td>${entry.timeSpent}</td>
                <td>${new Date(entry.updatedAt).toLocaleString()}</td>
              </tr>
            `).join("")}
          </table>
        </body>
      </html>
    `;
    res.send(html);
  } catch (error) {
    console.error("Error loading report:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
