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
    this.belongsTo(models.Cliente, {
      foreignKey: 'cliente_id',
      as: 'cliente',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}

module.exports = Cartao;
