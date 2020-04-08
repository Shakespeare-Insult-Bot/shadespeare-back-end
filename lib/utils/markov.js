const Markov = require('markov-chains-text').default;
// const chance = require('chance').Chance();


// const { text: midSummerText } = require('../data/midsummer-nights-dream');
// const { text: twelfthText } = require('../data/twelfth-night');
const { text: translatedText } = require('../data/translated-shakespeare');
const { text: montyText } = require('../data/monty-python');
const { text: muchAdoText } = require('../data/much-ado-data');
const { text: extraShakeText } = require('../data/extra-shakespeare-insults');
const { text: shakeText } = require('../data/shakespeare-insults');

const { text: favorites } = require('../data/ourFavorites');
const { text: scottsFavs } = require('../data/scottsFavorites');
const { text: fiFavs } = require('../data/fionasFavorites');
const { text: codyFavs } = require('../data/codysFavorites');
const { text: jamesFavs } = require('../data/jamesFavorites');

module.exports = function makeTwit() {
  const markovchain = new Markov(montyText + translatedText + shakeText + extraShakeText + scottsFavs + favorites + fiFavs + codyFavs + jamesFavs + muchAdoText);
  let quote = markovchain.makeSentence({ tries: 10 });
  while(quote.length > 80 || quote.length < 10 || quote.split(' ').length === 1) {
    quote = markovchain.makeSentence({ tries: 10 });
  }
  quote = quote.trim();

  if(quote.startsWith('and ')) {
    quote = quote.slice(4);
  }
  const firstLetter = quote[0].toUpperCase();
  const capQuote = firstLetter + quote.slice(1);
  return capQuote;
};

