const Twit = require('twit');

const makeTwit = require('./markov');


const createdTweeter = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  strictSSL: true
});

const postTweet = obj => {
  // make this return a promise so we can wait for it
  return new Promise((resolve, reject) => {
    // use arrow functions for anonymous functions
    // arrow function are much more idiomatic for anonymous function
    createdTweeter.post('statuses/update', { status: `${obj.quote}` }, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    });
  });
};


const stream = createdTweeter.stream('user');
stream.on('tweet', eventMessage => {
  const replyTo = eventMessage.in_reply_to_screen_name;
  const text = eventMessage.text;
  const from = eventMessage.user.screen_name;
  if(replyTo === 'shadespeare') {
    const newTweet = '@' + from + makeTwit();
    postTweet({
      quote: newTweet
    });
    // create tweet
    
  }
});

// createdTweeter.get('followers/ids', { screen_name: 'followers.name' },  function (err, data, response) {
//   console.log(data)
// })




module.exports = {
  postTweet, 
  tweetEvent

};
