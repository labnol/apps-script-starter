![Google Apps Script Development with ES6](https://digitalinspiration.com/images/google-apps-script-development.png)

## Google Apps Script 💯

Use the Apps Script Starter kit to quickly build Google add-ons and web applications with next-generation JavaScript.

The starter kit is used by [Digital Inspiration](https://digitalinspiration.com/) for building Google add-on likes [Gmail Mail Merge](https://chrome.google.com/webstore/detail/mail-merge-with-attachmen/nifmcbjailaccmombpjjpijjbfoicppp), [Google Forms Notifications](https://chrome.google.com/webstore/detail/email-notifications-for-f/acknfdkglemcidajjmehljifccmflhkm) and [Twitter Archiver](https://chrome.google.com/webstore/detail/twitter-archiver/pkanpfekacaojdncfgbjadedbggbbphi?hl=en).

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

Getting started with Google Apps Script is something really easy and quick. First of all, you need to install Node.js which also includes the npm package manager.

1\. Clone the repository and install npm dependencies
```
git clone https://github.com/labnol/apps-script-starter
cd apps-script-starter 
npm install
```        

2\. Log in to Google clasp and authorize with your Google account.
```
npx clasp login
```

3\. Replace the "scriptId" value in the .clasp.json file.

4\. Include the necessary OAuth Scopes in the appsscript.json file

5\. Deploy the project
```
npm run deploy
```
          
The `dist` directory contains the bundled code that is pushed to Google Apps Script.

## About the Developer 👨🏼‍💻

[Amit Agarwal](https://digitalinspiration.com/google-developer) is a web geek and author of [labnol.org](https://www.labnol.org/), a popular tech how-to website. He frequently uses [Google Apps Script](https://ctrlq.org/) to automate workflows enhance productivity. 

Reach him on [Twitter](https://twitter.com/labnol) or email amit@labnol.org

#### Contributions 🙏🏼

Contributions and feature requests are welcome. If you are using the Google Apps Script starter package and fixed a bug for yourself, please consider submitting a PR!

#### License 📄

[MIT License](https://github.com/labnol/apps-script-starter/blob/master/LICENSE) (c) [Amit Agarwal](https://digitalinspiration.com/google-developer)
