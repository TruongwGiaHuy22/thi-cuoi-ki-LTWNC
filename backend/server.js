// Simple Express backend starter
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// TODO: Add routes, controllers, models as needed

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
