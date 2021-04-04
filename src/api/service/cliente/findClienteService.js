class FindClienteService {
  constructor(cliente) {
    this.cliente = cliente;
  }

  async execute(id) {
    const foundClient = await this.cliente.findByPk(id);

    if (!foundClient) throw new Error('Cliente not found');

    return foundClient;
  }
}

module.exports = FindClienteService;
