module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.createTable('produto', {
        id: {
            type: Sequelize.UUID,
            primaryKey: true,
        },
        valor: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tipo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        genero: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        fx_etaria: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        estacao_ano: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        necessidade: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cor: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tipo_estampa: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tipo_estilo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tipo_tenis: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tamanho_camisa: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tamanho_sapato: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tamanho_calca: {
          type: Sequelize.STRING,
          allowNull: false,
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
      await queryInterface.dropTable('produto');
    },
  };
