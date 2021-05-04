const Bag = require('../../models/Bag');

const { findCliente } = require('../cliente')();
const { findProdutoWhere } = require('../produto')();
const { createPDFUseCase } = require('../pdf')();
const { sendEmail } = require('../email')();

const CreateBag = require('./createBagUseCase');
const FindBag = require('./findBag');

module.exports = (modelBag = Bag) => ({
  createBag: new CreateBag({
    modelBag,
    findCliente,
    findProdutoWhere,
    createPDFUseCase,
    sendEmail,
  }),
  findBag : new FindBag({ modelBag }),
});
