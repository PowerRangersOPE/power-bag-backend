const { Model, DataTypes } = require('sequelize')

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            rua: DataTypes.STRING,
            numero: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            uf: DataTypes.STRING,
            cep: DataTypes.STRING,
            complemento: DataTypes.STRING,
            observacoes: DataTypes.STRING
        }, {
            sequelize,
            modelName: 'Endereco',
            // tableName
        })
    }
}

module.exports = Endereco