import fs from 'node:fs';
import { createGunzip } from 'node:zlib';

const target = process.cwd() + '/src/zip/files/fileToCompress.txt';
const source = process.cwd() + '/src/zip/files/archive.gz';

const decompress = async () => {
    fs.createReadStream(source)
        .pipe(createGunzip())
        .pipe(fs.createWriteStream(target));
};

await decompress();
