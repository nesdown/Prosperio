'use strict';

const readline = require('./readline-input.js');
const mainstat = require('./main-stat.js');
const main = require('./main.js');
const emitter = require('./EE.js');


function statistic() {
  mainstat.main('stat', 0, main.name);
  readline.back();
}

function session(min) {
  console.clear();
  mainstat.main('ses', min, main.name);
  readline.back();
}

module.exports = {
  ses: session,
  stat: statistic
};
