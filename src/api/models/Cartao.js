const { Model, DataTypes } = require('sequelize');

class Cartao extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
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
      }
    );
  }

  static associate(models) {
    this.associate = this.hasOne(models.Cliente);
  }
}

module.exports = Cartao;
