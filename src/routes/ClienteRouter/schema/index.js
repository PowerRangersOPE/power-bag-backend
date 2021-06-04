const joi = require('joi');

const createSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      cpf: joi
        .string()
        .length(11)
        .regex(/^[0-9]+$/)
        .required()
        .error(() => Error('CPF inválido!')),
      senha: joi.string().min(5).required(),
      nome: joi.string().required(),
      adm: joi.boolean().optional(),
    });

    req.body.cpf = req.body.cpf.replace(/[\W\s]/gi, '');
    await schema.validateAsync(req.body);

    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

const createUpdateSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      email: joi.string().email().optional(),
      identificacao: joi.string().optional(),
      pontuacao: joi.string().optional(),
      status: joi.string().optional(),
      dat_nasc: joi.string().optional(),
      tel_cel1: joi.string().min(10).max(11).required(),
      tel_cel2: joi.string().min(10).max(11).required(),
    });

    req.body.tel_cel1 = req.body.tel_cel1
      ? req.body.tel_cel1.replace(/[\W\s]/gi, '')
      : null;
    req.body.tel_cel2 = req.body.tel_cel2
      ? req.body.tel_cel2.replace(/[\W\s]/gi, '')
      : null;
    await schema.validateAsync(req.body);

    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  createSchema,
  createUpdateSchema,
};
