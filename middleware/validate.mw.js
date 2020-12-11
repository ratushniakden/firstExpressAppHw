const yup = require('yup');

module.exports.validateSignUp = async (req, res, next) => {
  const { body } = req;

  const validationSchema = yup.object({
    firstName: yup.string().trim().min(1).max(64).required(),
    lastName: yup.string().trim().min(1).max(64).required(),
    email: yup.string().email().required(),
    message: yup.string().min(10).max(500).required(),
  });

  try {
    req.body = await validationSchema.validate(body);
    next();
  } catch (error) {
    //res.status(401).send('Validate error');
    next(error);
  }
};
