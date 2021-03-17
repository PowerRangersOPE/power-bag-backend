const { Model, DataTypes } = require('sequelize')

class Perfil extends Model {
    static init(sequelize) {
        super.init({
            necessidade: DataTypes.STRING,
            genero: DataTypes.STRING,
            cor: DataTypes.STRING,
            tipo_estampa: DataTypes.STRING,
            tipo_tenis: DataTypes.STRING,
            tipo_estilo: DataTypes.STRING,
            tamanho_sapato: DataTypes.STRING,
            tamanho_calca: DataTypes.STRING,
            tamanho_camisa: DataTypes.STRING,
            tamanho_tenis: DataTypes.STRING,
            estacao_ano: DataTypes.STRING,
            frequencia: DataTypes.STRING,
            n_quero: DataTypes.STRING,
            fx_taria: DataTypes.STRING,
            observacoes: DataTypes.STRING
        }, {
            sequelize,
            freezeTableName: true,
            modelName: 'Perfil',
            tableName: 'perfil',
        })
    }
}

module.exports = Perfil