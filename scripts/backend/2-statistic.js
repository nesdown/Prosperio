'use strict';

const readline = require('./readline-input.js');
const mainstat = require('./main-stat.js');
const login = require('./main.js');

function statistic() {
  mainstat.main('stat', 0, login.name);
}

function session(min) {
  console.clear();
  mainstat.main('ses', min, login.name);
}

module.exports = {
  ses: session,
  stat: statistic
};
