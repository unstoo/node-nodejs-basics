import fs from 'node:fs/promises';
import path from 'node:path';

const error = Error('FS operation failed');
const sourcePath = process.cwd() + '/src/fs/files/wrongFilename.txt';
const targetPath = process.cwd() + '/src/fs/files/properFilename.md';

const rename = async () => {
    let sourceExists;
    let targetExists;

    try {
        sourceExists = await (await fs.stat(sourcePath)).isFile();
    } catch (e) { }
    if (sourceExists == false) throw error;

    try {
        targetExists = await (await fs.stat(targetPath)).isFile();
    } catch (e) { }
    if (targetExists == true) throw error;

    await fs.rename(sourcePath, targetPath)

};

await rename();

