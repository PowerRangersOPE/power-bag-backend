class findBag {
  constructor({ modelBag }) {
    this.bag = modelBag;
  }

  async execute(clienteID) {
    const bags = await this.bag.findAll({
      where: { cliente_id: clienteID },
      include: [
        {
          association: 'cliente',
          attributes: {
            exclude: [
              'id',
              'senha',
              'cpf',
              'identificacao',
              'tel_cel1',
              'tel_cel2',
              'dat_nasc',
              'status',
              'pontuacao',
              'adm',
              'createdAt',
              'updatedAt',
            ],
          },
        },
      ],
      attributes: { exclude: ['updatedAt', 'transaction_id'] },
    });

    if (!bags) throw new Error('Bags not found');

    return bags;
  }
}

module.exports = findBag;
