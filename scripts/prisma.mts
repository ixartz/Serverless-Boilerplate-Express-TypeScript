import { execa } from "execa";

export const prismaDbPush = async () => {
  await execa(
    "prisma",
    ["db", "push", "--accept-data-loss", "--force-reset", "--skip-generate"],
    {
      preferLocal: true,
      stdio: "ignore",
      env: {
        DATABASE_URL: process.env.MOCK_MONGODB_DATABASE_ENDPOINT,
      },
    }
  );
};
