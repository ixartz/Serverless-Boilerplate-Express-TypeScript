/* eslint-disable import/no-extraneous-dependencies */
import { execa } from 'execa';
import pRetry from 'p-retry';

const prismaDbPush = async () => {
  await execa(
    'prisma',
    ['db', 'push', '--accept-data-loss', '--force-reset', '--skip-generate'],
    {
      preferLocal: true,
      stdio: 'ignore',
      env: {
        DATABASE_URL: process.env.MOCK_MONGODB_DATABASE_ENDPOINT,
      },
    }
  );
};

beforeAll(async () => {
  await pRetry(prismaDbPush, { retries: 5 });
});
