// index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Express API!" });
});

// Sample API routes
const items = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
  { id: 3, name: "Item 3", description: "This is item 3" },
];

// Get all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Get item by ID
app.get("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
});

// Create item
app.post("/api/items", (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res
      .status(400)
      .json({ message: "Name and description are required" });
  }

  const newItem = {
    id: items.length + 1,
    name,
    description,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
