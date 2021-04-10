const Bag = require('../../models/Bag');

const { findCliente } = require('../cliente')();
const { findProdutoWhereUseCase } = require('../produto');
const { createPDFUseCase } = require('../pdf');

const CreateBag = require('./createBagUseCase');

module.exports = (modelBag = Bag) => ({
  createBag: new CreateBag({
    modelBag,
    findCliente,
    findProdutoWhereUseCase,
    createPDFUseCase,
  }),
});
