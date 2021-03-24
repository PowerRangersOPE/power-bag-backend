const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        rua: DataTypes.STRING,
        numero: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cidade: DataTypes.STRING,
        uf: DataTypes.STRING,
        cep: DataTypes.STRING,
        complemento: DataTypes.STRING,
        observacoes: DataTypes.STRING,
        cliente_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        freezeTableName: true,
        modelName: 'Endereco',
        tableName: 'endereco',
        classMethods: {
          associate: (model) => {
            Endereco.belongsTo(model.Cliente, { foreignKey: 'cliente_id' });
          },
        },
      }
    );
  }
}

module.exports = Endereco;
