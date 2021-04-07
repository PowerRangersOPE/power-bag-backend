const Cliente = require('../../models/Cliente');

const FindCliente = require('./findClienteUseCase');
const FindAllClientes = require('./findAllClienteUseCase');
const CreateCliente = require('./createClienteUseCase');
const UpdateCliente = require('./updateClienteUseCase');
const DeleteCliente = require('./deleteClienteUseCase');

const findCliente = new FindCliente(Cliente);
const findAllClientes = new FindAllClientes(Cliente);
const createCliente = new CreateCliente(Cliente);
const updateCliente = new UpdateCliente(Cliente);
const deleteCliente = new DeleteCliente(Cliente);

module.exports = {
  findCliente,
  findAllClientes,
  createCliente,
  updateCliente,
  deleteCliente,
};
