const joi = require('joi');

const createShopSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      cnpj: joi
        .string()
        .length(14)
        .regex(/^[0-9]+$/)
        .required()
        .error(() => Error('CNPJ inválido!')),
    });

    req.body.cnpj = req.body.cnpj.replace(/[\W\s]/gi, '');
    await schema.validateAsync(req.body);

    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  createShopSchema,
};
