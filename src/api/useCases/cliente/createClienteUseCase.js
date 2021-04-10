class createClienteUseCase {
  constructor({ modelCliente }) {
    this.cliente = modelCliente;
  }

  async execute(body) {
    try {
      const cliente = await this.cliente.create(body);

      if (!cliente) throw new Error('Create cliente got error');

      return cliente;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = createClienteUseCase;
