const messages = new Map();

module.exports.createMessage = (req, res) => {
  const { body } = req;
  const newMessage = { id: messages.size, ...body };

  messages.set(newMessage.id, newMessage);
  res.status(201).send(newMessage);
};
