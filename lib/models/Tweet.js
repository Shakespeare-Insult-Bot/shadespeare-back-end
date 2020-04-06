const mongoose = require('mongoose');
const makeTwit = require('../utils/markov');

const schema = new mongoose.Schema({
  tweetText: {
    type: String,
    required: true
  },
  handle: {
    type: String,
    required: true
  }
},
{
  toJSON: {
    virtuals: true,
    transform: function(doc, ret){
      delete ret.id;
    }
  }
}
);

schema.statics.generateMarkov = function() {
  const markovTweet = makeTwit();
  return this
    .create({
      tweetText: markovTweet,
      handle: 'ShadeSpeare'
    });
};


module.exports = mongoose.model('Tweet', schema);
