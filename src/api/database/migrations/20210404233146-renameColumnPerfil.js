module.exports = {
  up: async (queryInterface) => {
    queryInterface.renameColumn('perfil', 'fx_taria', 'fx_etaria');
  },

  down: async (queryInterface) => {
    queryInterface.renameColumn('perfil', 'fx_etaria', 'fx_taria');
  },
};
