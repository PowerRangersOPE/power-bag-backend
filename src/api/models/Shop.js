const { Model, DataTypes } = require('sequelize');

class Shops extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        cnpj: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
      },
      {
        sequelize,
        freezeTableName: true,
        modelName: 'Shops',
        tableName: 'shops',
      }
    );
  }

  /**
   * Create associate with model Cliente
   * the foreingKey was create on Migrate
   * 'as' for rename for 'cliente'
   */

  //   static associate(models) {
  //     this.belongsTo(models.Cliente, {
  //       foreignKey: 'cliente_id',
  //       as: 'cliente',
  //       onDelete: 'CASCADE',
  //       onUpdate: 'CASCADE',
  //     });
  //   }
}

module.exports = Shops;
