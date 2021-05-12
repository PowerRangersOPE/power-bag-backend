const axios = require('axios');

const Pagarme = require('./pagarme');

module.exports = () => ({
    pagarme: new Pagarme(axios, process.env.PAGARME_API_KEY),
});

