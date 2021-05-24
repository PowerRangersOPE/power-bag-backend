class updateBag {
  constructor({ modelBag, pagarme }) {
    this.Bag = modelBag;
    this.pagarme = pagarme;
  }

  async updateBag({ id, body }) {
    const updatedBag = await this.Bag.update(body, {
      where: { id },
      returning: true,
    });

    if (!updatedBag) throw new Error('bag or client not found');

    const [, [bag]] = updatedBag;

    return bag;
  }

  async canceledBag({ id, transaction_id, status }) {
    try {
      const totalRefund = await this.pagarme.makeTotalRefund({
        transaction_id,
      });

      if (!totalRefund) {
        throw new Error('pagarme: Ocorreu erro durante o estorno total');
      }

      const body = {
        status,
        valor: 0,
      };

      const updatedBag = await this.updateBag({ id, body });

      return updatedBag;
    } catch (error) {
      throw error;
    }
  }

  async finishedBag() {}

  updateBagOptions({ status }) {
    const convertedStatus = status.toLowerCase();
    const options = {
      cancelado: 'cancelado',
      finalizado: 'finalizado',
    };

    return options[convertedStatus] || false;
  }

  async execute({ status, valor, id_bag }) {
    try {
      const optionUpdateBag = this.updateBagOptions({ status });

      if (!optionUpdateBag) {
        const body = {
          status,
          valor,
        };

        const updatedBag = await this.updateBag({ id: id_bag, body });

        return updatedBag;
      }

      const data = await this.Bag.findOne({
        where: { id: id_bag },
        returning: true,
      });

      const { transaction_id, valor_original, id } = data.toJSON();

      const updateBody = {
        status,
        valor,
        transaction_id,
        valor_original,
        id,
      };

      let updatedBag;

      if (optionUpdateBag === 'cancelado') {
        updatedBag = await this.canceledBag(updateBody);
      }

      return updatedBag;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = updateBag;
