class findAllBags {
  constructor({ modelBag }) {
    this.bag = modelBag;
  }

  async execute() {
    try {
      const bags = await this.bag.findAll({
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
    } catch (error) {
      throw error;
    }
  }
}

module.exports = findAllBags;
