'use strict';

const readline = require('readline');
const console = require('console');
const main = require('./main.js');
const emitter = require('./EE.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const read = {
  readItem(log, fn) { // function for reading menu items
    log ? main.name = log : 0;
    console.clear();
    rl.question(
      'Select an item:\n 1 - meditation\n 2 - statistics\n 3 - settings\n' +
    ' 4 - exit\n'
      , fn);
  },
  readLoud(fn) { // function for reading loud
    console.clear();
    rl.question(
      'New loud: '
      , fn);
  },
  readOption(fn) { // function for reading settings options
    console.clear();
    rl.question(
      'Select an item:\n 1 - Change loud of assistance voice\n' +
      ' 2 - Change loud of music\n 3 - Clean statistic\n 4 - Share app\n' +
      ' 5 - Logout\n'
      , fn);
  },
  readTime(fn) { // function for reading the time
    console.clear();
    rl.question(
      'Please enter the time what you want to maditate (MM:SS): '
      , fn);
  },
  readName(fn) { // function for reading user name
    console.clear();
    rl.question(
      'Please, enter your name: '
      , fn);
  },
  readSoc(fn) { // function for reading social service
    console.clear();
    rl.question(
      'Select an item:\n 1 - Facebook\n 2 - Instagram\n 3 - Twitter\n'
      , fn);
  },
  readImpress(fn) { // function for reading impression of this app
    console.clear();
    rl.question(
      'What is your impression of this app?\n'
      , fn);
  },
  quesToShare(fn) { // function to ask user about sharing
    rl.question(
      'Do you want to share your result?\n'
      , fn);
  },
  back() { // function to make a loop
    rl.question('\nPress Enter ', () => {
      emitter.emit('loop');
    });
  },
  auth(fn) {
    rl.question('login: ', (login) => {
      rl.question('password: ', (password) => fn(login, password));
    });
  }
};

module.exports = {
  rl,
  readItem: read.readItem,
  readTime: read.readTime,
  readName: read.readName,
  readOpt: read.readOption,
  readLoud: read.readLoud,
  readSoc: read.readSoc,
  readImpr: read.readImpress,
  ques: read.quesToShare,
  back: read.back,
  auth: read.auth
};
