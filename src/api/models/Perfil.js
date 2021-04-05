const { Model, DataTypes } = require('sequelize');

class Perfil extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        necessidade: DataTypes.STRING,
        genero: DataTypes.STRING,
        cor: DataTypes.STRING,
        tipo_estampa: DataTypes.STRING,
        tipo_tenis: DataTypes.STRING,
        tipo_estilo: DataTypes.STRING,
        tamanho_sapato: DataTypes.STRING,
        tamanho_calca: DataTypes.STRING,
        tamanho_camisa: DataTypes.STRING,
        estacao_ano: DataTypes.STRING,
        frequencia: DataTypes.STRING,
        n_quero: DataTypes.STRING,
        fx_etaria: DataTypes.STRING,
        observacoes: DataTypes.STRING,
        cliente_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        freezeTableName: true,
        modelName: 'Perfil',
        tableName: 'perfil',
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

module.exports = Perfil;
