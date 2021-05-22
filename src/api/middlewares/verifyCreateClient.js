const getClienteUseCase = require('../useCases/cliente');


const {verifyClienteByCPF} = getClienteUseCase();

module.exports = async (req, res, next) => {    
    try {        
        const foundClient = await verifyClienteByCPF.execute(req.body);
        if (foundClient) {return res.status(400).json({ message: 'CPF Cadastrado já cadastrado no sistema.'})};
        next();
      }
      catch (error) {
        throw error;
      }      
  }