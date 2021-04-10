const { expect } = require('chai');
const objSinon = require('sinon');
const CreateClienteUseCase = require('../../../api/useCases/cliente/createClienteUseCase');

const newCliente = {
  id: 'bf9f7a80-b2cc-4159-937e-f1fa3eda17ef',
  nome: 'Teste 1',
  email: 'teste@gmail.com',
  cpf: '1111111111111',
  identificacao: 'Ygu',
  tel_cel1: '011955557777',
  tel_cel2: '1144321121',
  dat_nasc: '09/07/1995',
  status: 'ativo',
  pontuacao: '0',
  updatedAt: '2021-04-04T23:20:58.254Z',
  createdAt: '2021-04-04T23:20:58.254Z',
};

let modelCliente = {};
let createClienteUseCase;

describe('Create Cliente UseCase', () => {
  beforeEach(() => {
    modelCliente = {
      create: objSinon.spy(() => Promise.resolve(newCliente)),
    };
  });

  it('Should be return a new cliente', async () => {
    createClienteUseCase = new CreateClienteUseCase({ modelCliente });
    const body = {
      nome: 'Ygor Mattos',
      email: 'ygormattos@gmail.com',
      cpf: '1579082717',
      identificacao: 'Ygu',
      tel_cel1: '011955557777',
      tel_cel2: '1144321121',
      dat_nasc: '12/10/1995',
      status: 'ativo',
      pontuacao: 0,
    };
    const result = await createClienteUseCase.execute(body);
    expect(result).to.be.an('object');
    expect(result).to.have.property('id');
    expect(result).to.have.property('createdAt');
    expect(result).to.have.property('updatedAt');
  });

  it('Should be throw an error ', async () => {
    modelCliente.create = objSinon.spy(() => false);
    createClienteUseCase = new CreateClienteUseCase({ modelCliente });

    try {
      await createClienteUseCase.execute();
    } catch (error) {
      expect(error).to.be.have.property('message');
      expect(error.message).to.be.equals('Create cliente got error');
    }
  });
});
