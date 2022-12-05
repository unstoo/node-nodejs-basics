import fs from 'node:fs/promises';
import path from 'node:path';

const error = Error('FS operation failed');
const sourcePath = process.cwd() + '/src/fs/files';
const targetPath = process.cwd() + '/src/fs/files_copy';

const copy = async () => {
    let sourceDirExists;
    let targetDirExists;

    try {
        sourceDirExists = await (await fs.stat(sourcePath)).isDirectory();
    } catch (e) { }
    if (sourceDirExists == false) throw error;

    try {
        targetDirExists = await (await fs.stat(targetPath)).isDirectory();
    } catch (e) { }
    if (targetDirExists == true) throw error;

    await fs.mkdir(targetPath);

    const files = await fs.readdir(sourcePath);

    files.forEach(fileName => {
        const source = path.resolve(sourcePath, fileName);
        const target = path.resolve(targetPath, fileName);
        fs.readFile(source)
            .then(res => {
                fs.writeFile(target, res);
            });
    });

};

await copy();

