/* eslint-disable import/no-extraneous-dependencies */
import type { Prisma, PrismaPromise } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
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

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.MOCK_MONGODB_DATABASE_ENDPOINT,
    },
  },
});

beforeAll(async () => {
  await pRetry(prismaDbPush, { retries: 5 });
});

afterEach(async () => {
  const deleteList: PrismaPromise<Prisma.BatchPayload>[] = [];

  Object.getOwnPropertyNames(prisma).forEach((elt) => {
    if (!elt.startsWith('_') && !elt.startsWith('$')) {
      // TODO: Remove the ts-ignore
      // @ts-ignore
      deleteList.push(prisma[elt].deleteMany({}));
    }
  });

  await Promise.all(deleteList);
});
