![Google Apps Script Development with ES6](https://digitalinspiration.com/images/google-apps-script-development.png)

## Google Apps Script 💯

Use the Apps Script Starter kit to quickly build Google add-ons and web applications with next-generation JavaScript.

The starter kit is used by [Digital Inspiration](https://digitalinspiration.com/) for building Google add-ons include [Gmail Mail Merge](https://chrome.google.com/webstore/detail/mail-merge-with-attachmen/nifmcbjailaccmombpjjpijjbfoicppp), [Google Forms Notifications](https://chrome.google.com/webstore/detail/email-notifications-for-f/acknfdkglemcidajjmehljifccmflhkm) and [Document Studio](https://chrome.google.com/webstore/detail/document-studio/nhgeilcelhkmajkfgmgldbinmgjjajlb).

For help, please contact [Amit Agarwal](https://twitter.com/labnol) amit@labnol.org

## Developing with Apps Script 🚀

The Apps Script Starter kit makes it easy for you to quickly setup a modern development environment and build workflow. Here's everything that's included in the starter kit to get you started:

#### Babel

Write code using ES6 features like arrow functions, destructuring, classes, template literals, and the Babel transpiler will transform your ECMAScript 2015/2017 code to ES5 that Apps Script can understand.

#### ESLint

A popular linting engine that analyzes your JavaScript code for correctness and highlights the errors in real time before you even compile the code, thus reducing the development time.

#### Webpack

Webpack is a powerful tool for bundling JavaScript modules. Developers can structure code in directory and Webpack creates a minimized and optimized bundle for pushing to production.

#### Google CLASP

A command line utility for working with Google Apps Script projects. You can develop code locally and push it to production, manage your manifest file, deploy web apps and publish new versions of apps.

#### Visual Studio Code

This incredibly powerful source code editor from Microsoft provides an integrated development environment and has built-in support for Emmet, Intellisense for code autocompletion, Command Line Terminal, Git integration, Node.js , TypeScript and more.

#### Prettier

A code formatter that will beautify your JavaScript, JSON, HTML and CSS stylesheets according to a set of rules and styles widely accepted by programmers.

#### AirBnB

Developers have their own unique style of writing code. AirBnB's JavaScript style guide outlines how JavaScript code should be written and adheres to the rules.

## Getting Started 🏃🏼

![Google Apps Script - Setup Development Environment](https://www.labnol.org/media/npm-install.gif)

Setting up a modern development environment for building Google Apps Script projects is easy and quick. You also need to install Node.js which includes the npm package manager.

1\. Clone the repository, remove the git history and install npm dependencies
```
git clone https://github.com/labnol/apps-script-starter my-project
cd my-project
rm -rf .git
git ini
npm install
```

2\. Log in to Google clasp and authorize with your Google account.
```
npx clasp login
```

3\. Create a new Google Script bound to a Google Sheet (or set the type as standalone to create a standalone script in your Google Drive)
```
npx clasp create --type sheets --title "My First Apps Script Project" --rootDir ./dist
```

4\. Include the necessary OAuth Scopes in the appsscript.json file

5\. Deploy the project
```
npm run deploy
```

The `dist` directory contains the bundled code that is pushed to Google Apps Script.

## About the Developer 👨🏼‍💻

[Amit Agarwal](https://digitalinspiration.com/google-developer) is a web geek and author of [labnol.org](https://www.labnol.org/), a popular tech how-to website. He frequently uses [Google Apps Script](https://ctrlq.org/) to automate workflows and enhance productivity.

Reach him on [Twitter](https://twitter.com/labnol) or email amit@labnol.org

#### Contributions 🙏🏼

Contributions and feature requests are welcome. If you are using the Google Apps Script starter package and fixed a bug for yourself, please consider submitting a PR!

#### License 📄

[MIT License](https://github.com/labnol/apps-script-starter/blob/master/LICENSE) (c) [Amit Agarwal](https://digitalinspiration.com/google-developer)

[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
