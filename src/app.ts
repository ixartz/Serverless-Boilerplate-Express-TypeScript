import { PrismaClient } from '@prisma/client';
import express, { json } from 'express';
import helmet from 'helmet';

const app = express();
app.use(json());
app.use(helmet());

const prisma = new PrismaClient();

app.get('/', async (_, res) => {
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
