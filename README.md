# Serverless Boilerplate with Serverless Framework 3, ExpressJS and TypeScript [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

<p align="center">
  <a href="https://creativedesignsguru.com/"><img src="https://creativedesignsguru.com/assets/images/themes/serverless-boilerplate-expressjs-typescript.png" alt="Serverless Boilerplate Banner"></a>
</p>

🚀 Serverless Boilerplate is starter code for your backend and REST API based on Serverless framework with Express JS and TypeScript. ⚡️ Made with Serverless framework, Live reload, Offline support, ExpressJS, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Dotenv, VSCode.

Clone this project and use it to create your own backend.

### Features

Developer experience first:

- 🔥 [Serverless framework](https://www.serverless.com)
- 📖 Local support with Serverless Offline
- ⚙️ Environment variable with Serverless Dotenv
- ⚡️ [ExpressJS](http://expressjs.com)
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org) with strict mode
- ✏️ Linter with [ESLint](https://eslint.org) with Airbnb configuration
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for ESLint, Prettier, TypeScript
- ✨ Lambda Function URLs for cost optimization (No API gateway or HTTP API)
- 💨 Live reload

### Philosophy

- Minimal code
- 🚀 Production-ready

### Nextless.js SaaS Boilerplate

Build your SaaS product faster with [React SaaS Boilerplate](https://nextlessjs.com).

[![Nextless JS React SaaS Boilerplate](https://creativedesignsguru.com/assets/images/themes/next-js-saas-starter-kit.jpg)](https://nextlessjs.com)

### Premium Themes

| [Green Nextjs Landing Page Template](https://creativedesignsguru.com/landing-green-modern-nextjs-theme/) | [Purple Saas Nextjs Theme](https://creativedesignsguru.com/landing-purple-modern-react-theme/) |
| --- | --- |
| [![Green Nextjs Landing Page Template](https://creativedesignsguru.com/assets/images/themes/landing-green-modern-nextjs-theme-xs.png)](https://creativedesignsguru.com/landing-green-modern-nextjs-theme/) | [![Blue Landing Page Nextjs Theme](https://creativedesignsguru.com/assets/images/themes/landing-blue-modern-nextjs-theme-xs.png)](https://creativedesignsguru.com/landing-blue-modern-react-theme/) |

Find more [Nextjs Templates](https://creativedesignsguru.com/category/nextjs/).
### Requirements

- Node.js 14+ and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Serverless-Boilerplate-Express-TypeScript.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

The local server is now listening at http://localhost:4000

### Deploy to production

You can deploy to production with the following command:

```
npm run deploy-prod
```

### Things to know

`serverless-offline-plugin` display a red warning in the console `offline: [object Object]`. It's just a warning from [Serverless Offline Plugin](https://github.com/dherault/serverless-offline/blob/b39e8cf23592ad8bca568566e10c3db3469a951b/src/utils/getHttpApiCorsConfig.js). Hope it'll solve in the next release of `serverless-offline-plugin`.

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

[![Sponsor Serverless Boilerplate Express TypeScript](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://www.buymeacoffee.com/ixartz)
