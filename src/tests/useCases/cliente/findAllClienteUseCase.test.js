const { expect } = require('chai');
const objSinon = require('sinon');
const FindAllClienteUseCase = require('../../../api/useCases/cliente/findAllClienteUseCase');
const clientes = require('./mocks/clientes.json');

let modelCliente = {};
let findAllClienteUseCase;

describe('Find all Clientes UseCase', () => {
  beforeEach(() => {
    modelCliente = {
      findAll: objSinon.spy(() => Promise.resolve(clientes)),
    };
  });

  it('Should be return success', async () => {
    findAllClienteUseCase = new FindAllClienteUseCase(modelCliente);
    const result = await findAllClienteUseCase.execute();
    expect(result).to.be.an('array');
    expect(result[0]).to.have.property('endereco');
    expect(result[0]).to.have.property('perfil');
    expect(result[0]).to.have.property('cartao');
  });

  it('Should be return error', async () => {
    modelCliente.findAll = objSinon.spy(() => false);
    findAllClienteUseCase = new FindAllClienteUseCase(modelCliente);
    try {
      await findAllClienteUseCase.execute();
    } catch (error) {
      expect(error).to.be.have.property('message');
    }
  });
});
