'use strict';

const crypto = require('crypto');
const cipher = crypto.createCipher('aes192', 'it is not a password');
const fs = require('fs');
const login = require('./main.js');

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

function readStatistic() {
  const decipher = crypto.createDecipher('aes192', 'it is not a password');
  let base;
  let crypted;
  try {
    crypted = fs.readFileSync('database').toString();
  } catch (e) {
    base = {};
    return base;
  }
  base = decipher.update(crypted, 'hex', 'utf8');
  base += decipher.final('utf8');
  base = JSON.parse(base);
  return base;
}

function writeStatistic(data) {
  data = JSON.stringify(data);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  fs.writeFileSync('database', encrypted);
}

function readSettings(){
  let data;
  try{
    data = fs.readFileSync('settings.json').toString();
    data = JSON.parse(data);
  } catch (e) {
    data = {};
  }
  if(!data[login.name]){
    data[login.name] = {
      voice: 100,
      music: 100
    };
  }
  return data[login.name];
}

function writeSettings(sets){
  let data;
  try{
    data = fs.readFileSync('settings.json').toString();
    data = JSON.parse(data);
  } catch (e) {
    data = {};
  }
  data[login.name] = sets;
  data = JSON.stringify(data);
  fs.writeFileSync('settings.json', data);
}

function cleanStatistic(){
  let data = readStatistic();
  data[login.name] = new User(login.name);
  writeStatistic(data);
}
module.exports = {
  readStat: readStatistic,
  writeStat: writeStatistic,
  readSet: readSettings,
  writeSet: writeSettings,
  clean: cleanStatistic
};
