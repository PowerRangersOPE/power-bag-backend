// const { resolve } = require('path');

module.exports = {
  username: 'postgres',
  password: 'power-bag-01',
  database: 'power-bag',
  host: '127.0.0.1',
  dialect: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
  },
};
