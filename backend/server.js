const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const User = require("./models/User");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "API Working",
  });
});

app.get("/create-user", async (req, res) => {
  try {
    const user = await User.create({
      name: "Pallavi",
      email: "pallavi@gmail.com",
      password: "123456",
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});