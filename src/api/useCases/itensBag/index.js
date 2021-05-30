const ejs = require('ejs');

const Bag = require('../../models/Bag');
const Cliente = require('../../models/Cliente');

const { findProdutoWhere } = require('../produto')();

const TemplatePDF = require('./listItensBag');

module.exports = () => ({
  listItensBag: new TemplatePDF({
    ejs,
    modelCliente: Cliente,
    modelBag: Bag,
    findProduto: findProdutoWhere,
  }),
});
