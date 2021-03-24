const { Model, DataTypes } = require('sequelize');

class Cartao extends Model {
  static init(sequelize) {
    super.init(
      {
        numero: DataTypes.STRING,
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        validade: DataTypes.STRING,
        cliente_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        freezeTableName: true,
        modelName: 'Cartao',
        tableName: 'cartao',
        classMethods: {
          associate: (model) => {
            Cartao.belongsTo(model.Cliente, { foreignKey: 'cliente_id' });
          },
        },
      }
    );
  }
}

module.exports = Cartao;
