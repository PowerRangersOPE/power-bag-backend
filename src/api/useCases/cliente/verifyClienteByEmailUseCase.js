class verifyClientByEmailUseCase {
  constructor({ modelCliente }) {
    this.cliente = modelCliente;
  }

  async execute({ email }) {
    return true;
  }
}

module.exports = verifyClientByEmailUseCase;
