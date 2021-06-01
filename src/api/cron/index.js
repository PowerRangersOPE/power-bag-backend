const updateBagByUpdateDateCron = require('./updateBagByUpdateDateCron');

class ManagerCron {
  constructor() {
    this.jobs = [updateBagByUpdateDateCron];
  }

  run() {
    console.log('Cron is running !!');
    this.jobs.map(async (job) => job.start());
  }
}

module.exports = new ManagerCron();
