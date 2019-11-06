'use strict';

const events = require('./modules/events');
require('./modules/logger');
require('./modules/read-file');
require('./modules/upperCase');
require('./modules/write-file');

let file = process.argv.slice(2).shift();
events.emit('read_file', file)

events.on('file_reading_finished', (targetFile) => {
  events.emit('filename_to_uppercase', targetFile);
})

events.on('file_toUppercase_done', (targetFile) => {
  events.emit('write_file', targetFile);
})


// This app works by, 
// emitting the read_file function, moving to reading_done, moving to uppercase
// then to uppercase done, then moving to writing, then returning writing done