const MarkovChain = require('markovchain');
const chance = require('chance').Chance();


const { text: genericText } = require('./lib/data/genericToShakespeare');
const { text: midSummerText } = require('./lib/data/midsummer-nights-dream');
const { text: montyText } = require('./lib/data/monty-python.js');
const { text: muchAdoText } = require('./lib/data/much-ado-data');
const { text: ourText } = require('./lib/data/our-insults');
const { text: shakeText } = require('./lib/data/shakespeare-insults');
const { text: twelfthText } = require('./lib/data/twelfth-night');

const montyQuotes = new MarkovChain(twelfthText + montyText + ourText + shakeText + genericText + midSummerText + muchAdoText);

const startWords = ['I', 'The', 'Thou', 'You'];

console.log(montyQuotes.start(chance.pickone(startWords)).end(15).process());
