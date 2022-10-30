export default async () => {
  await globalThis.mongodb.stop();
};
