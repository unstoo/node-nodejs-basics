import path from 'node:path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import * as url from 'url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${url.fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${url.fileURLToPath(new URL('.', import.meta.url))}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export const module = {
    unknownObject,
    myServer,
};

