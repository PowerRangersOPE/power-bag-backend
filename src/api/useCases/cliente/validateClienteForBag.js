const { Op } = require('sequelize');

class validateClienteForBag {
  constructor({ modelCliente, modelBag }) {
    this.cliente = modelCliente;
    this.bag = modelBag;
  }

  async verifyClienteData({
    id,
    cpf,
    tel_cel1,
    dat_nasc,
    cartao,
    endereco,
    perfil,
  }) {
    const clienteData = [cpf, tel_cel1, dat_nasc, cartao, endereco, perfil];
    const removeNullClienteData = clienteData.filter(Boolean);

    if (clienteData.length !== removeNullClienteData.length) {
      return {
        available: false,
        reason: 'dados cadastrais',
      };
    }

    const findBag = await this.bag.findOne({
      where: {
        cliente_id: id,
        [Op.and]: [
          { status: { [Op.ne]: 'Finalizado' } },
          { status: { [Op.ne]: 'Cancelado' } },
          { status: { [Op.ne]: 'Compra total' } },
        ],
      },
    });

    if (findBag) {
      return {
        available: false,
        reason: 'solicitacao em aberto',
      };
    }

    return {
      available: true,
    };
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

    const { available, reason } = await this.verifyClienteData(
      foundClient.toJSON()
    );

    return { clienteID: id, available, reason };
  }
}

module.exports = validateClienteForBag;
