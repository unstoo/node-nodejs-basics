import fs from 'node:fs';
import { createGzip } from 'node:zlib';

const source = process.cwd() + '/src/zip/files/fileToCompress.txt';
const target = process.cwd() + '/src/zip/files/archive.gz';

const compress = async () => {
    fs.createReadStream(source)
        .pipe(createGzip())
        .pipe(fs.createWriteStream(target));
};

await compress();
