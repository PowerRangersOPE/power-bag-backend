class validateClienteForBag {
    constructor({ modelCliente }) {
      this.cliente = modelCliente;
    }

    verifyClienteData({ cartao, endereco, perfil }) {

        const cartao_flag = (process.env.CARTAO_FLAG == 'true');

        if(cartao_flag) {
            if (!cartao || !endereco || !perfil) return false
        }

        if (!endereco || !perfil) return false

        return true
    }
  
    async execute(id) {
      const foundClient = await this.cliente.findByPk(id, {
        include: [
          { association: 'cartao' },
          { association: 'endereco' },
          { association: 'perfil' },
        ],
        attributes: { exclude: ['senha', 'id', 'createdAt', 'updatedAt'] },
      });
  
      if (!foundClient) throw new Error('Cliente not found');

      const validate = this.verifyClienteData(foundClient);
  
      return { clienteID: id,  available: validate };
    }
  }
  
  module.exports = validateClienteForBag;
  