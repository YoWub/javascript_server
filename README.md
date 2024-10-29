# Steps to Create a JavaScript Server

* Create a folder to hold your project  
`mkdir javascript_server`

* Step into folder
`cd javascript_server`

* Initialize a node project
`npm init -y`

* Install Express 
`npm install express`

* Create the main server file called 
`app.js`

* Add code to app.js, in order to:
 Import Express: Import the Express module.
`const express = require('express');
const app = express();`
Enable JSON parsing: Use express.json() middleware to parse incoming JSON data.
`app.use(express.json());`

Create routes: Define routes for your API endpoints using the Express router.

```
app.get('/users', (req, res) => {
  // Logic to fetch users from a database or data source
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];
  res.json(users);
});

app.post('/users', (req, res) => {
  // Logic to create a new user
  const newUser = req.body;
  // ... (save user to database)
  res.status(201).json(newUser);
});
```
Listen on a port: Start the server and listen on a specified port.
```
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

To run the server, run the following:
`node app.js`