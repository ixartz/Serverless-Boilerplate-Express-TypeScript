/* eslint-disable import/no-extraneous-dependencies */
import { MongoMemoryReplSet } from 'mongodb-memory-server';

export default async () => {
  const mongodb = new MongoMemoryReplSet({
    instanceOpts: [
      {
        storageEngine: 'wiredTiger',
      },
      {
        storageEngine: 'wiredTiger',
      },
    ],
  });

  await mongodb.start();

  process.env.MOCK_MONGODB_ENDPOINT = mongodb.getUri();

  globalThis.mongodb = mongodb;
};
