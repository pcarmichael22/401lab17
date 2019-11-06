'use strict';

const events = require('./events');

events.on('uppercase', file => handleUpperCase(file));

function handleUpperCase(fileName) {
    let uppercaseFileName = fileName.toString().toUpperCase();
    events.emit('uppercase_done', uppercaseFileName);
}

module.exports = handleUpperCase;