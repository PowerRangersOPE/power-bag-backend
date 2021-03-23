const { Sequelize } = require("sequelize");
const dbConfig = require("../../config/database");
const models = require('../models');

const connection = new Sequelize(dbConfig);

models.init(connection)

module.exports = connection;
