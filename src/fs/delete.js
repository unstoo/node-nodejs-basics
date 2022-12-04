import fs from 'node:fs/promises';

const error = Error('FS operation failed');
const sourcePath = process.cwd() + '/src/fs/files/fileToRemove.txt';

const remove = async () => {
    let sourceExists = false;

    try {
        sourceExists = await (await fs.stat(sourcePath)).isFile();
    } catch (e) { }
    if (sourceExists == false) throw error;

    await fs.rm(sourcePath);
};

await remove();

