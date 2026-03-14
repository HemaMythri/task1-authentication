const authMiddleware = require("./middleware/authMiddleware");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/authDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Authentication API Running...");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
app.get("/api/dashboard", authMiddleware, (req, res) => {

  res.json({
    message: "Welcome to the protected dashboard!",
    user: req.user
  });

});