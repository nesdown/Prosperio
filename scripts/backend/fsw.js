'use strict';

const crypto = require('crypto');
const decipher = crypto.createDecipher('aes192', 'it is not a password');
const cipher = crypto.createCipher('aes192', 'it is not a password');
const fs = require('fs');

function read() {
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

function write(data) {
  data = JSON.stringify(data);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  fs.writeFileSync('database', encrypted);
}

module.exports = {
  read,
  write
};
