# Portfolio (Create React App + Tailwind)

This project is a Create React App scaffolded site with Tailwind CSS and `lucide-react` icons.

Recommended deployment: Vercel (zero-config, automatic deployments from GitHub/GitLab/Bitbucket). Netlify and GitHub Pages are also supported.

Quick start (local)

```bash
# install deps
npm install

# start dev server
npm start

# build for production
npm run build
```

Production build

The production-ready files are generated in the `build/` folder after running `npm run build`.

Deploy options

- Vercel (recommended)
  1. Create a Vercel account and connect your GitHub repository.
  2. Import the project. Vercel auto-detects Create React App and sets the build command to `npm run build` and the output directory to `build`.
  3. Push to your main branch — Vercel will build and deploy automatically.

- Netlify
  1. Create a Netlify account and connect your repo.
  2. Set build command: `npm run build` and publish directory: `build`.
  3. Deploy — Netlify will run builds on your pushes.

- GitHub Pages
  - Option A: Use the `gh-pages` package (simple, deploy from npm scripts):
    1. Install: `npm install --save-dev gh-pages`
    2. Add to `package.json`:
       ```json
       "homepage": "https://<username>.github.io/<repo-name>",
       "scripts": {
         "predeploy": "npm run build",
         "deploy": "gh-pages -d build"
       }
       ```
    3. Run `npm run deploy` to publish to the `gh-pages` branch.
  - Option B: Use GitHub Actions to build and push `build/` to `gh-pages` (recommended for CI).

Notes
- If you want, I can add a GitHub Actions workflow to automatically build and deploy to GitHub Pages or Netlify on push. I can also create a Vercel project for you if you give me repository access or confirm the repo URL.

Contact
- If you want me to wire up automated deploy (Vercel, Netlify, or GH Pages), tell me which provider and whether the repo is on GitHub (and share the URL) or if you want manual deploy instructions only.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
