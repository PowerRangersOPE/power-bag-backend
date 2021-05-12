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
        card_hash: DataTypes.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        modelName: 'Cartao',
        tableName: 'cartao',
      }
    );
  }

  /**
   * Create associate with model Cliente
   * the foreingKey was create on Migrate
   * 'as' for rename for 'cliente'
   */

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
