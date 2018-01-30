'use strict';

const readline = require('./readline-input.js');
const filesys = require('./fsw.js');
const emitter = require('./EE.js');
const mn = require('./main.js');
const soc = require('./social.js').main;

const options = {
  changeVoiceLoud(sets, loud) {
    if (0 <= loud && loud <= 100) {
      sets.voice = parseInt(loud);
      filesys.writeSet(sets);
      readline.back();
    } else throw new Error('out of possible loud');
  },

  changeMusicLoud(sets, loud) {
    if (0 <= loud && loud <= 100) {
      sets.music = parseInt(loud);
      filesys.writeSet(sets);
      readline.back();
    } else throw new Error('out of possible loud');
  },
  social(service) {
    const total = filesys.readStat()[mn.name].total;
    const socNumber = parseInt(service);
    if (socNumber === 1) {
      console.log(soc);
      readline.readImpr(par => soc(1, 'main', total, par));
      readline.back();
    }
    if (socNumber === 2) {
      readline.readImpr(par => soc(2, 'main', total, par));
    }
    if (socNumber === 3) {
      readline.readImpr(par => soc(3, 'main', total, par));
    }
  }
};

function main(opt) {
  if (opt === '') emitter.emit('loop');
  else {
    const settings = filesys.readSet();
    const optNumber = parseInt(opt);
    if (optNumber === 1) {
      readline.readLoud(options.changeVoiceLoud.bind(null, settings));
    }
    if (optNumber === 2) {
      readline.readLoud(options.changeMusicLoud.bind(null, settings));
    }
    if (optNumber === 3) {
      console.clear();
      filesys.clean();
      emitter.emit('loop');
    }
    if (optNumber === 4) {
      readline.readSoc(options.social);
    }
    if (optNumber === 5) {
      emitter.emit('start');
    }
  }
}

module.exports = main;
