import fs from 'node:fs';
import crypto from 'node:crypto';

const sourcePath = process.cwd() + '/src/hash/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    const hash = crypto.createHash('sha256', 'secret');
    const readStream = fs.createReadStream(sourcePath);

    readStream.on('readable', () => {
        const data = readStream.read();
        if (data)
            hash.update(data);
        else {
            console.log(`${hash.digest('hex')}`);
        }
    });
};

await calculateHash();

