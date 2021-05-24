const { when } = require('joi');
const joi = require('joi');

const createSchema = async (req, res, next) => {
  try {
    
    const schema = [joi.object({ 
      cpf: joi.number().integer().required(),
      cpf: joi.string().length(11).required(),
      email: joi.string().email(),
      senha: joi.string().min(3).alphanum(),
      nome: joi.string().required(),  
    })]
  
    req.body.cpf = req.body.cpf.replace(/[\W\s]/gi,'')
    await schema[0].validateAsync(req.body);
    

    return next();
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  createSchema,
};
