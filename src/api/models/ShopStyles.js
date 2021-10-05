const { Model, DataTypes } = require('sequelize');

class ShopStyles extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        home: DataTypes.JSON,
        profilePage: DataTypes.JSON,
      },
      {
        sequelize,
        freezeTableName: true,
        modelName: 'ShopStyles',
        tableName: 'shopStyles',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Shop, {
      foreignKey: 'shop_id',
      as: 'shop',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}

module.exports = ShopStyles;
