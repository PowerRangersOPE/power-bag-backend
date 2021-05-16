class createCartao {
  constructor({ modelCartao, pagarme }) {
    this.cartao = modelCartao;
    this.pagarme = pagarme;
  }

  async execute(clienteID, body_cartao) {
    try {
      const { card_hash, numero } = body_cartao;

      const body = {
        numero: numero.replace(/ /g, ''),
        cliente_id: clienteID.id,
      };

      const cartaoFound = await this.cartao.findOne({
        where: { cliente_id: clienteID.id },
      });

      if (cartaoFound) {
        if (cartaoFound.numero === body.numero) {
          return { update: false, cartao: cartaoFound };
        }

        const card_id = await this.pagarme.createCardID(card_hash);

        delete body.cliente_id;
        body.card_hash = card_id;

        const newCard = await this.cartao.update(body, {
          where: { cliente_id: clienteID.id },
          returning: true,
        });

        if (!newCard) throw new Error('cartao not found');

        const [, [updatedCard]] = newCard;

        return { updated: true, cartao: updatedCard };
      }

      const card_id = await this.pagarme.createCardID(card_hash);

      body.card_hash = card_id;

      const createdCartao = await this.cartao.create(body);

      if (!createdCartao) throw new Error('Create endereco got error');

      return { created: true, cartao: createdCartao };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = createCartao;
