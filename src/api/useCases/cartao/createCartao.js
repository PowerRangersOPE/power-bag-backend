class createCartao {
    constructor({ modelEndereco }) {
      this.endereco = modelEndereco;
    }
  
    async execute(clienteID, body_cartao) {
      try {
          const { card_hash, card_number } = body_cartao;

          // Gerar card-id
  

         const cartaoFound = await this.endereco.findOne({
          where: { cliente_id: clienteID },
        });
  
        return { created: true, endereco: createdEndereco };
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = createCartao;
  