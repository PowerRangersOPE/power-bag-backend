const joi = require('joi');

const BagSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      id_bag: joi.string().guid(),
      cliente: joi.string().guid(),
      status: joi.string().required(),
      valor: joi.number().positive().allow(0).required().error(() => Error('Valor inválido!')),
      observacoes: joi.string().allow('').required(),
      produtos_pdf: joi.string().allow('').optional()
    }).xor('cliente', 'id_bag');

    await schema.validateAsync(req.body);
    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  BagSchema,
};
