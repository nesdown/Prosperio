'use strict';

const readline = require('./readline-input.js');
const mainstat = require('./main-stat.js');

function statistic() {
  readline.readName(mainstat.main.bind(null, 'stat', 0));
}

function session(min) {
  console.clear();
  console.log(min);
  readline.readName(mainstat.main.bind(null, 'ses', min));
}

module.exports = {
  ses: session,
  stat: statistic
};
