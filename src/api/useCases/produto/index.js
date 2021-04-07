const Produto = require('../../models/Produto');

const FindProdutoWhereUseCase = require('./findProdutoWhereUseCase');

const findProdutoWhereUseCase = new FindProdutoWhereUseCase(Produto);

module.exports = {
  findProdutoWhereUseCase,
};
