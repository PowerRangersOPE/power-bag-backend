const { Model, DataTypes } = require('sequelize')

class Cliente extends Model {
    static init(sequelize) {
        super.init({
          nome: DataTypes.STRING,
          email: DataTypes.STRING,
          cpf: DataTypes.STRING,
          identificacao: DataTypes.STRING,
          tel_cel1: DataTypes.STRING,
          tel_cel2: DataTypes.STRING,
          dat_nasc: DataTypes.STRING, 
          status: DataTypes.STRING, 
          pontuacao: DataTypes.STRING,
          cartao_id: DataTypes.INTEGER,
          endereco_id: DataTypes.INTEGER,
          perfil_id: DataTypes.INTEGER
        }, {
            sequelize,
            freezeTableName: true,
            modelName: 'Cliente',
            tableName: 'cliente',
            classMethods: {
              associate: (model) => {
                Cliente.belongsTo(model.Cartao, { foreignKey: 'cartao_id' }),
                Cliente.belongsTo(model.Endereco, { foreignKey: 'endereco_id' }),
                Cliente.belongsTo(model.Perfil, { foreignKey: 'perfil_id' })
              }
          }
        })
    }
}

module.exports = Cliente