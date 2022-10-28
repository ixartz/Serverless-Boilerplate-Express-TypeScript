import { execa } from 'execa';
import { MongoMemoryReplSet } from 'mongodb-memory-server';
import pRetry from 'p-retry';

let mongodb: MongoMemoryReplSet;

const prismaDbPush = async () => {
  await execa(
    'prisma',
    ['db', 'push', '--accept-data-loss', '--force-reset', '--skip-generate'],
    {
      preferLocal: true,
      stdio: 'ignore',
      env: {
        DATABASE_URL: process.env.MOCK_MONGODB_ENDPOINT,
      },
    }
  );
};

beforeAll(async () => {
  mongodb = new MongoMemoryReplSet({
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

  process.env.MOCK_MONGODB_ENDPOINT = mongodb
    .getUri()
    .replace('/?replicaSet=', '/nextless?replicaSet=');

  await pRetry(prismaDbPush, { retries: 5 });
});

afterAll(async () => {
  await mongodb.stop();
});
