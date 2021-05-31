const cron = require('node-cron');
const { add } = require('date-fns');
const { Op } = require('sequelize');

const Bag = require('../models/Bag');

function updateBagByUpdateDateCron() {
  try {
    const date = add(new Date(), { days: 5 });

    // Necessário validar o status
    const [updateBag] = Bag.update(
      { status: 'Atrasado' },
      {
        where: { updated_at: { [Op.gt]: date } },
      }
    );

    console.log(`Foram atualizadas ${updateBag} bags para o status 'Atrasado'`);
  } catch (error) {
    console.log(error);
  }
}

module.exports = cron.schedule('0 */1 * * *', updateBagByUpdateDateCron, {
  scheduled: false,
});
