
Developer experience first:

- ⚡ [Next.js](https://nextjs.org) for Static Site Generator
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com), include configs multiple themes and smart async design system
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Tailwind CSS and Airbnb configuration)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🚓 Lint git commit with Commitlint
- 📓 Write standard compliant commit messages with Commitizen
- 🎁 Automatic changelog generation with Semantic Release
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript 
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- 🗺️ Sitemap.xml and robots.txt with next-sitemap
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)
- 🌈 Include a FREE minimalist theme
- 💯 Maximize lighthouse score

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- All the Next.js pages are statically generated by default. You can easily switch to SSR adding `getServerSideProps` to your page.
- Nothing is hidden from you, so you have the freedom to make the necessary adjustments to fit your needs and preferences.
- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 16+ and npm

### Getting started

Run the following command on your local environment:

```shell
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open http://localhost:{port} with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── .vscode                         # VSCode configuration
├── public       
│   ├── locales(en,vi,...)          # Public assets folder with mutil language
├── src
│   ├── components                  # Components
│   ├── configs                     # Common configs
│   ├── constants                   # Constants configs
│   ├── containers                  # Containers for page
│   ├── helpers                     # Helpers/utils functions
│   ├── hooks                       # Custom Hook
│   ├── interfaces                  # 
│   ├── layouts                     # Layouts components
│   ├── pages                       # Next JS Pages
│   ├── store                       # Redux toolkit config
│   ├── styles                      # Styles folder
│   ├── types                       # Simple types
└── next-i18next.config.js          # i19next configuration
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### CommitLint

If commitlint not working, please reinstall husky

```shell
$ rm -rf ./node_modules
$ npm uninstall husky
$ npm install husky --save-dev
```

[readmore](https://github.com/conventional-changelog/commitlint)

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also remove unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```shell
npm run build-prod
```

Now, your blog is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.
