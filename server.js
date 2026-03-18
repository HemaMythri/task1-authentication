const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();   // ✅ FIRST create app

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});