module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.createTable('bag', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        observacoes: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        valor: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cliente_id: {
          type: Sequelize.UUID,
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: false,
          references: {
            // User hasMany 1:N
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
      }),

    down: async (queryInterface) => {
      await queryInterface.dropTable('bag');
    },
  };
