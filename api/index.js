
const express = require('express');
const cors = require('cors');

const app = express();

// In-memory data store
let products = [
  { id: 1, name: 'Clothe', price: 8500, description: 'Tops, Jeans, Gowns, Shirts are all available' },
  { id: 2, name: 'Mobile phone', price: 5200},
];

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const { name, price, description } = req.body;

  // Validate required fields
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (!price) {
    return res.status(400).json({ error: 'Price is required' });
  }

  // Validate data types
  if (typeof name !== 'string') {
    return res.status(400).json({ error: 'Name must be a string' });
  }

  if (typeof price !== 'number') {
    return res.status(400).json({ error: 'Price must be a number' });
  }

  if (description && typeof description !== 'string') {
    return res.status(400).json({ error: 'Description must be a string' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = app;