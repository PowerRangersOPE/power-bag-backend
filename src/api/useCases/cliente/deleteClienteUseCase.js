class deleteClienteUseCase {
  constructor(modelCliente) {
    this.cliente = modelCliente;
  }

  async execute(id) {
    const cliente = await this.cliente.destroy({
      where: { id },
    });

    if (!cliente) throw new Error();

    return cliente;
  }
}

module.exports = deleteClienteUseCase;
