const joi = require('joi');

const EnderecoSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      rua: joi.string().required(),
      numero: joi.string().required(),
      bairro: joi.string().required(),
      cidade: joi.string().required(),
      uf: joi
      .string()
      .length(2)
      .regex(/^[a-zA-Z]+$/)
      .required()
      .error(() => Error('UF inválido!')),
      cep: joi
        .string()
        .length(8)
        .regex(/^[0-9]+$/)
        .required()
        .error(() => Error('CEP inválido!')),
      complemento: joi.string().allow('').optional(),
      observacoes: joi.string().allow('').optional(),
    })

    req.body.cep = req.body.cep.replace(/[\W\s]/gi, '');

    await schema.validateAsync(req.body);
    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  EnderecoSchema,
};
