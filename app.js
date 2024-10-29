const express = require('express');
const app = express();

app.use(express.json());

// Example data (replace with database interaction later)
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});