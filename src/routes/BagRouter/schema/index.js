const joi = require('joi');

const BagSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      id_bag: joi.string().guid().required(),
      status: joi.string().optional(),
      valor: joi
        .number()
        .positive()
        .allow(0)
        .optional()
        .error('Valor inválido!'),
      observacoes: joi.string().allow('').optional(),
    });

    await schema.validateAsync(req.body);
    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  BagSchema,
};
