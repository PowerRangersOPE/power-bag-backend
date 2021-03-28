module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('endereco', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        rua: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        numero: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        bairro: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cidade: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        uf: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cep: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        complemento: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        observacoes: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cliente_id: {
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
          references: {
            // User belongsTo Company 1:1
            model: 'cliente',
            key: 'id',
          },
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('endereco');
  }
};
