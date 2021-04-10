const { expect } = require('chai');
const objSinon = require('sinon');
const clientes = require('./mocks/clientes.json');

const modelCliente = {
  create: () => objSinon.spy(() => Promise.resolve(clientes[0])),
  update: objSinon.spy(() => Promise.resolve(clientes[0])),
  findAll: objSinon.spy(() => Promise.resolve(clientes)),
  findByPk: objSinon.spy(() => Promise.resolve([clientes])),
  destroy: objSinon.spy(() => Promise.resolve(clientes.slice(0, 1))),
};

const {
  findCliente,
  findAllClientes,
  createCliente,
  updateCliente,
  deleteCliente,
} = require('../../../api/useCases/cliente')(modelCliente);

describe('Cliente UseCase', () => {
  it('Should be return success for create all UseCases', async () => {
    expect(findCliente).to.be.an('object');
    expect(findAllClientes).to.be.an('object');
    expect(createCliente).to.be.an('object');
    expect(updateCliente).to.be.an('object');
    expect(deleteCliente).to.be.an('object');
  });
});
