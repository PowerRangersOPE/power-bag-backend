const { Sequelize } = require('sequelize')
const dbConfig = require('../../config/database')

const Test = require('../models/Test')
const Cartao = require('../models/Cartao')
const Endereco = require('../models/Endereco')
const Perfil = require('../models/Perfil')

const connection = new Sequelize(dbConfig)

Test.init(connection)
Cartao.init(connection)
Endereco.init(connection)
Perfil.init(connection)

//Refatorar os inits

module.exports = connection