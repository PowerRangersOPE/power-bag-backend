const Cliente = require('../../models/Cliente');

const FindCliente = require('./findClienteService');
const FindAllClientes = require('./findAllClienteService');
const CreateCliente = require('./createClienteService');
const UpdateCliente = require('./updateClienteService');
const DeleteCliente = require('./deleteClienteService');

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
