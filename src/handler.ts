import type { APIGatewayEvent, Context } from 'aws-lambda';
import serverlessHttp from 'serverless-http';

import { app } from './app';

export const handler = async (event: APIGatewayEvent, context: Context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  return serverlessHttp(app)(event, context);
};
