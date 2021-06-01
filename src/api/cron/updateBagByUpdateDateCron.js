const cron = require('node-cron');
const { add } = require('date-fns');
const { Op } = require('sequelize');

const Bag = require('../models/Bag');

async function updateBagByUpdateDateCron() {
  try {
    const date = add(new Date(), { days: 5 });

    const [updateBag] = await Bag.update(
      { status: 'Atrasado' },
      {
        where: {
          updated_at: {
            [Op.gt]: date,
          },
          [Op.and]: [
            {
              [Op.or]: [
                { status: 'Enviado' },
                { status: 'Recebido' },
                { status: 'Solicitado a retirada' },
              ],
            },
          ],
        },
      }
    );

    console.log(`Foram atualizadas ${updateBag} bags para o status 'Atrasado'`);
  } catch (error) {
    console.log(error);
  }
}

module.exports = cron.schedule('* */1 * * *', updateBagByUpdateDateCron, {
  scheduled: false,
});
