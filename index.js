require('dotenv').config();
const express = require('express');

const app = express();


const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('abhishek jha');
});

app.get('/login', (req, res) => {
  res.send('<h1>login here for twitter</h1>');
});

app.get('/youtube', (req, res) => {
  res.send('<h2>welcome to youtube</h2>');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
