/* eslint-disable import/no-extraneous-dependencies */
import { spawn as spawnCb } from 'cross-spawn';
import { promisify } from 'util';

const spawn = promisify(spawnCb);

export const prismaDbPush = () => {
  return spawn('prisma', ['db', 'push'], {
    stdio: 'inherit',
    env: {
      ...process.env,
    },
  });
};
