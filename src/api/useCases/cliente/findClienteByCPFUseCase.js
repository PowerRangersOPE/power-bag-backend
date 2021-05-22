class findClienteByCPFUseCase {
  constructor({ modelCliente }) {
    this.cliente = modelCliente;
  }

  async execute({ cpf }) {
    try {
      const foundClient = await this.cliente.findOne({ where: { cpf } });

      if (!foundClient) throw new Error('Cliente not found');

      return foundClient;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = findClienteByCPFUseCase;
