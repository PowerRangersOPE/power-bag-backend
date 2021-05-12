class findAllClienteUseCase {
  constructor({ modelCliente }) {
    this.cliente = modelCliente;
  }
  
  async execute() {
    const clientes = await this.cliente.findAll({
      include: [
        { association: 'cartao' },
        { association: 'endereco' },
        { association: 'perfil' },
      ],
      attributes: { exclude: ['senha', 'createdAt', 'updatedAt'] },
    });

    if (!clientes) throw new Error('Cliente not found');

    return clientes;
  }
}

module.exports = findAllClienteUseCase;
