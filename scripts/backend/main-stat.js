'use strict';

const readline = require('./readline-input.js');
const filesys = require('./fsw.js');
const mn = require('./main.js')

class User {

  constructor(name) {
    this.name = name;
    this.maxStreak = 0;
    this.currentStreak = 0;
    this.total = 0;
    this.dates = [];
    this.timePerDay = [];
  }
}

function session(min) {
  const currentDay = (new Date()).getTime();
  const lastDay = Date.parse(this.dates[this.dates.length - 1]);
  const pause =  ((currentDay - lastDay) / 86400000);
  this.total += min;
  (!pause) ? this.currentStreak = 1 : 0;
  (pause >= 1 && pause < 2) ? this.currentStreak += 1 : 0;
  (pause >= 2) ? this.currentStreak = 1 : 0;
  if (this.currentStreak > this.maxStreak) {
    this.maxStreak = this.currentStreak;
  }
  const year = (new Date()).getFullYear();
  let month =  (new Date()).getMonth() + 1;
  const day = (new Date()).getDate();
  month = (month < 10) ? '0' + month : month;
  const currentDate = year + '.' + month + '.' + day;
  if (currentDate === this.dates[this.dates.length - 1]) {
    this.timePerDay[this.timePerDay.length - 1] += min;
  } else {
    this.dates.push(currentDate);
    this.timePerDay.push(min);
  }
  console.log('Meditation time: ' + min + ' min');
  console.log('Streak: ' + this.currentStreak + ' days');
}

function stat() {
  console.log('Your current streak: ' + this.currentStreak);
  console.log('Your best streak: ' + this.maxStreak);
  console.log('Total meditation time: ' + this.total);
  let i;
  for (i = 0; i < this.dates.length; i++) {
    console.log(new Date(this.dates[i]).toString() +
    ' Meditation time: ' + (this.timePerDay[i]) + ' min');
  }
}

function main(choice, min, login) {
  const data = filesys.readStat();
  let currUser;
  if (data[login]) {
    currUser = data[login];
  } else {
    currUser = new User(login);
  }
  if (choice === 'stat') {
    stat.call(currUser);
  }
  if (choice === 'ses') {
    session.call(currUser, min);
    data[login] = currUser;
    filesys.writeStat(data);
  }
}

module.exports = {
  main,
  User
}
