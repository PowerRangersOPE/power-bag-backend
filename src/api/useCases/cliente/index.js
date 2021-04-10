const Cliente = require('../../models/Cliente');

const FindCliente = require('./findClienteUseCase');
const FindAllClientes = require('./findAllClienteUseCase');
const CreateCliente = require('./createClienteUseCase');
const UpdateCliente = require('./updateClienteUseCase');
const DeleteCliente = require('./deleteClienteUseCase');

module.exports = (modelCliente = Cliente) => ({
  findCliente: new FindCliente({ modelCliente }),
  findAllClientes: new FindAllClientes({ modelCliente }),
  createCliente: new CreateCliente({ modelCliente }),
  updateCliente: new UpdateCliente({ modelCliente }),
  deleteCliente: new DeleteCliente({ modelCliente }),
});
