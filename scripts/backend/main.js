'use strict';

const readline = require('./readline-input.js');
const meditation = require('./1-meditation.js');
const sttc = require('./2-statistic.js');

function checkItem(item) {  // function for checking items
  const itemInt = parseInt(item); // parsing item into number type
  console.clear();
  if (itemInt === 1) return meditation.start();
  if (itemInt === 2) sttc.stat();
  // for itemInt === 3
  readline.rl.close();
  return;
}

readline.readItem(checkItem);
