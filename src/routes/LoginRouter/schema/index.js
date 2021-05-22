const joi = require('joi');

const createSessionSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      cpf: joi.number().integer().required(),
      cpf: joi.string().length(11).required(),
      senha: joi.string().alphanum().min(3).required()
    });

    req.body.cpf = req.body.cpf.replace(/[\W\s]/gi,'')
    await schema.validateAsync(req.body);

    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  createSessionSchema,
};
