module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('cartao', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        numero: {
          type: Sequelize.STRING,
          allowNull: false
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cpf: {
          type: Sequelize.STRING,
          allowNull: false
        },
        validade: {
          type: Sequelize.STRING,
          allowNull: false
        },
        cliente_id: {
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
          references: { // User belongsTo Company 1:1
            model: 'cliente',
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
      });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('cartao');
  }
};
