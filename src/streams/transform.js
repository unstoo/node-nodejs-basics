const transform = async () => {
    process.stdin.on('data', data => {
        const reversed = data.toString().split('').reverse().join('') + '\n';
        process.stdout.write(reversed);
    });
};

await transform();
