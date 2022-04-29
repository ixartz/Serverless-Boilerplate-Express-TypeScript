import serverlessHttp from 'serverless-http';

import { app } from './app';

export const handler = serverlessHttp(app);
