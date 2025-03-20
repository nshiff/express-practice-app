// index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const itemsRouter = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Express API!" });
});

// Use items routes
app.use('/api/items', itemsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
