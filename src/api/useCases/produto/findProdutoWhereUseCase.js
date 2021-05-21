const { Op } = require('sequelize');

class findProdutoWhereUseCase {
  constructor({ modelProduto }) {
    this.produto = modelProduto;
  }

  async execute(requiredConditionals, optionalConditionals) {
    try {
      const produtos = await this.produto.findAll({
        raw: true,
        where: {
          [Op.and]: requiredConditionals,
          [Op.or]: optionalConditionals,
        },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });

      if (!produtos) throw new Error('Produtos not found');

      const totalValue = produtos.reduce(
        (acc, cur) => acc + parseFloat(cur.valor),
        0
      );

      return { produtos, totalValueProdutos: Number(totalValue.toFixed(2)) };
    } catch (error) {
      return error;
    }
  }
}

module.exports = findProdutoWhereUseCase;
