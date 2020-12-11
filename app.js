const express = require('express');
const PORT = 3000;
const app = express();

const { validate } = require('./middleware');

app.use(express.json());
app.use((error, req, res, next) => {
  res.status(500).send(error);
});

app.get('/author', (req, res) => {
  validate.validateSignUp;
  res.send(req.body);
});

app.post('/signup', (req, res) => {
  validate.validateSignUp;
});

app.listen(PORT, () => {
  console.log('Server is running!');
});
