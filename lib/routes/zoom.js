const { Router } = require('express'); 
const Zoom = require('../utils/zoom');
const generateSentence = require('../utils/markov');

module.exports = Router()
  .get('/:id', (req, res, next) => {
    // get sentence from request query
    // /api/v1/zoom/meetingId?sentence=my sentence
    // if no sentence then generate one with markov
    Zoom.callZoom(req.params.id, req.query.sentence || generateSentence())
      .then(call => res.send(call))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    // /api/v1/zoom?meetingIds=12345,67890,888987
    const meetingIds = req.query.meetingIds.split(',');
    Promise.all(meetingIds.map(meetingId => {
      return Zoom.callZoom(meetingId, req.query.sentence || generateSentence())
    }))
      .then(calls => res.send(calls))
      .catch(next);
  })
