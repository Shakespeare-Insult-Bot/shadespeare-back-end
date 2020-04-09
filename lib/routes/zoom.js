const Zoom = require('../utils/zoom');
const { Router } = require('express'); 

module.exports = Router()
  .get('/:id', (req, res, next) => {
    Zoom.callZoom(req.params.id)
      .then(speech => res.send(speech))
      .catch(next);
  });
