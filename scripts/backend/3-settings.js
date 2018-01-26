'use strict';

const readline = require('./readline-input.js');
const filesys = require('./fsw.js');
const options = {
  changeVoiceLoud: function changeVoiceLoud(sets, loud){
    readline.rl.close();
    if(0<=loud<=100){
      sets.voice = parseInt(loud);
      filesys.writeSet(sets);
    }
  },

  changeMusicLoud: function changeMusicLoud(sets, loud){
    readline.rl.close();
    if(0<=loud<=100){
      sets.music = parseInt(loud);
      filesys.writeSet(sets);
    }
  }
}

function main(opt){
  const settings = filesys.readSet();
  const optNumber = parseInt(opt);

  if(optNumber === 1){
    readline.readLoud(options.changeVoiceLoud.bind(null, settings));
  }
  if(optNumber === 2){
    readline.readLoud(options.changeMusicLoud.bind(null, settings));
  }
  if(optNumber === 3){
    console.clear();
    readline.rl.close();
    filesys.clean();
  }
}

module.exports = main;
