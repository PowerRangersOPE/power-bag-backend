const { resolve } = require('path');

module.exports = {

    dialect: 'sqlite',
    storage: resolve(__dirname, '..', 'api', 'database', 'database.sqlite'),
    define: {
        timestamps: true,
        underscored: true
    }

}