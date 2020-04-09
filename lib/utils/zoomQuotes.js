const chance = require('chance').Chance();

module.exports = function getSentence() {
  const favorites = ['I never forget a plague sore.', 'Thou hast no one good quality.', 'I never forget a hobby horse.', 'Thy visage maketh onions cry.', 'Thine face sours ripe grapes.', 'Though art a flesh monger a plague sore.', 'As much pleasure just so much joy when thee leave the room.', 'Well every one can master a piece of trash. like you.', 'Your mother was a hamster. and your father smelt of elderberries.', 'To death by slanderous tongue.', 'Thee ever offended thine nostril.', 'Sir fare you are too. saucy.', 'Lady the middle. finger.', 'Thee is not worth ones salt.', 'Thine graces. be not worth sunburning.', 'I prefer a container over yond personality.', 'To putteth. a natural coward without instinct.'];

  // const sentence = 'Good morrow. pardon the intrusion.. it is I. Shade speare.. prepare thy self coward. Thine face sours ripe grapes.... I shall show myself out. good day';

  // const sentence = 'Good morrow. it is I. Shade speare.. prepare thy self coward. .' + chance.pickone(favorites) + 'I shall show myself out. good day';

  // const sentence = 'coward...' + chance.pickone(favorites);

  const sentence = 'Good morrow alchemy. it is I. Shade spear.. allow me to introduce my creators.. Fiona, James, Scott and Cody... I shall show myself out. good day';

  // const sentence = 'prepare thy self cowards. For the most glorious tech talk.';

  return sentence;
};
