import os from 'node:os';
import { Worker } from 'node:worker_threads';

const coresCount = os.cpus().length;

const performCalculations = async () => {
    const workerPromises = [];

    for (let index = 0; index < coresCount; index++) {
        const p = new Promise((resolve, reject) => {
            const worker = new Worker('./src/wt/worker.js', {
                workerData: 10 + index,
            });
            worker.on('message', res => resolve(res));
            worker.on('error', res => reject());
        });
        workerPromises.push(p);
    };

    const results = (await Promise.allSettled(workerPromises))
        .map(res => res.status === 'fulfilled' ?
            { status: 'resolved', data: res.value } : { status: 'error', data: null });

    console.log(results)
};

await performCalculations();