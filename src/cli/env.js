const format = ([key, value]) => `${key}=${value}`;
const parseEnv = () => {
    const entries = Object.entries(process.env);
    const result = entries
        .filter(([key]) => key.startsWith('RSS_'))
        .map(entry => format(entry));

    console.log(result.join('; '));
};

parseEnv();