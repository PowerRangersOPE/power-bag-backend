const Bag = require('../../models/Bag');
const ItensBag = require('../../models/ItensBag');

const { findCliente } = require('../cliente')();
const { findProdutoWhere } = require('../produto')();
const { createPDFUseCase } = require('../pdf')();
const { sendEmail } = require('../email')();

const CreateBag = require('./createBagUseCase');
const FindBag = require('./findBag');

module.exports = (modelBag = Bag) => ({
  createBag: new CreateBag({
    modelBag,
    modelItensBag: ItensBag,
    findCliente,
    findProdutoWhere,
    createPDFUseCase,
    sendEmail,
  }),
  findBag : new FindBag({ modelBag }),
});
