const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const reportRoutes = require("./routes/reportRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection (clean version)
mongoose.connect("mongodb+srv://ankitakundliya:Anki1230@cluster0.mx9by2w.mongodb.net/reactprac");

app.use("/api", reportRoutes);

// Optional: simple report page
app.get("/report", (req, res) => {
  res.send("<h1>Coming Soon: Web Reports</h1>");
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
