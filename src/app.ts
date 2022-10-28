import 'express-async-errors';

import { PrismaClient } from '@prisma/client';
import express, { json } from 'express';
import helmet from 'helmet';

const app = express();
app.use(json());
app.use(helmet());

app.get('/', async (_, res) => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.MOCK_MONGODB_ENDPOINT,
      },
    },
  });

  await prisma.user.create({
    data: {
      email: 'rapidnotreloadreload88@gmail.com',
    },
  });

  res.json({
    msg: 'Hello World',
  });
});

app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

export { app };
