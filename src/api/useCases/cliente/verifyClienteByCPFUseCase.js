class verifyClientByCPFUseCase {
  constructor({ modelCliente }) {
    this.cliente = modelCliente;
  }

  async execute({ cpf }, res) {
    try {
      const foundClient = await this.cliente.findOne({ where: { cpf } });
      return foundClient;
      
    } catch (error) {
      throw error;
    }
  }
}

module.exports = verifyClientByCPFUseCase;
