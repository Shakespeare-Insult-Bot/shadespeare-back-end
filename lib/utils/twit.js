const Twit = require('twit');

const createdTweeter = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  strictSSL: true
});

const postTweet = function(obj){
  createdTweeter.post('statuses/update', { status: `${obj.quote}` }, function(err, data, response){
    if(err){
      console.log('postTweet error', err);
    } else
      console.log('postTweet data success', data);
  });
};


module.exports = {
  postTweet
};
