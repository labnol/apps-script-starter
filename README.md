![Google Apps Script Development with ES6](https://digitalinspiration.com/images/google-apps-script-development.png)

## Google Apps Script Development 💯

Please follow the 👉 **[step-by-step video tutorial](https://www.youtube.com/watch?v=KxdCIbeO4Uk)** 👈 for quickly getting started with Apps Script development inside Visual Studio Code. You can build GSuite add-ons, web applications and workflow automation routines with next-generation JavaScript.

## Build with Google Apps Script 🚀

The Apps Script Starter kit makes it easy for you to setup a modern development environment and build workflow. Here's everything that's included in the starter kit to get you started:

#### Babel

Write code using ES6 features like arrow functions, destructuring, classes, template literals, and the Babel transpiler will transform your ECMAScript 2015/2017 code to ES5 that Apps Script can understand.

#### Webpack

Webpack is a powerful tool for bundling JavaScript modules. Developers can structure code in directory and Webpack creates a minimized and optimized bundle for pushing to production.

#### ESLint

A popular linting engine that analyzes your JavaScript code for correctness and highlights the errors in real time before you even compile the code, thus reducing the development time.

#### Google CLASP

A command line utility for working with Google Apps Script projects. You can develop code locally and push it to production, manage your manifest file, deploy web apps and publish new versions of apps.

#### Visual Studio Code

This incredibly powerful source code editor from Microsoft provides an integrated development environment and has built-in support for Emmet, Intellisense for code autocompletion, Command Line Terminal, Git integration, Node.js , TypeScript and more.

#### Prettier

A code formatter that will beautify your JavaScript, JSON, HTML and CSS stylesheets according to a set of rules and styles widely accepted by programmers.

#### Airbnb

Developers have their own unique style of writing code. [Airbnb's JavaScript style guide](https://github.com/airbnb/javascript/blob/master/README.md#airbnb-javascript-style-guide-) outlines how JavaScript code should be written and adheres to the rules.

## Getting Started 🏃🏼

![Google Apps Script - Setup Development Environment](https://www.labnol.org/media/npm-install.gif)

Setting up a modern development environment for building Google Apps Script projects is easy and quick (**[video tutorial](https://www.youtube.com/watch?v=KxdCIbeO4Uk)**). You also need to install Node.js which includes the npm package manager.

1\. Clone the repository and install npm dependencies

```
git clone https://github.com/labnol/apps-script-starter my-project
cd my-project
npm install
```

2\. Log in to Google clasp and authorize with your Google account.

```
npx clasp login
```

3\. Create a new Google Script bound to a Google Sheet (or set the type as standalone to create a standalone script in your Google Drive)

```
npx clasp create --type sheets --title "My Apps Script Project" --rootDir ./dist
```

4\. Include the necessary [OAuth Scopes](https://github.com/labnol/apps-script-starter/blob/master/scopes.md) in the [appsscript.json](https://github.com/labnol/apps-script-starter/blob/master/appsscript.json) file

5\. Deploy the project

```
npm run deploy
```

The `dist` directory contains the bundled code that is pushed to Google Apps Script.

### The .claspignore file

The `.claspignore` file allows you to specify file and directories that you do not wish to not upload to your Google Apps Script project via `clasp push`.

The default `.claspignore` file of the Apps Script Starter kit will push all the JS and HTML inside the `rootDir` folder and ignore all the other files.

### The .eslintrc file

This build uses [eslint-plugin-googleappsscript](https://github.com/selectnull/eslint-plugin-googleappsscript) to declare global runtime variables. This plugin does not extended by Advanced Services. Therefore, when building, you may receive the message `no-undef`:

```sh
< /tmp/my-project/src/index.js
    10:12 error 'YouTube' is not defined no-undef
```

For resolve this declare the Advanced Service for correct build in the .eslintrc file

```json
{
  ...
  "globals": {
    ...
    "YouTube": false
  }
}
```

### Using Git with Google Apps Script

![Google Apps Script - Github](https://www.labnol.org/media/github-apps-script.png)

Create a new repository in Github and make a note of the URL of the new repository. Next, open the terminal and run the above commands to push your Apps Script project to Github.

## About the Developer 👨🏼‍💻

<img align="left" width="100" height="100" src="https://pbs.twimg.com/profile_images/1144978512832368640/Ej7Zz7E9_400x400.jpg">

[Amit Agarwal](https://digitalinspiration.com/google-developer) is a web geek and author of [labnol.org](https://www.labnol.org/), a popular tech how-to website. He frequently uses [Google Apps Script](https://ctrlq.org/) to automate workflows and enhance productivity.

The starter kit is used by [Digital Inspiration](https://digitalinspiration.com/) for building popular Google add-ons including [Gmail Mail Merge](https://chrome.google.com/webstore/detail/mail-merge-with-attachmen/nifmcbjailaccmombpjjpijjbfoicppp), [Google Forms Notifications](https://chrome.google.com/webstore/detail/email-notifications-for-f/acknfdkglemcidajjmehljifccmflhkm) and [Document Studio](https://chrome.google.com/webstore/detail/document-studio/nhgeilcelhkmajkfgmgldbinmgjjajlb).

Reach the author on [Twitter](https://twitter.com/labnol) or email amit@labnol.org

### Contributions 🙏🏼

Contributions and feature requests are welcome. If you are using the Google Apps Script starter package and fixed a bug for yourself, please consider submitting a PR!

### License 📄

[MIT License](https://github.com/labnol/apps-script-starter/blob/master/LICENSE) (c) [Amit Agarwal](https://digitalinspiration.com/google-developer)
