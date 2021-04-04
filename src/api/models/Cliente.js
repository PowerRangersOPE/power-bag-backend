const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        cpf: DataTypes.STRING,
        identificacao: DataTypes.STRING,
        tel_cel1: DataTypes.STRING,
        tel_cel2: DataTypes.STRING,
        dat_nasc: DataTypes.STRING,
        status: DataTypes.STRING,
        pontuacao: DataTypes.STRING,
      },
      {
        sequelize,
        modelName: 'Cliente',
        tableName: 'cliente',
      }
    );
  }

  /**
   * Create associate for Cartao, Endereco and Perfil Model
   * For Cliente Model ins't necessery criate column
   * on migrate for below associates
   */

  static associate(models) {
    this.hasOne(models.Cartao, {
      foreignKey: 'cliente_id',
      as: 'cartao',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    this.hasOne(models.Endereco, {
      foreignKey: 'cliente_id',
      as: 'endereco',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    this.hasOne(models.Perfil, {
      foreignKey: 'cliente_id',
      as: 'perfil',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });

    this.hasOne(models.Bag, {
      foreignKey: 'cliente_id',
      as: 'bag',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }
}

module.exports = Cliente;
