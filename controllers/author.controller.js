const authors = new Map().set('author1@test.com', {
  id: 0,
  firstName: 'Test',
  lastName: 'Testovich',
  email: 'author1@test.com',
  message: 'This is first test message',
  date: '2020-11-12',
});

module.exports.signUpAuthor = (req, res) => {
  const { body } = req;
  if (authors.has(body.email)) {
    res.status(409).send('Author with such email already exists');
  } else {
    const newAuthor = {
      id: authors.size,
      ...body,
    };

    authors.set(newAuthor.email, newAuthor);
    res.status(201).send(newAuthor);
  }
};
