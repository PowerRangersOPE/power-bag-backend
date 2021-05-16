class findClienteUseCase {
  constructor({ modelCliente }) {
    this.cliente = modelCliente;
  }

  async execute(id) {
    const foundClient = await this.cliente.findByPk(id, {
      include: [
        { association: 'cartao' },
        { association: 'endereco' },
        { association: 'perfil' },
      ],
      attributes: { exclude: ['senha', 'createdAt', 'updatedAt'] },
    });

    if (!foundClient) throw new Error('Cliente not found');

    return foundClient;
  }
}

module.exports = findClienteUseCase;
