const CronJob = require('cron').CronJob;
const job = new CronJob('10 * * * * *', function() {
  console.log('You will see this message every 10 seconds');
}, null, true, 'America/Los_Angeles');
job.start();
