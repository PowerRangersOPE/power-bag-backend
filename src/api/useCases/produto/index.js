const Produto = require('../../models/Produto');

const FindProdutoWhereUseCase = require('./findProdutoWhereUseCase');

module.exports = (modelProduto = Produto) => ({
  findProdutoWhere: new FindProdutoWhereUseCase({ modelProduto }),
});
