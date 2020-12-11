const express = require('express');
const PORT = 3000;
const app = express();

const { validate } = require('./middleware');
const authorController = require('./controllers/author.controller');
const messageController = require('./controllers/message.controller');

app.use(express.json());
app.use((error, req, res, next) => {
  res.status(500).send(error);
});

app.get('/author', validate.validateSignUp, (req, res) => {
  res.send(req.body);
});

app.get('/authors', authorController.getAuthors);

//app.get('/authorid', authorController.getAuthorById);

app.post('/signup', authorController.signUpAuthor);

app.post('/message', messageController.createMessage);

app.listen(PORT, () => {
  console.log('Server is running!');
});
