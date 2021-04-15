module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('cliente', 'nome', {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.changeColumn('cliente', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      });
      await queryInterface.changeColumn('cliente', 'cpf', {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.changeColumn('cliente', 'identificacao', {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.changeColumn('cliente', 'tel_cel1', {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.changeColumn('cliente', 'tel_cel2', {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.changeColumn('cliente', 'dat_nasc', {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.changeColumn('cliente', 'status', {
        type: Sequelize.STRING,
        allowNull: true
      });
      await queryInterface.changeColumn('cliente', 'pontuacao', {
        type: Sequelize.STRING,
        allowNull: true
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('cliente', 'nome', {
        type: Sequelize.STRING,
        allowNull: false
      });
      await queryInterface.changeColumn('cliente', 'email', {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
      });
      await queryInterface.changeColumn('cliente', 'cpf', {
        type: Sequelize.STRING,
        allowNull: false
      });
      await queryInterface.changeColumn('cliente', 'identificacao', {
        type: Sequelize.STRING,
        allowNull: false
      });
      await queryInterface.changeColumn('cliente', 'tel_cel1', {
        type: Sequelize.STRING,
        allowNull: false
      });
      await queryInterface.changeColumn('cliente', 'tel_cel2', {
        type: Sequelize.STRING,
        allowNull: false
      });
      await queryInterface.changeColumn('cliente', 'dat_nasc', {
        type: Sequelize.STRING,
        allowNull: false
      });
      await queryInterface.changeColumn('cliente', 'status', {
        type: Sequelize.STRING,
        allowNull: false
      });
      await queryInterface.changeColumn('cliente', 'pontuacao', {
        type: Sequelize.STRING,
        allowNull: false
      });
  }
};
