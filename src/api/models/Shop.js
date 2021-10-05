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
        name: DataTypes.STRING,
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

  static associate(models) {
    this.hasOne(models.ShopStyles, {
      foreignKey: 'shop_id',
      as: 'shopStyles',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}

module.exports = Shops;
