'use strict';

const readline = require('./readline-input.js');
const meditation = require('./1-meditation.js');
const sttc = require('./2-statistic.js');
const sets = require('./3-settings.js');
const emitter = require('./EE.js');
const login = {};

function checkItem(item) {  // function for checking items
  console.clear();
  const itemInt = parseInt(item); // parsing item into number type
  if (itemInt === 1) return meditation.start();
  if (itemInt === 2) return sttc.stat();
  if (itemInt === 3) return readline.readOpt(sets);
  if (itemInt === 4) return process.exit();
  emitter.emit('loop');
}

const loop = () => readline.readItem(undefined, checkItem);

emitter.on('loop', loop);

const start = () => {
  readline.readName(par => (readline.readItem(par, checkItem)));
};

emitter.on('start', start);

start();

module.exports = login;
