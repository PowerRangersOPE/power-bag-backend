const Cartao = require('./Cartao');
const Endereco = require('./Endereco');
const Perfil = require('./Perfil');
const Cliente = require('./Cliente');
const Bag = require('./Bag');
const Produto = require('./Produto');
const ItensBag = require('./ItensBag');
const Shop = require('./Shop');
const ShopStyles = require('./ShopStyles');

class Models {
  static init(sequelize) {
    const models = {
      Cartao: Cartao.init(sequelize),
      Endereco: Endereco.init(sequelize),
      Perfil: Perfil.init(sequelize),
      Cliente: Cliente.init(sequelize),
      Bag: Bag.init(sequelize),
      Produto: Produto.init(sequelize),
      ItensBag: ItensBag.init(sequelize),
      Shop: Shop.init(sequelize),
      ShopStyles: ShopStyles.init(sequelize),
    };

    Object.values(models)
      .filter((model) => typeof model.associate === 'function')
      .forEach((model) => model.associate(models));
  }
}

module.exports = Models;
