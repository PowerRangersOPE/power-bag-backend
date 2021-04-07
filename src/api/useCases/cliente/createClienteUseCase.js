class createClienteUseCase {
  constructor(modelCliente) {
    this.cliente = modelCliente;
  }

  async execute(body) {
    const cliente = await this.cliente.create(body);

    if (!cliente) throw new Error();

    return cliente;
  }
}

module.exports = createClienteUseCase;
