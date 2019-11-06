'use strict';

const fs = require('fs');
const events = require('./events');
const util = require('util');
const readingPromise = util.promisify(fs.readFile);

events.on('read_file', targetFile => readFile(targetFile));

async function timeToRead(selectedFile){
    try {
        const targetFile = await readingPromise(selectedFile);
        events.emit('file_reading_finished', targetFile);
    } catch (e) {
        events.emit('fileRead_error', e);
    }
}

module.exports = timeToRead;