const { Sequelize } = require("sequelize");
const dbConfig = require("../../config/database");

const Test = require("../models/Test");
const Cartao = require("../models/Cartao");
const Endereco = require("../models/Endereco");
const Perfil = require("../models/Perfil");
const Cliente = require("../models/Cliente");
const Bag = require("../models/Bag");
const Produto = require("../models/Produto");
const ItensBag = require("../models/ItensBag");

const connection = new Sequelize(dbConfig);

Test.init(connection);
Cartao.init(connection);
Endereco.init(connection);
Perfil.init(connection);
Cliente.init(connection);
Bag.init(connection);
Produto.init(connection);
ItensBag.init(connection);

//Refatorar os inits

module.exports = connection;
