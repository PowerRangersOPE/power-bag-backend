const Endereco = require('../../models/Endereco');

const FindEnderecoCliente = require('./findEnderecoCliente');
const CreateEndereco = require('./createEndereco');
const UpdateEndereco = require('./updateEndereco');

module.exports = (modelEndereco = Endereco) => ({
  findEnderecoCliente: new FindEnderecoCliente({ modelEndereco }),
  createEndereco: new CreateEndereco({ modelEndereco }),
  updateEndereco: new UpdateEndereco({ modelEndereco }),
});
