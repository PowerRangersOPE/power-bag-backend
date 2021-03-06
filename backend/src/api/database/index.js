const { Sequelize } = require('sequelize')
const dbConfig = require('../../config/database')

const connection = new Sequelize(dbConfig)

async function test() {
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

test()

module.exports = connection