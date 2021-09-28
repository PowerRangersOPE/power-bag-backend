class deleteClienteUseCase {
  constructor({ modelCliente, modelPerfil, modelEndereco, modelCartao }) {
    this.cliente = modelCliente;
    this.clientePerfil = modelPerfil;
    this.clienteEndereco = modelEndereco;
    this.clienteCartao = modelCartao;
  }

  async execute(id, body) {
    try {
      const clienteEndereco = await this.clienteEndereco.truncate(body, {
        where: { cliente_id: id },
        returning: false,
      });
      if (clienteEndereco) throw new Error();

      const clienteCartao = await this.clienteCartao.truncate(body, {
        where: { cliente_id: id },
        returning: false,
      });
      if (clienteCartao) throw new Error();

      const clientePerfil = await this.clientePerfil.truncate(body, {
        where: { cliente_id: id },
        returning: false,
      });
      if (clientePerfil) throw new Error();

      const cliente = await this.cliente.update(body, {
        where: { id },
        returning: false,
      });

      if (!cliente) throw new Error();

      return cliente;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = deleteClienteUseCase;
