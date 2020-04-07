const Twit = require('twit');

const createdTweeter = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  strictSSL: true
});

// figure out how to make this run ever so often
createdTweeter.post('statuses/update', { status: `'${obj.quote}'` }, tweeted);

function tweeted(err, data) {
  if(err) {
    console.log(err);
  } else {
    console.log('Success: ' + data.text);
  }
} 

