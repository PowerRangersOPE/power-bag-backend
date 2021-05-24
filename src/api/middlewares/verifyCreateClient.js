const getClienteUseCase = require('../useCases/cliente');


const {verifyClienteByCPF, verifyClienteByEmail} = getClienteUseCase();

module.exports = async (req, res, next) => {    
    try {        
        const foundClientByEmail = await verifyClienteByEmail.execute(req.body);
        const foundClientByCPF = await verifyClienteByCPF.execute(req.body);
        
        if (foundClientByEmail && foundClientByCPF) {return res.status(400).json({ message: 'E-mail e CPF já cadastrados no sistema.'});}
          else if(foundClientByEmail) {return res.status(400).json({ message: 'E-mail já cadastrado no sistema.'});}
          else if(foundClientByCPF) {return res.status(400).json({ message: 'CPF já cadastrado no sistema.'})};
        next(); 
      }
      catch (error) {
        throw error;
      }      
  }