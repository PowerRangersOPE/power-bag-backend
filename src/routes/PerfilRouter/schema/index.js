const joi = require('joi');

const PerfilSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      necessidade: joi.string().required(),
      genero: joi.string().required(),
      cor: joi.string().required(),
      tipo_estampa: joi.string().required(),
      tipo_tenis: joi.string().required(),
      tipo_estilo: joi.string().required(),
      tamanho_sapato: joi.string().required(),
      tamanho_calca: joi.string().required(),
      tamanho_camisa: joi.string().required(),
      estacao_ano: joi.string().required(),
      fx_etaria: joi.string().required(),
      observacoes: joi.string().allow('').optional(),
    });

    await schema.validateAsync(req.body);
    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  PerfilSchema,
};
