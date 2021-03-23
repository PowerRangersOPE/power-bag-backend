const { Model, DataTypes } = require('sequelize')

class Test extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            age: DataTypes.INTEGER
        }, {
            sequelize,
            modelName: 'Test',
            //tableName: 'test'
        })
    }
}

module.exports = Test