# Project Overview

This is a starter kit for developing Google Apps Script projects with modern web development tools. It allows developers to use next-generation JavaScript (ES6+) and provides a local development environment with features like code bundling, linting, and testing.

The project is designed to build Google Workspace add-ons for applications like Google Docs, Sheets, Gmail, and Slides, as well as web applications and workflow automation routines.

## Main Technologies

*   **Google Apps Script:** The runtime environment for the code.
*   **JavaScript (ES6+):** The primary programming language.
*   **Node.js:** Used for managing dependencies and running build scripts.
*   **Vite:** A modern build tool that bundles the JavaScript and other assets for deployment.
*   **Jest:** A testing framework for writing and running unit tests.
*   **ESLint:** A linter to enforce code quality and style.
*   **Prettier:** A code formatter to maintain a consistent code style.
*   **clasp:** The official command-line tool for managing Google Apps Script projects.

## Architecture

The project is structured as follows:

*   `src/`: Contains the main source code for the application.
    *   `index.js`: The main entry point for the application.
    *   `html/`: Contains HTML files for the user interface.
    *   `server/`: Contains server-side code.
*   `dist/`: Contains the bundled code that is deployed to Google Apps Script.
*   `functions/`: Contains custom functions for Google Sheets.
*   `appsscript.json`: The manifest file for the Google Apps Script project, which defines dependencies, OAuth scopes, and other settings.
*   `vite.config.js`: The configuration file for the Vite build tool.
*   `package.json`: Defines the project's dependencies and scripts.

## Building and Running

The following commands are used to build, test, and deploy the project:

*   **Install dependencies:**
    ```bash
    npm install
    ```
*   **Build the project:**
    ```bash
    npm run build
    ```
*   **Build for development and watch for changes:**
    ```bash
    npm run dev
    ```
*   **Run tests:**
    ```bash
    npm run test
    ```
*   **Deploy the project to Google Apps Script:**
    ```bash
    npm run deploy
    ```

## Development Conventions

*   **Coding Style:** The project uses Prettier for code formatting and ESLint for linting. The configuration for these tools can be found in `.prettierrc` and `eslint.config.js` respectively.
*   **Testing:** The project uses Jest for unit testing. Test files are located alongside the files they are testing and have a `.test.js` extension.
*   **Commits:** The project does not have a formal commit message convention, but it is recommended to follow standard practices for writing clear and descriptive commit messages.
