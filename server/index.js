const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const reportRoutes = require("./routes/reportRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ankitakundliya:Anki1230@cluster0.mx9by2w.mongodb.net/reactprac?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", reportRoutes);

app.get("/report", (req, res) => {
  res.send("<h1>Coming Soon: Web Reports</h1>");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
