'use strict';

const readline = require('readline');
const console = require('console');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const read = {
  readItem(fn) { // function for reading menu items
    console.clear();
    rl.question(
      'Select an item:\n 1 - maditation\n 2 - statistics\n 3 - settings\n'
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
  }
};

module.exports = {
  rl,
  readItem: read.readItem,
  readTime: read.readTime,
  readName: read.readName
};
