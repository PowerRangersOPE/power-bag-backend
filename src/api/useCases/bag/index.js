const Bag = require('../../models/Bag');
const ItensBag = require('../../models/ItensBag');

const { pagarme } = require('../../services')();

const { findCliente } = require('../cliente')();
const { findProdutoWhere } = require('../produto')();
const { createPDFUseCase } = require('../pdf')();
const { sendEmail } = require('../email')();

const CreateBag = require('./createBagUseCase');
const FindBag = require('./findBag');
const UpdateBag = require('./updateBag');
const FindAllBags = require('./findAllBags');

module.exports = (modelBag = Bag) => ({
  createBag: new CreateBag({
    modelBag,
    modelItensBag: ItensBag,
    findCliente,
    findProdutoWhere,
    createPDFUseCase,
    sendEmail,
    pagarme,
  }),
  findBag: new FindBag({ modelBag }),
  updateBag: new UpdateBag({ modelBag }),
  findAllBags: new FindAllBags({ modelBag }),
});
