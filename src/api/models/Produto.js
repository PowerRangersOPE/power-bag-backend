const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
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
      }
    );
  }

  static associate(models) {
    this.hasMany(models.ItensBag, {
      foreignKey: 'produto_id',
      as: 'itensBag',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}

module.exports = Produto;
