// const CronJob = require('cron').CronJob;
// // const request = require('superagent');
// // const app = require('./lib/app');
// const makeTwit = require('./lib/utils/markov');

// const job = new CronJob('*/5 * * * * *', function() {
//   console.log(makeTwit());


// }, null, true, 'America/Los_Angeles');
// job.start();

const CronJob = require('cron').CronJob;
const { postTweet } = require('./lib/utils/twit');
const makeTwit = require('./lib/utils/markov');


const job = new CronJob('10 * * * * *', function() {
  const tweet = {
    quote: makeTwit()
  };
  try {
    postTweet(tweet);
  } catch(err) {
    console.log('error posting cron tweet', err);
  }
  
  console.log('Post tweet every 10 seconds');
}, null, true, 'America/Los_Angeles');
job.start();
