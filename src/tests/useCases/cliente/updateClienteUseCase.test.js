const { expect } = require('chai');
const objSinon = require('sinon');
const UpdateClienteUseCase = require('../../../api/useCases/cliente/updateClienteUseCase');
const clientes = require('./mocks/clientes.json');

let modelCliente = {};
let updateClienteUseCase;

describe('Update Cliente UseCase', () => {
  beforeEach(() => {
    modelCliente = {
      update: objSinon.spy(() => Promise.resolve(clientes)),
    };
  });

  it('Should be return success', async () => {
    updateClienteUseCase = new UpdateClienteUseCase(modelCliente);
    const [result] = await updateClienteUseCase.execute();
    expect(result).to.be.an('object');
    expect(result).to.have.property('endereco');
    expect(result).to.have.property('perfil');
    expect(result).to.have.property('cartao');
  });

  it('Should be return error', async () => {
    modelCliente.update = objSinon.spy(() => false);
    updateClienteUseCase = new UpdateClienteUseCase(modelCliente);
    try {
      await updateClienteUseCase.execute();
    } catch (error) {
      expect(error).to.be.have.property('message');
    }
  });
});
