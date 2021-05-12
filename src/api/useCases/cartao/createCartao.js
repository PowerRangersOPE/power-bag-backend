class createCartao {
    constructor({ modelCartao, pagarme }) {
      this.cartao = modelCartao;
      this.pagarme = pagarme;
    }
  
    async execute(clienteID, body_cartao) {
      try {

        const { card_hash, numero } = body_cartao;

        const card_id = await this.pagarme.createCardID(card_hash); 

        const body = {
            numero, 
            card_hash: card_id,
            cliente_id: clienteID.id
        };
          
         const cartaoFound = await this.cartao.findOne({
          where: { cliente_id: clienteID.id },
        });

        if(cartaoFound) {
            return {};
        }

        const createdCartao = await this.cartao.create(body);

        if (!createdCartao) throw new Error('Create endereco got error');
  
        return { created: true, cartao: createdCartao };
      } catch (error) {
        throw error;
      }
    }
  }
  
  module.exports = createCartao;
  