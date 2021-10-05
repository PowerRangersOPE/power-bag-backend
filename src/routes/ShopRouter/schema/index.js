const joi = require('joi');

const createShopSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      name: joi
        .string()
        .required()
        .error(() => Error('Name obrigatório')),
    });

    await schema.validateAsync(req.body);

    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  createShopSchema,
};
