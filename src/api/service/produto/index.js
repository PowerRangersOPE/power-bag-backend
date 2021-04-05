const Produto = require('../../models/Produto');

const FindProdutoWhere = require('./findProdutoWhere');

const findProdutoWhere = new FindProdutoWhere(Produto);

module.exports = {
  findProdutoWhere,
};
