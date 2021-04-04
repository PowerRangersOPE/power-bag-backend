class DeleteClienteService {
  constructor(cliente) {
    this.cliente = cliente;
  }

  async execute(id) {
    const cliente = await this.cliente.destroy({
      where: { id },
    });

    if (!cliente) throw new Error();

    return cliente;
  }
}

module.exports = DeleteClienteService;
