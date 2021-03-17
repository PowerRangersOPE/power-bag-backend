'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('perfil', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      necessidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genero: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_estampa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_tenis: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_estilo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tamanho_sapato: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tamanho_calca: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tamanho_camisa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tamanho_tenis: {
        type: Sequelize.STRING,
        allowNull: false
      },
      estacao_ano: {
        type: Sequelize.STRING,
        allowNull: false
      },
      frequencia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      n_quero: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fx_taria: {
        type: Sequelize.STRING,
        allowNull: false
      },
      observacoes: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('perfil');
  }
};