const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const twilio = require('twilio')(accountSid, authToken);

const VoiceResponse = require('twilio').twiml.VoiceResponse;
const makeTwit = require('./markov');

const callZoom = meetingId => {
  return twilio.calls.create({
    to: '+16699009128',
    from: '+12018347850',
    sendDigits: `${meetingId}#ww#wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww*6`,
    twiml: zoomShadebot()
  })
    .then(call => {
      return call;
    });
};
const zoomShadebot = () => {
  const markov = makeTwit();
  const speak = new VoiceResponse();
  speak.say({
    voice: 'man',
    language: 'en-GB'
  }, markov);
  return speak.toString();
};

module.exports = {
  callZoom
};
