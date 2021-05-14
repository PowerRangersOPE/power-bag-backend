const createTransactionBody = require('./createTransactionBody');

class pagarme {

    constructor(axios, api_key) {
        this.request = axios;
        this.api_key = api_key;
        this.baseURL = 'https://api.pagar.me/1';
        this.cardURI= '/cards';
        this.transactionURI = '/transactions';
    }

    async createCardID(card_hash) {

        try {
            const body = {
                api_key: this.api_key,
                card_hash,
            }
    
            const { data: { id } } = await this.request.post(`${this.baseURL}${this.cardURI}`, body);
    
            return id;
    
        } catch (error) {
            throw {message: `pagarme error: ${error.message}`};
        }
    }   

    async createTransactions(cliente, bag) {
        try {

            const body = createTransactionBody(cliente, bag, this.api_key)
        

            const { data: {id} } = await this.request.post(`${this.baseURL}${this.transactionURI}`, body, {
                headers: {
                    'content-type': 'application/json',
                }
            });


            return id
  
        } catch (error) {
            throw error
        }
    }


}


module.exports = pagarme