const { Model, DataTypes } = require("sequelize");

class Bag extends Model {
  static init(sequelize) {
    super.init(
      {
        status: DataTypes.STRING,
        observacoes: DataTypes.STRING,
        valor: DataTypes.STRING,
        cliente_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        freezeTableName: true,
        modelName: "Bag",
        tableName: "bag",
        classMethods: {
          associate: (model) => {
            Bag.hasMany(model.Cliente, { foreignKey: "cliente_id" }),
              Bag.belongsTo(model.ItensBag, { foreignKey: "itensBag_id" });
          },
        },
      },
    );
  }
}

module.exports = Bag;
