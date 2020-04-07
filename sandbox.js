const Markov = require('markov-chains-text').default;
// const chance = require('chance').Chance();


const { text: translatedText } = require('./lib/data/translated-shakespeare');
// const { text: midSummerText } = require('./lib/data/midsummer-nights-dream');
const { text: montyText } = require('./lib/data/monty-python.js');
const { text: muchAdoText } = require('./lib/data/much-ado-data');
const { text: extraShakeText } = require('./lib/data/extra-shakespeare-insults');
const { text: shakeText } = require('./lib/data/shakespeare-insults');
// const { text: twelfthText } = require('./lib/data/twelfth-night');

const { text: favorites } = require('./lib/data/ourFavorites');
const { text: scottsFavs } = require('./lib/data/scottsFavorites');
const { text: fiFavs } = require('./lib/data/fionasFavorites');
const { text: codyFavs } = require('./lib/data/codysFavorites');
const { text: jamesFavs } = require('./lib/data/jamesFavorites');

function makeTwit() {
  const markovchain = new Markov(montyText + translatedText + shakeText + extraShakeText + scottsFavs + favorites + fiFavs + codyFavs + jamesFavs + muchAdoText);
  let quote = markovchain.makeSentence({ tries: 10 });
  while(quote.length > 90 || quote.length < 10) {
    quote = markovchain.makeSentence({ tries: 10 });
  }

  quote = quote.trim();

  if(quote.startsWith('and ')) {
    quote = quote.slice(4);
  }
  const firstLetter = quote[0].toUpperCase();
  const capQuote = firstLetter + quote.slice(1);
  return capQuote;
}

console.log('==========tweet:', makeTwit());
