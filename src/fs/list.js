import fs from 'node:fs/promises';
import path from 'node:path';

const error = Error('FS operation failed');
const sourcePath = process.cwd() + '/src/fs/files';

const list = async () => {
    let sourceDirExists = false;

    try {
        sourceDirExists = await (await fs.stat(sourcePath)).isDirectory();
    } catch (e) { }
    if (sourceDirExists == false) throw error;

    const files = await fs.readdir(sourcePath);

    console.log(files);

};

await list();

