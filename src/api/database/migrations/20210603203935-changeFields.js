module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('cliente', 'tel_cel2', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.changeColumn('cliente', 'pontuacao', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.changeColumn('endereco', 'complemento', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.changeColumn('endereco', 'observacoes', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.changeColumn('perfil', 'frequencia', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.changeColumn('perfil', 'n_quero', {
        type: Sequelize.STRING,
        allowNull: true,
      });
      await queryInterface.changeColumn('perfil', 'observacoes', {
        type: Sequelize.STRING,
        allowNull: true,
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('cliente', 'tel_cel2', {
        type: Sequelize.STRING,
        allowNull: false,
      });
      await queryInterface.changeColumn('cliente', 'pontuacao', {
        type: Sequelize.STRING,
        allowNull: false,
      });
      await queryInterface.changeColumn('endereco', 'complemento', {
        type: Sequelize.STRING,
        allowNull: false,
      });
      await queryInterface.changeColumn('endereco', 'observacoes', {
        type: Sequelize.STRING,
        allowNull: false,
      });
      await queryInterface.changeColumn('perfil', 'frequencia', {
        type: Sequelize.STRING,
        allowNull: false,
      });
      await queryInterface.changeColumn('perfil', 'n_quero', {
        type: Sequelize.STRING,
        allowNull: false,
      });
      await queryInterface.changeColumn('perfil', 'observacoes', {
        type: Sequelize.STRING,
        allowNull: false,
      });
  }
};
