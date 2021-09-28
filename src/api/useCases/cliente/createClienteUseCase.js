class createClienteUseCase {
  constructor({ modelCliente }) {
    this.cliente = modelCliente;
  }

  async execute(body) {
    try {
      const bodyWithStatus = { ...body, status: true };
      const cliente = await this.cliente.create(bodyWithStatus);

      if (!cliente) throw new Error('Create cliente got error');

      return { Created: true, clienteID: cliente.id };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = createClienteUseCase;
