class updateClienteUseCase {
  constructor({ modelCliente }) {
    this.cliente = modelCliente;
  }

  async execute(id, body) {
    const cliente = await this.cliente.update(body, {
      where: { id },
      returning: true,
    });

    if (!cliente) throw new Error();

    return cliente;
  }
}

module.exports = updateClienteUseCase;
