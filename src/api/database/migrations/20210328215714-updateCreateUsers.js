module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('cliente', 'cartao_id', {
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
        references: { // User belongsTo Company 1:1
        model: 'cartao',
        key: 'id'
    }
    });
    await queryInterface.addColumn('cliente', 'endereco_id', {
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
        references: { // User belongsTo Company 1:1
        model: 'endereco',
        key: 'id'
        }
    });
    await queryInterface.addColumn('cliente', 'perfil_id', {
        type: Sequelize.UUID,
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
        references: { // User belongsTo Company 1:1
        model: 'perfil',
        key: 'id'
        }
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('cliente', 'perfil_id');
    await queryInterface.removeColumn('cliente', 'endereco_id');
    await queryInterface.removeColumn('cliente', 'cartao_id');
  }
};
