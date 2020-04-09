const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const twilio = require('twilio')(accountSid, authToken);

const VoiceResponse = require('twilio').twiml.VoiceResponse;
const { makeTwit } = require('./markov');

const callZoom = meetingId => {
  return twilio.calls.create({
    to: '+16699009128',
    from: '+12018347850',
    sendDigits: `${meetingId}#ww#wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww*6`,
    twiml: zoomShadebot(meetingId)
  })
    .then(call => {
      calls[meetingId] = call.sid;
      return call;
    });
};
const zoomShadebot = (meetingId) => {
  const markov = makeTwit();
  const speak = new VoiceResponse();
  speak.play(markov);
  speak.redirect(`https://shadespeare.herokuapp.com/zoom/${meetingId}`);
  return speak.toString();
};

module.exports = {
  callZoom
};
