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

// no need to create a new markov chain for each tweet
// create the chain and us it each time you call makeTwit
// this will make the makeTwit function more performant
const markovchain = new Markov(montyText + translatedText + shakeText + extraShakeText + scottsFavs + favorites + fiFavs + codyFavs + jamesFavs + muchAdoText);

module.exports = () => {
  const quote = markovchain.makeSentence({ tries: 10, maxChars: 80 }) // the library does hav maxChars (https://github.com/bdchauvette/markov-chains-text/blob/master/src/index.js#L201)
    .trim() // trim whitespace
    .replace(/^and /, ''); // replace beginning and

  return quote[0].toUpperCase() + quote.slice(1);
};

