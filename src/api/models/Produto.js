const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        valor: DataTypes.STRING,
        tipo: DataTypes.STRING,
        genero: DataTypes.STRING,
        fx_etaria: DataTypes.STRING,
        estacao_ano: DataTypes.STRING,
        necessidade: DataTypes.STRING,
        cor: DataTypes.STRING,
        tipo_estampa: DataTypes.STRING,
        tipo_estilo: DataTypes.STRING,
        tipo_tenis: DataTypes.STRING,
        tamanho_camisa: DataTypes.STRING,
        tamanho_sapato: DataTypes.STRING,
        tamanho_calca: DataTypes.STRING,
      },
      {
        sequelize,
        freezeTableName: true,
        modelName: 'Produto',
        tableName: 'produto',
        classMethods: {
          associate: (model) => {
            Produto.belongsTo(model.ItensBag, { foreignKey: 'itensBag_id' });
          },
        },
      }
    );
  }
}

module.exports = Produto;
