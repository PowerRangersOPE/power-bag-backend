const Bag = require('../../models/Bag');
const { findCliente } = require('../cliente');
const { findProdutoWhere } = require('../produto');

const CreateBag = require('./createBagService');

const createBag = new CreateBag(Bag, findCliente, findProdutoWhere);

module.exports = {
  createBag,
};
