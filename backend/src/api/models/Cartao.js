const { Model, DataTypes } = require('sequelize')

class Cartao extends Model {
    static init(sequelize) {
        super.init({
            numero: DataTypes.STRING,
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            validade: DataTypes.STRING,
        }, {
          sequelize,
          freezeTableName: true,
          modelName: 'Cartao',
          tableName: 'cartao',
        })
    }
}

module.exports = Cartao