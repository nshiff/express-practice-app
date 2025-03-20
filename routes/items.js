const express = require('express');
const router = express.Router();

// Sample data
const items = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
  { id: 3, name: "Item 3", description: "This is item 3" },
];

// Get all items
router.get('/', (req, res) => {
  res.json(items);
});

// Get item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  res.json(item);
});

// Create item
router.post('/', (req, res) => {
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

module.exports = router; 