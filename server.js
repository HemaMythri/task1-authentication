const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

const app = express();

// ✅ Middleware (VERY IMPORTANT — before routes)
app.use(cors());
app.use(express.json());
app.use("/api/cart", cartRoutes);

// ✅ MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/authDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/products", productRoutes);

// ✅ Default route (optional)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});