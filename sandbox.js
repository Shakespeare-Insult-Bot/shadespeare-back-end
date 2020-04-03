const MarkovChain = require('markovchain');
const chance = require('chance').Chance();


const { text: genericText } = require('./lib/data/genericToShakespeare');
const { text: midSummerText } = require('./lib/data/midsummer-nights-dream');
const { text: montyText } = require('./lib/data/monty-python.js');
const { text: muchAdoText } = require('./lib/data/much-ado-data');
const { text: oShakeText } = require('./lib/data/o-shakespear-insults');
const { text: ourText } = require('./lib/data/our-insults');
const { text: shakeText } = require('./lib/data/shakespeare-insults');
const { text: twelfthText } = require('./lib/data/twelfth-night');


// const endCondition = function(sentence) {

//   if(sentence.split(' ').length >= 30) return;
// };

function makeTwit() {

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
}

console.log('tweet: ', makeTwit());
