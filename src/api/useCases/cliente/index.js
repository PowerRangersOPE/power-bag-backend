const Cliente = require('../../models/Cliente');
const Bag = require('../../models/Bag');

const FindCliente = require('./findClienteUseCase');
const FindClienteByEmail = require('./findClienteByEmailUseCase');
const FindAllClientes = require('./findAllClienteUseCase');
const CreateCliente = require('./createClienteUseCase');
const UpdateCliente = require('./updateClienteUseCase');
const DeleteCliente = require('./deleteClienteUseCase');
const ValidateClienteForBag = require('./validateClienteForBag');

module.exports = (modelCliente = Cliente) => ({
  findCliente: new FindCliente({ modelCliente }),
  FindClienteByEmail: new FindClienteByEmail({ modelCliente }),
  findAllClientes: new FindAllClientes({ modelCliente }),
  createCliente: new CreateCliente({ modelCliente }),
  updateCliente: new UpdateCliente({ modelCliente }),
  deleteCliente: new DeleteCliente({ modelCliente }),
  validateClienteForBag: new ValidateClienteForBag({
    modelCliente,
    modelBag: Bag,
  }),
});
