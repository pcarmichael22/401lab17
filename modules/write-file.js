
const fs = require('fs');
const util = require('util');
const writeFilePromise = util.promisify(fs.writeFile);
const events = require('./events');

events.on('write', filename => updateTheFile(filename));

let file = process.argv.slice(2).shift();

async function updateTheFile(filename) {
    try {
        await writeFilePromise(file, Buffer.from(filename));
        events.emit('fileWrite_finished');
    } catch (e) {
        events.emit('fileWrite_error', e)
    }
}

module.exports = updateTheFile;
