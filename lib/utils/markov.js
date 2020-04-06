const MarkovChain = require('markovchain');
const chance = require('chance').Chance();

const { text: genericText } = require('../data/genericToShakespeare');
const { text: midSummerText } = require('../data/midsummer-nights-dream');
const { text: montyText } = require('../data/monty-python.js');
const { text: muchAdoText } = require('../data/much-ado-data');
const { text: oShakeText } = require('../data/o-shakespear-insults');
const { text: ourText } = require('../data/our-insults');
const { text: shakeText } = require('../data/shakespeare-insults');
const { text: twelfthText } = require('../data/twelfth-night');


module.exports = function makeTwit() {
  const quoteChain = new MarkovChain(twelfthText + montyText + montyText + genericText + ourText + shakeText + genericText + midSummerText + muchAdoText + oShakeText);

  const startWords = ['I', 'The', 'Thou', 'Thy', 'Thine', 'You', 'Thee'];
  const ending = ['?', '.', '!'];
  let quote = '';
  
  while(quote.length > 260 || quote.length < 10) {
    quote = quoteChain.start(chance.pickone(startWords)).end(15).process();
  }

  const endChar = quote[quote.length - 1];
  if(endChar === ';') quote.slice(quote.length - 1);

  return quote + chance.pickone(ending);
};

