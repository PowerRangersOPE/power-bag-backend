const Cliente = require('../../models/Cliente');
const Bag = require('../../models/Bag');

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

module.exports = (modelCliente = Cliente) => ({
  findCliente: new FindCliente({ modelCliente }),
  findClienteByCPF: new FindClienteByCPF({ modelCliente }),
  findClienteByEmail: new FindClienteByEmail({ modelCliente }),
  verifyClienteByCPF: new VerifyClienteByCPF({ modelCliente }),
  verifyClienteByEmail: new VerifyClienteByEmail({ modelCliente }),
  findAllClientes: new FindAllClientes({ modelCliente }),
  createCliente: new CreateCliente({ modelCliente }),
  updateCliente: new UpdateCliente({ modelCliente }),
  deleteCliente: new DeleteCliente({ modelCliente }),
  validateClienteForBag: new ValidateClienteForBag({
    modelCliente,
    modelBag: Bag,
  }),
});
