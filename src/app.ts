import 'express-async-errors';

import { PrismaClient } from '@prisma/client';
import type { NextFunction, Request, Response } from 'express';
import express, { json } from 'express';
import helmet from 'helmet';

const app = express();
app.use(json());
app.use(helmet());

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.MOCK_MONGODB_DATABASE_ENDPOINT,
    },
  },
});

app.get('/', async (_, res) => {
  await prisma.user.create({
    data: {
      email: 'test@gmail.com',
    },
  });

  res.json({
    msg: 'Hello World',
  });
});

app.use((_, res, _2) => {
  res.status(404).json({ error: 'NOT FOUND' });
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.log(err);
  res.status(500).json();
});

export { app };
