const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Example API endpoint
app.get('/api/accommodations', (req, res) => {
  const accommodations = [
    { id: 1, name: 'Beach Resort', price: 100, location: 'Goa' },
    { id: 2, name: 'Mountain Inn', price: 80, location: 'Manali' },
  ];
  res.json(accommodations);
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
