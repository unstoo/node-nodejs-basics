import fs from 'node:fs';

const error = Error('FS operation failed');
const sourcePath = process.cwd() + '/src/fs/files/fileToRead.txt';
const target = process.stdout;

const read = async () => {
    const readStream = fs.createReadStream(sourcePath);
    readStream.on('open', () => {
        readStream.pipe(target);
    });
};

await read();
