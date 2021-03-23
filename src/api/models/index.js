const Cartao = require("./Cartao");
const Endereco = require("./Endereco");
const Perfil = require("./Perfil");
const Cliente = require("./Cliente");
const Bag = require("./Bag");
const Produto = require("./Produto");
const ItensBag = require("./ItensBag");

class Models {
    static init(sequelize) {
        Cartao.init(sequelize);
        Endereco.init(sequelize);
        Perfil.init(sequelize);
        Cliente.init(sequelize);
        Bag.init(sequelize);
        Produto.init(sequelize);
        ItensBag.init(sequelize);
    }
}

module.exports = Models