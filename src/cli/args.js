const getPair = (list, index) => '' + list[index] + 'is' + list[index + 1];

const parseArgs = () => {
    const args = process.argv.slice(2);
    const result = [];
    let key = ''
    args.forEach((arg, index) => {
        if (index % 2 === 0) key = arg.substring(2);
        else result.push(key + ' is ' + arg);
    });
    console.log(result.join(', '));
};

parseArgs();