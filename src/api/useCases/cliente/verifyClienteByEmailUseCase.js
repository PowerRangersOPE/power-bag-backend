class verifyClientByEmailUseCase {
    constructor({ modelCliente }) {
      this.cliente = modelCliente;
    }
  
    async execute({ email }) {
      try {
        const foundClient = await this.cliente.findOne({ where: { email } });
        return foundClient;
        
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = verifyClientByEmailUseCase;