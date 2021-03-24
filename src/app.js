require('dotenv');
const express = require('express');

const router = require('./routes');

require('./api/database');

const app = express();
app.use(express.json());

app.use(router);

module.exports = app;
