const joi = require('joi');

const CardSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      numero: joi
        .string()
        .length(9)
        .required()
        .error(() => Error('Número do cartão inválido!')),
      card_hash: joi.string().required(),
    });

    await schema.validateAsync(req.body);
    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  CardSchema,
};
