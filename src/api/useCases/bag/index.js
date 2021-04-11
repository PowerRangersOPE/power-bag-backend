const Bag = require('../../models/Bag');

const { findCliente } = require('../cliente')();
const { findProdutoWhere } = require('../produto')();
const { createPDFUseCase } = require('../pdf')();
const { sendEmail } = require('../email')();

const CreateBag = require('./createBagUseCase');

module.exports = (modelBag = Bag) => ({
  createBag: new CreateBag({
    modelBag,
    findCliente,
    findProdutoWhere,
    createPDFUseCase,
    sendEmail,
  }),
});
