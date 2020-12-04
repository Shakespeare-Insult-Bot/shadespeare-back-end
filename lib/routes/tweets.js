const Tweet = require('../models/Tweet');
const { Router } = require('express');
const makeTwit = require('../utils/markov');

module.exports = Router()
  .post('/', (req, res, next) => {
    // Tweet.generateMarkov()
    //   .then(tweet => res.send(tweet))
    //   .catch(next);
    const text = makeTwit();
    res.send({
      tweetText: text,
      handle: 'ShadeSpeare'
    })
      .catch(next);

  });
