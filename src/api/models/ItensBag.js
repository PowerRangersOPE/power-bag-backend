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
        bag_id: DataTypes.INTEGER,
        produto_id: DataTypes.ARRAY(DataTypes.DECIMAL),
      },
      {
        sequelize,
        freezeTableName: true,
        modelName: 'ItensBag',
        tableName: 'itensBag',
        classMethods: {
          associate: (model) => {
            ItensBag.hasMany(model.Bag, { foreignKey: 'bag_id' });
            ItensBag.hasMany(model.Produto, { foreignKey: 'produto_id' });
          },
        },
      }
    );
  }
}

module.exports = ItensBag;
