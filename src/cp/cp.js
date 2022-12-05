import * as url from 'url';
import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
    const childPath = url.fileURLToPath(new URL('.', import.meta.url)) + '/files/script.js';
    const child = await fork(childPath, args, { stdio: 'inherit' });
};

// Put your arguments in function call to test this functionality
spawnChildProcess([42, null]);