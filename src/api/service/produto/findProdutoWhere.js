const { Op } = require('sequelize');

class FindProdutoWhere {
  constructor(modelProduto) {
    this.produto = modelProduto;
  }

  async execute(requiredConditionals, optionalConditionals) {
    try {
      const produtos = await this.produto.findAll({
        where: {
          [Op.and]: requiredConditionals,
          [Op.or]: optionalConditionals,
        },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });

      if (!produtos) throw new Error('Produtos not found');

      return produtos;
    } catch (error) {
      return error;
    }
  }
}

module.exports = FindProdutoWhere;
