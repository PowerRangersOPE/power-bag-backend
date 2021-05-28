const createTransactionBody = require('./createTransactionBody');

class pagarme {
  constructor(axios, api_key) {
    this.request = axios;
    this.api_key = api_key;
    this.baseURL = 'https://api.pagar.me/1';
    this.cardURI = '/cards';
    this.transactionURI = '/transactions';
    this.refundURI = '/refund';
  }

  async createCardID(card_hash) {
    try {
      const body = {
        api_key: this.api_key,
        card_hash,
      };

      const {
        data: { id },
      } = await this.request.post(`${this.baseURL}${this.cardURI}`, body);

      return id;
    } catch (error) {
      const err = {
        ...error,
        message: `pagarme error: ${error.message}`,
      };
      throw err;
    }
  }

  async createTransactions(cliente, bag) {
    try {
      const body = createTransactionBody(cliente, bag, this.api_key);

      console.log(body);

      const {
        data: { id },
      } = await this.request.post(
        `${this.baseURL}${this.transactionURI}`,
        body,
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      );

      return id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async makeRefund({ transaction_id, amount }) {
    try {
      const url = `${this.baseURL}${this.transactionURI}/${transaction_id}/${this.refundURI}`;
      const body = {
        amount,
        api_key: this.api_key,
      };
      const header = {
        'content-type': 'application/json',
      };

      const {
        data: { status },
      } = await this.request.post(url, body, header);

      return status;
    } catch (error) {
      throw error;
    }
  }

  async makeTotalRefund({ transaction_id }) {
    try {
      const status = await this.makeRefund({ transaction_id, amount: null });

      if (status !== 'refunded') {
        throw new Error('pagarme: Ocorreu erro durante o estorno total');
      }

      return true;
    } catch (error) {
      throw error;
    }
  }

  async makePartialRefund({ transaction_id, amount }) {
    try {
      const status = await this.makeRefund({ transaction_id, amount });

      if (status !== 'paid') {
        throw new Error('pagarme: Ocorreu erro durante o estorno total');
      }

      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = pagarme;
