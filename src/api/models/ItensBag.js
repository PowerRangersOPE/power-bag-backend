const { Model, DataTypes } = require('sequelize');

class ItensBag extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        bag_id: DataTypes.STRING,
        produto_id: DataTypes.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        modelName: 'ItensBag',
        tableName: 'itensBag',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Bag, {
      foreignKey: 'bag_id',
      as: 'bag',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    this.belongsTo(models.Produto, {
      foreignKey: 'produto_id',
      as: 'produto',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}

module.exports = ItensBag;
