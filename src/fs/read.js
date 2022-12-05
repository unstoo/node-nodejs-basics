import fs from 'node:fs/promises';

const error = Error('FS operation failed');
const sourcePath = process.cwd() + '/src/fs/files/fileToRead.txt';

const read = async () => {
    let sourceExists = false;

    try {
        sourceExists = await (await fs.stat(sourcePath)).isFile();
    } catch (e) { }
    if (sourceExists == false) throw error;

    const data = await fs.readFile(sourcePath);

    console.log(data.toString());

};

await read();

