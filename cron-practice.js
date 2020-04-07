const CronJob = require('cron').CronJob;
const request = require('superagent');
const app = require('./lib/app');
const makeTwit = require('./lib/utils/markov');

const job = new CronJob('*/5 * * * * *', function() {
  console.log(makeTwit());


}, null, true, 'America/Los_Angeles');
job.start();
