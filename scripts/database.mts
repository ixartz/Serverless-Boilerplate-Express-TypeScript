/* eslint-disable import/no-extraneous-dependencies,no-console */
import { MongoMemoryReplSet } from "mongodb-memory-server";
import pRetry from "p-retry";
import { prismaDbPush } from "./prisma.mjs";

let mongodb: MongoMemoryReplSet | null = null;

(async () => {
  mongodb = new MongoMemoryReplSet({
    instanceOpts: [
      {
        port: 27017,
        storageEngine: "wiredTiger",
      },
      {
        port: 27018,
        storageEngine: "wiredTiger",
      },
    ],
  });

  await mongodb.start();

  process.env.MOCK_MONGODB_DATABASE_ENDPOINT = mongodb
    .getUri()
    .replace("/?replicaSet=", `/modernmern?replicaSet=`);

  await pRetry(prismaDbPush, { retries: 5 });

  console.log(`MongoDB ready - endpoint: ${mongodb.getUri()}`);
})();

process.on("SIGINT", () => {
  if (mongodb) {
    mongodb.stop();
  }

  process.exit();
});
