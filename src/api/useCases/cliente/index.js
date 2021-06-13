const Cliente = require('../../models/Cliente');
const Endereco = require('../../models/Endereco');
const Cartao = require('../../models/Cartao');
const Bag = require('../../models/Bag');
const Perfil = require('../../models/Perfil');

const FindCliente = require('./findClienteUseCase');
const FindClienteByCPF = require('./findClienteByCPFUseCase');
const FindClienteByEmail = require('./findClienteByEmailUseCase');
const VerifyClienteByCPF = require('./verifyClienteByCPFUseCase');
const VerifyClienteByEmail = require('./verifyClienteByEmailUseCase');
const FindAllClientes = require('./findAllClienteUseCase');
const CreateCliente = require('./createClienteUseCase');
const UpdateCliente = require('./updateClienteUseCase');
const DeleteCliente = require('./deleteClienteUseCase');
const ValidateClienteForBag = require('./validateClienteForBag');

module.exports = (
  modelCliente = Cliente,
  modelPerfil = Perfil,
  modelEndereco = Endereco,
  modelCartao = Cartao
) => ({
  findCliente: new FindCliente({ modelCliente }),
  findClienteByCPF: new FindClienteByCPF({ modelCliente }),
  findClienteByEmail: new FindClienteByEmail({ modelCliente }),
  verifyClienteByCPF: new VerifyClienteByCPF({ modelCliente }),
  verifyClienteByEmail: new VerifyClienteByEmail({ modelCliente }),
  findAllClientes: new FindAllClientes({ modelCliente }),
  createCliente: new CreateCliente({ modelCliente }),
  updateCliente: new UpdateCliente({ modelCliente }),
  deleteCliente: new DeleteCliente({
    modelCliente,
    modelPerfil,
    modelEndereco,
    modelCartao,
  }),
  validateClienteForBag: new ValidateClienteForBag({
    modelCliente,
    modelBag: Bag,
  }),
});
