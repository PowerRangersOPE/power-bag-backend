const cron = require('node-cron');

function aMinute() {
  console.log(`Cron for every minutes ${new Date()}`);
}

module.exports = cron.schedule('0 */1 * * *', aMinute, { scheduled: false });
