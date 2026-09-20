import { config } from 'dotenv';
config();

import './Global';
import { Bootstrap } from './Bootstrap';

if (process.env.NODE_ENV !== 'production') {
    debugger;
}

let app = new Bootstrap();
app.Init();

import Queue from 'bull';
import { CacheConfig } from './config/CacheConfig';
import { OPCheckoutJob, IPBillmodificationJob } from './jobs';

const queue1 = new Queue('OPCheckOut', {
    redis: {
        db: 0,
        port: CacheConfig.port,
        host: CacheConfig.host,
        password: ''
    }
});

const queue2 = new Queue('IPBillModification', {
    redis: {
        db: 0,
        port: CacheConfig.port,
        host: CacheConfig.host,
        password: ''
    }
});

console.log(CacheConfig);

queue1.process(OPCheckoutJob);
queue1.add({ name: 'daily_1_am' }, { repeat: { cron: '0 0 1 * * *' } })
    .catch((err) => {
        console.error(err);
    });

queue2.process(IPBillmodificationJob);
queue2.add({ name: 'daily_2_am' }, { repeat: { cron: '0 0 2 * * *' } })
    .catch((err) => {
        console.error(err);
    });