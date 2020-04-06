const Tweet = require('../models/Tweet');
const { Router } = require('express'); 

module.exports = Router()
  .post('/', (req, res, next) => {
    Tweet.generateMarkov()
      .then(tweet => res.send(tweet))
      .catch(next);
  });
