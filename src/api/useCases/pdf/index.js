const ejs = require('ejs');
const puppeteer = require('puppeteer');

const Bag = require('../../models/Bag');
const Cliente = require('../../models/Cliente');

const { findProdutoWhere } = require('../produto')();

const CreatePDF = require('./createPDF');
const TemplatePDF = require('./templatePDF');

module.exports = () => ({
  createPDF: new CreatePDF({ puppeteer }),
  templatePDF: new TemplatePDF({
    ejs,
    modelCliente: Cliente,
    modelBag: Bag,
    findProduto: findProdutoWhere,
  }),
});
