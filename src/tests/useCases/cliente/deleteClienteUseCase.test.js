const { expect } = require('chai');
const objSinon = require('sinon');
const DeleteClienteUseCase = require('../../../api/useCases/cliente/deleteClienteUseCase');
const clientes = require('./mocks/clientes.json');

let modelCliente = {};
let deleteClienteUseCase;

describe('Delete Cliente UseCase', () => {
  beforeEach(() => {
    modelCliente = {
      destroy: objSinon.spy(() => Promise.resolve(clientes.slice(0, 1))),
    };
  });

  it('Should be return success', async () => {
    deleteClienteUseCase = new DeleteClienteUseCase({ modelCliente });
    const result = await deleteClienteUseCase.execute();
    expect(result).to.be.an('array');
    expect(result.length).to.be.equal(1);
  });

  it('Should be return error', async () => {
    modelCliente.destroy = objSinon.spy(() => false);
    deleteClienteUseCase = new DeleteClienteUseCase({ modelCliente });
    try {
      await deleteClienteUseCase.execute();
    } catch (error) {
      expect(error).to.be.have.property('message');
    }
  });
});
