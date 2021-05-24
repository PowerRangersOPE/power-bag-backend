const joi = require('joi');

const createSessionSchema = async (req, res, next) => {
  try {
    const schema = joi.object({
      //cpf: joi.number().integer().required(), -- joi for CPF
      //cpf: joi.string().length(11).required(),-- joi for CPF 
      email: joi.string().email(),
      senha: joi.string().alphanum().min(3).required()
    });

    //req.body.cpf = req.body.cpf.replace(/[\W\s]/gi,'') -- Regex for remove special characters
    await schema.validateAsync(req.body);

    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  createSessionSchema,
};
