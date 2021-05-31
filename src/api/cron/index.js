const updateBagByUpdateDateCron = require('./updateBagByUpdateDateCron');
const aMinute = require('./aMinute');

class ManagerCron {
  constructor() {
    this.jobs = [aMinute, updateBagByUpdateDateCron];
  }

  run() {
    console.log('Cron is running !!');
    this.jobs.map((job) => job.start());
  }
}

module.exports = new ManagerCron();
