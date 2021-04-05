class FindAllClienteService {
  constructor(modelCliente) {
    this.cliente = modelCliente;
  }

  /**
   * Include associations with others tables
   * use the tables name
   */
  async execute() {
    const clientes = await this.cliente.findAll({
      include: [
        { association: 'cartao' },
        { association: 'endereco' },
        { association: 'perfil' },
      ],
    });

    if (!clientes) throw new Error('Cliente not found');

    return clientes;
  }
}

module.exports = FindAllClienteService;
