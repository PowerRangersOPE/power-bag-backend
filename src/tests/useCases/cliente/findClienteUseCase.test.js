const { expect } = require('chai');
const objSinon = require('sinon');
const FindClienteUseCase = require('../../../api/useCases/cliente/findClienteUseCase');
const clientes = require('./mocks/clientes.json');

let modelCliente = {};
let findClienteUseCase;

describe('Find Cliente UseCase', () => {
  beforeEach(() => {
    modelCliente = {
      findByPk: objSinon.spy(() => Promise.resolve(clientes)),
    };
  });

  it('Should be return success', async () => {
    findClienteUseCase = new FindClienteUseCase({ modelCliente });
    const [result] = await findClienteUseCase.execute();
    expect(result).to.be.an('object');
    expect(result).to.have.property('endereco');
    expect(result).to.have.property('perfil');
    expect(result).to.have.property('cartao');
  });

  it('Should be return error', async () => {
    modelCliente.findByPk = objSinon.spy(() => false);
    findClienteUseCase = new FindClienteUseCase({ modelCliente });
    try {
      await findClienteUseCase.execute();
    } catch (error) {
      expect(error).to.be.have.property('message');
    }
  });
});
