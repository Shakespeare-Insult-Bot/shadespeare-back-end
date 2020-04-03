const MarkovChain = require('markovchain');
const chance = require('chance').Chance();
const fs = require('fs');
const { text: montyText } = require('./lib/data/monty-python.js');
const { text: ourText } = require('./lib/data/our-insults');
const { text: shakeText } = require('./lib/data/shakespeare-insults');
const { text: twelfthText } = require('./lib/data/twelfth-night');
const { text: genericText } = require('./lib/data/genericToShakespeare');

const montyQuotes = new MarkovChain(twelfthText + montyText + ourText + shakeText + genericText);

const startWords = ['I', 'The', 'Thou', 'You'];

console.log(montyQuotes.start(chance.pickone(startWords)).end(15).process());
