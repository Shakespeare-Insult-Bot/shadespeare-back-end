const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const twilio = require('twilio')(accountSid, authToken);

const VoiceResponse = require('twilio').twiml.VoiceResponse;


// const getTwit = require('./markov');

// make callZoom take sentence so you can make this more dynamic
const callZoom = (meetingId, sentence) => {
  return twilio.calls.create({
    to: '+16699009128',
    from: '+12018347850',
    sendDigits: `${meetingId}#ww#wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww*6`,
    twiml: zoomShadebot(sentence)
  });
};
const zoomShadebot = sentence => {
  const speak = new VoiceResponse();
  speak.say({
    voice: 'man',
    language: 'en-GB'

  }, sentence);


  return speak.toString();
};

module.exports = {
  callZoom
};
