import os from 'node:os';
import {
    Worker, isMainThread, parentPort, workerData
} from 'node:worker_threads';

const coresCount = os.cpus().length;



const performCalculations = async () => {
    const workerPromises = [];

    for (let index = 0; index < coresCount; index++) {
        const p = new Promise((resolve, reject) => {
            const worker = new Worker('./src/wt/worker.js', {
                workerData: 10 + index,
            });
            worker.on('message', res => {
                resolve({ status: 'resolved', data: res });
            });
            worker.on('error', res => {
                reject({ status: 'error', data: null })
            });
        });
        workerPromises.push(p);
    };

    const results = await Promise.all(workerPromises);
    console.log(results)
};

await performCalculations();