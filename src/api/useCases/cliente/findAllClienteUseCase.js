class findAllClienteUseCase {
  constructor({ modelCliente }) {
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
      attributes: { exclude: ['senha', 'id', 'createdAt', 'updatedAt'] },
    });

    if (!clientes) throw new Error('Cliente not found');

    return clientes;
  }
}

module.exports = findAllClienteUseCase;
