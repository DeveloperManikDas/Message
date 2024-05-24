const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML form using EJS template
app.get('/', (req, res) => {
  res.render('index');
});

// Handle form submission
app.post('/check-password', (req, res) => {
  const password = req.body.password;
  if (password === 'azra') {
    res.render('success');
  } else {
    res.send('Incorrect password. Please try again.');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
