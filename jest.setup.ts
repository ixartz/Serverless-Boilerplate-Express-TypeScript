import { ObjectID } from 'bson';

const databaseName = new ObjectID().toString();

process.env.MOCK_MONGODB_DATABASE_ENDPOINT =
  process.env.MOCK_MONGODB_ENDPOINT?.replace(
    '/?replicaSet=',
    `/${databaseName}?replicaSet=`
  );
