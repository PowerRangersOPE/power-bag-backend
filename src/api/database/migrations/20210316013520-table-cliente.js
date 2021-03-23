'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('cliente', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      identificacao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tel_cel1: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tel_cel2: {
        type: Sequelize.STRING,
        allowNull: false
      },
      dat_nasc: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pontuacao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cartao_id: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
        references: {         // User belongsTo Company 1:1
          model: 'cartao',
          key: 'id'
        }
      },
      endereco_id: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
        references: {         // User belongsTo Company 1:1
          model: 'endereco',
          key: 'id'
        }
      },
      perfil_id: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
        references: {         // User belongsTo Company 1:1
          model: 'perfil',
          key: 'id'
        }
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
    await queryInterface.dropTable('cliente');
  }
};