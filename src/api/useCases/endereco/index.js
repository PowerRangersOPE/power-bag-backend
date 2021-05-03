const Endereco = require('../../models/Endereco');

const FindEnderecoCliente = require('./findEnderecoCliente');

module.exports = (modelEndereco = Endereco) => ({
  findEnderecoCliente: new FindEnderecoCliente({ modelEndereco }),
});
