'use strict';

const sttc = require('./2-statistic.js');
const console = require('console');
const readline = require('./readline-input.js');

const result = (min) => (sttc.ses(min));

const Timer = class {                         // simple countdown timer
  start(minutes, seconds) {
    if (minutes >= 60 || minutes < 0 || seconds >= 60 || seconds < 0) {
      throw new Error('incorrect time format');// error of incorrect time format
    }
    const minutesResult = minutes;
    const i = setInterval(() => {
      console.clear();
      if (minutes >= 10 && seconds >= 10) console.log(`${minutes}:${seconds}`);
      if (minutes < 10 && seconds >= 10) console.log(`0${minutes}:${seconds}`);
      if (minutes >= 10 && seconds < 10) console.log(`${minutes}:0${seconds}`);
      if (minutes < 10 && seconds < 10) console.log(`0${minutes}:0${seconds}`);
      seconds--;
      const timeClear = setTimeout(() => (console.clear()), 1000);
      if (seconds < 0) {
        seconds = 59;
        minutes--;
      }
      if (minutes < 0) {
        clearInterval(i);
        clearTimeout(timeClear);
        console.log(minutesResult);
        result(minutesResult); // call result function for log the result
      }
    }, 1000);
  }
};

const timer = new Timer();

const parseTime = function(time) {   // get the time in string type
  const timeString = time.split(':'); // split the string by ':'
  const minutes = parseInt(timeString[0]); // get the minutes in integer type
  const seconds = parseInt(timeString[1]); // get the seconds in integer type
  timer.start(minutes, seconds); // call the start method
};

const start = () => (readline.readTime(parseTime));

module.exports.start = start;
