module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('cartao', 'cpf');
    await queryInterface.removeColumn('cartao', 'validade');
    await queryInterface.renameColumn('cartao', 'nome', 'card_hash');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('cartao', 'cpf', {
        type: Sequelize.STRING,
      });
    await queryInterface.addColumn('cartao', 'validate', {
        type: Sequelize.STRING,
      });
    await queryInterface.renameColumn('cartao', 'card_hash', 'nome');
  }
};
