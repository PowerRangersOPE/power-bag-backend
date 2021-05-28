class updateClienteUseCase {
  constructor({ modelCliente }) {
    this.cliente = modelCliente;
  }

  async execute(id, body) {
    try {
      const cliente = await this.cliente.update(body, {
        where: { id },
        returning: false,
      });

      if (!cliente) throw new Error();

      return cliente;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = updateClienteUseCase;
