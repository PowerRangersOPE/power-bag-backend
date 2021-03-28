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

  static associate(models) {
    this.associate = this.hasOne(models.Cartao);
  }
}

module.exports = Cliente;
