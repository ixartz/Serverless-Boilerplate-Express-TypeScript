# [1.2.0](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/compare/v1.1.0...v1.2.0) (2023-05-05)


### Features

* add pretty-ts-errors extension in vscode ([55875be](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/55875be5f6a8e2daa85c27384f6dfd1199b2ce0d))


### Reverts

* remove node.js version 20 support ([0047634](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/004763445d655bf3a24f3b97eeeb50fb9f2e43a7))

# [1.1.0](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/compare/v1.0.0...v1.1.0) (2023-04-07)


### Features

* add .esbuild folder in gitignore file ([b6c9316](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/b6c9316ee0f1fc04781947ffbb50b3a0c693cda8))
* enable vscode debugger with serverless-esbuild ([f641b94](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/f641b94f7526061f02beb85f61cb764ea784d9e4))
* migrate to serverless-esbuild from serverless-bundle ([d4887ef](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/d4887efb122311851614c20f337a8892e6a1ecfd))
* remove .esbuild folder ([dfe1991](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/dfe1991f12edd02f9684fd728ccbf2817e919f78))
* update package-lock.json file ([4daef9b](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/4daef9b545fa6f920d98f4768177d9023833355f))


### Reverts

* add support for all Node.js 14+, too restrictive with only Node.js 18+ ([56c988e](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/56c988ec898e381fd37827bdf3ae164e2f58d279))

# 1.0.0 (2022-12-22)


### Features

* add commit script in package.json, making easier to commit ([5cfe88e](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/5cfe88e87827dcdbba34991b161ebde265e2527c))
* add example on how to save into MongoDB with Prisma ([73b35d4](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/73b35d40a99f0ebadc8856e8e2525b95ac83d588))
* add Prisma ORM ([67c6fc5](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/67c6fc5edaee518b192e04dce9eb38fb8227f390))
* add support for alias with tsconfig, eslint configuration and jest ([9de953e](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/9de953ef8d3eebba3f8554934f90707c0d92b36f))
* use @swc/jest instead of ts-jest ([6bf059d](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/6bf059d7c8b35979b76bfeaea65fdac67aeb7ee6))


### Reverts

* aws lambda URLs which currently not support by serverless-http plugin ([c060cdf](https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript/commit/c060cdf7afbc0384454bb8d7d350b945892ea54c))
