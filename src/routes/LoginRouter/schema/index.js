const joi = require('joi');

const createSessionSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      email: joi.string().email().required(),
      senha: joi.string().alphanum().min(3).required(),
    });

    await schema.validateAsync(req.body);

    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  createSessionSchema,
};