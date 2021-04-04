class CreateClienteService {
  constructor(cliente) {
    this.cliente = cliente;
  }

  async execute(body) {
    const cliente = await this.cliente.create(body);

    if (!cliente) throw new Error();

    return cliente;
  }
}

module.exports = CreateClienteService;
