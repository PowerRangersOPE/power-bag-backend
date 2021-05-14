const { Model, DataTypes } = require('sequelize');

class Bag extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        status: DataTypes.STRING,
        observacoes: DataTypes.STRING,
        valor: DataTypes.STRING,
        cliente_id: DataTypes.INTEGER,
        produtos_pdf: DataTypes.STRING,
        transaction_id: DataTypes.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        modelName: 'Bag',
        tableName: 'bag',
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

    this.hasOne(models.ItensBag, {
        foreignKey: 'bag_id',
        as: 'itensBag',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
  }
}

module.exports = Bag;
