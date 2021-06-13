const joi = require('joi');

const createSessionSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      cpf: joi
        .string()
        .length(11)
        .regex(/^[0-9]+$/)
        .required()
        .error(() => Error('CPF inválido!')),
      senha: joi.string().min(5).required(),
    });

    req.body.cpf = req.body.cpf.replace(/[\W\s]/gi, '');
    await schema.validateAsync(req.body);

    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  createSessionSchema,
};
