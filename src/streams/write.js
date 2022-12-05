import fs from 'node:fs';

const target = process.cwd() + '/src/streams/files/fileToWrite.txt';

const write = async () => {
    const writeStream = await fs.createWriteStream(target, { flags: 'a' });

    process.stdin.on('data', chunk => {
        writeStream.write(chunk);
        console.log(chunk.toString());
    });
};

await write();
