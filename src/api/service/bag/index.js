const Bag = require('../../models/Bag');
const { findCliente } = require('../cliente');
const { findProdutoWhere } = require('../produto');
const { createPDF } = require('../pdf');

const CreateBag = require('./createBagService');

const createBag = new CreateBag(Bag, findCliente, findProdutoWhere, createPDF);

module.exports = {
  createBag,
};
