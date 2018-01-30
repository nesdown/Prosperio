'use strict';

const readline = require('./readline-input.js');
const FB = require('facebook-node');
const Twitter = require('twitter');
const Client = require('instagram-private-api').V1;
const storage =
  new Client.CookieFileStorage(__dirname + '/cookies/someuser.json');
const EE = require('./EE.js');

function impr(serv, param, time) {
  readline.readImpr(par => main(serv, param, time, par.toString()));
}

function main(serv, param, time, opinion) {
  let body; // body of post message
  if (param === 'main') {
    body = opinion + '\nP.S. I meditated for ' + time + ' minutes totaly\n' +
    'Via https://github.com/batovpasha/Prosperio-console';
  }
  if (param === 'med') {
    body = 'I just finished my meditation session.\n' +
    'That was most harmonious ' + time +
    ' minutes of my day\n' + opinion + '\n' +
    'Via https://github.com/batovpasha/Prosperio-console';
  }
  if (serv === '') readline.back();
  if (serv === 1) facebook(body);
  if (serv === 2) readline.auth(instagram.bind(null, body));
  if (serv === 3) twitter(body);
}

function facebook(body) {
  console.clear();
  console.log('Please, wait...');
  FB.setAccessToken('EAACEdEose0cBAFjrRX9rBLZBgZBXg09uSWWSwogbDhET7VeQByhfBaoP8wsWUyZAZCq69cTUve5LcjQvZCPLeutVOkLNGIdkg9oqLYSKEyZCTPysln5dNOxhZA9DFnv8ZBRv1dakm8K8bYl9bQqRlACr8CdAoKssZBKwZBXBAc4v7YMCayHIKzASk3u8La6IPoxbO9wGIZBgOcdTQZDZD');
  FB.api('me/feed', 'post', { message: body }, (res) => {
    console.clear();
    if (!res || res.error) {
      console.log('We can`t post your message');
      readline.back();
    }
    console.log('Your message posted');
    readline.back();
  });
}

function twitter(body) {
  const client = new Twitter({
    consumer_key: 'T6HUNVAmhQvtNQqedu8gwVolU',
    consumer_secret: 'X6mnfsC5KqNpWc1ykXVE2pp2w8X9NkZJu3ReJX4L7sC9RskwBT',
    access_token_key: '2427502239-SiXhIMLg1pEdmmqeMj9tUtOfJt6mFSHEaKKnfNQ',
    access_token_secret: 'lJJ4PxOY50miPhDP3EVWskiiBaH8j7Tzm9ykF25t762NG'
  });
  client.post('statuses/update', { status: body }, (error) => {
    if (!error) {
      console.log('Your message posted');
      readline.back();
    } else {
      console.log('We can`t post your message');
      readline.back();
    }
  });
}


function instagram(body, login, password) {
  const device = new Client.Device(login);
  Client.Session.create(device, storage, login, password);
  const session = new Client.Session(device, storage);
  Client.Upload.photo(session, './post-photo/logo.jpg')
    .then((upload) => {
      console.log('Please, wait...');
      return Client.Media.configurePhoto(session, upload.params.uploadId, body);
    })
    .then(() => {
      console.log('photo was upload');
      readline.back();
    });
}

function qsn(min, par) {
  if (par === 'yes') readline.readSoc(par => impr(parseInt(par), 'med', min));
  else EE.emit('loop');
}

module.exports = {
  main,
  qsn,
  twitter,
};
