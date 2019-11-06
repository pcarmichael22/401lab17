'use strict';

const events = require('./events');

function logEvents(event, payload){
    let time = new Date();
    console.log({event,time,payload});
}

[
   'read_file', 
   'file_reading_finished',
   'fileRead_error',
   'uppercase',
   'uppercase_done',
   'write', 
   'fileWrite_finished',
   'fileWrite_error',
].forEach(name => events.on(name, payload => logEvents(name, payload)));

exports.log = logEvents;
