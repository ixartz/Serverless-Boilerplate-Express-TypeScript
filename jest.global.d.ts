/* eslint-disable vars-on-top, no-var */
import type { MongoMemoryReplSet } from 'mongodb-memory-server';

declare global {
  var mongodb: MongoMemoryReplSet;
}

export {};
