const CronJob = require('cron').CronJob;
const { postTweet } = require('./twit');
const makeTwit = require('./markov');


const job = new CronJob('10 * * * * *', function() {
  const tweet = {
    quote: makeTwit()
  };
  try {
    postTweet(tweet);

    // postTweet(tweet);
    console.log('*?*?*', tweet.quote);

  } catch(err) {
    console.log('error posting cron tweet', err);
  }
  
}, null, true, 'America/Los_Angeles');
job.start();
