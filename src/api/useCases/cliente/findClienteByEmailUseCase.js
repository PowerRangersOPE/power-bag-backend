class findClienteByEmailUseCase {
  constructor({ modelCliente }) {
    this.cliente = modelCliente;
  }

  async execute({ email }) {
    try {
      const foundClient = await this.cliente.findOne({ where: { email } });

      if (!foundClient) throw new Error('Cliente not found');

      return foundClient;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = findClienteByEmailUseCase;
