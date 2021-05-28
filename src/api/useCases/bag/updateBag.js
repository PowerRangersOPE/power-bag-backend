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

  async finishedBag({ status, valor, transaction_id, valor_original, id }) {
    if (valor) {
      const refundValue = parseFloat(
        ((valor_original - valor) * 100).toFixed(2)
      );
      const parcialRefund = this.pagarme.makePartialRefund({
        transaction_id,
        amount: refundValue,
      });

      if (!parcialRefund) {
        throw new Error('pagarme: Ocorreu erro durante o estorno parcial');
      }
    }

    const body = {
      status,
      valor,
    };

    const updatedBag = await this.updateBag({ id, body });

    return updatedBag;
  }

  updateBagOptions({ status }) {
    if (!status) return false;

    const convertedStatus = status.toLowerCase();
    const options = {
      cancelado: 'cancelado',
      finalizado: 'finalizado',
    };

    return options[convertedStatus] || false;
  }

  async execute({ status, valor, id_bag, observacoes }) {
    try {
      const optionUpdateBag = this.updateBagOptions({ status });

      if (!optionUpdateBag) {
        const body = {
          status,
          valor,
          observacoes,
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

      if (optionUpdateBag === 'finalizado') {
        updatedBag = await this.finishedBag(updateBody);
      }

      return updatedBag;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = updateBag;
