/* eslint-disable import/no-extraneous-dependencies,no-console */
import { MongoMemoryReplSet } from 'mongodb-memory-server';
import pRetry from 'p-retry';

import { prismaDbPush } from './prisma';

let mongodb: MongoMemoryReplSet | null = null;

(async () => {
  mongodb = new MongoMemoryReplSet({
    instanceOpts: [
      {
        port: 27017,
        storageEngine: 'wiredTiger',
      },
      {
        port: 27018,
        storageEngine: 'wiredTiger',
      },
    ],
  });

  await mongodb.start();

  process.env.DATABASE_URL = mongodb
    .getUri()
    .replace('/?replicaSet=', `/modernmern?replicaSet=`);

  await pRetry(prismaDbPush, { retries: 5 });

  console.log(`MongoDB ready - endpoint: ${mongodb.getUri()}`);
})();

process.on('SIGINT', () => {
  if (mongodb) {
    mongodb.stop();
  }

  process.exit();
});
