# Serverless Boilerplate with Serverless Framework, ExpressJS and TypeScript

<p align="center">
  <a href="https://creativedesignsguru.com/"><img src="https://repository-images.githubusercontent.com/341987132/6a6a5100-777a-11eb-8b21-8c8c71881eb2" alt="Serverless Boilerplate Banner"></a>
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
- ✨ HTTP Api instead of API gateway for cost optimization
- 💨 Live reload

### Philosophy

- Minimal code
- 🚀 Production-ready

### Premium Themes ([Nextjs Themes](https://creativedesignsguru.com/category/nextjs/))

| [Green Nextjs Landing Page Template](https://creativedesignsguru.com/landing-green-modern-nextjs-theme/) | [Indigo Nextjs Tailwind Theme](https://creativedesignsguru.com/landing-indigo-modern-react-theme/) |
| --- | --- |
| [![Green Nextjs Landing Page Template](https://creativedesignsguru.com/assets/images/themes/landing-green-modern-nextjs-theme-xs.png)](https://creativedesignsguru.com/landing-green-modern-nextjs-theme/) | [![Indigo Nextjs Tailwind Theme](https://creativedesignsguru.com/assets/images/themes/landing-indigo-modern-nextjs-theme-xs.png)](https://creativedesignsguru.com/landing-indigo-modern-react-theme/) |

| [Purple Saas Nextjs Theme](https://creativedesignsguru.com/landing-purple-modern-react-theme/) | [Blue Landing Page Nextjs Theme](https://creativedesignsguru.com/landing-blue-modern-react-theme/) |
| --- | --- |
| [![Purple Saas Nextjs Theme](https://creativedesignsguru.com/assets/images/themes/landing-purple-modern-nextjs-theme-xs.png)](https://creativedesignsguru.com/landing-purple-modern-react-theme/) | [![Blue Landing Page Nextjs Theme](https://creativedesignsguru.com/assets/images/themes/landing-blue-modern-nextjs-theme-xs.png)](https://creativedesignsguru.com/landing-blue-modern-react-theme/) |

### Requirements

- Node.js and npm

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

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2020

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com)

[![Sponsor Serverless Boilerplate Express TypeScript](https://cdn.buymeacoffee.com/buttons/default-red.png)](https://www.buymeacoffee.com/ixartz)
