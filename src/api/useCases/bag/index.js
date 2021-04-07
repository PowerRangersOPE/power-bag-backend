const Bag = require('../../models/Bag');
const { findCliente } = require('../cliente');
const { findProdutoWhereUseCase } = require('../produto');
const { createPDFUseCase } = require('../pdf');

const CreateBag = require('./createBagUseCase');

const createBag = new CreateBag(Bag, findCliente, findProdutoWhereUseCase, createPDFUseCase);

module.exports = {
  createBag,
};
