# Google Apps Script Starter Kit

[![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-V8-blue)](https://developers.google.com/apps-script)
[![MIT License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/labnol/apps-script-starter/pulls)

**A modern development environment for building Google Apps Script projects with modern web development tools.**

This starter kit provides a boilerplate for developing Google Apps Script projects using modern JavaScript (ES6+) and a local development environment. It includes a curated selection of tools to enhance your development workflow, including code bundling, linting, testing, and deployment.

![Google Apps Script Development with ES6](images/google-apps-script-development.png)

Please follow the 👉 **[step-by-step video tutorial](https://www.youtube.com/watch?v=KxdCIbeO4Uk)** 👈 for quickly getting started with Apps Script development inside Visual Studio Code. It is recommended that you install the [Extension Pack](https://marketplace.visualstudio.com/items?itemName=labnol.google-apps-script) for working with Apps Script files in VS Code.

You can build Google Workspace add-ons (for Google Docs, Slides, Gmail and Google Sheets), web applications and workflow automation routines with next-generation JavaScript.

The starter kit is used by [Digital Inspiration](https://digitalinspiration.com/) for building popular Google add-ons including [Gmail Mail Merge](https://workspace.google.com/marketplace/app/mail_merge_with_attachments/223404411203), [Google Forms Notifications](https://workspace.google.com/marketplace/app/email_notifications_for_google_forms/984866591130) and [Document Studio](https://workspace.google.com/marketplace/app/document_studio/429444628321).

## What's Included

This starter kit comes with a pre-configured set of tools to help you write high-quality Google Apps Script code:

- **[Vite](https://vitejs.dev/):** A next-generation build tool that provides a fast and lean development experience.
- **[Jest](https://jestjs.io/):** A delightful JavaScript testing framework with a focus on simplicity.
- **[ESLint](https://eslint.org/):** A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- **[Prettier](https://prettier.io/):** An opinionated code formatter that enforces a consistent style.
- **[clasp](https://github.com/google/clasp):** The official command-line tool for managing Google Apps Script projects.

## Getting Started

Follow these steps to get your development environment set up and running.

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (which includes npm)
- A Google account

### Installation

1.  **Clone the repository:**

    ```bash
    npx degit labnol/apps-script-starter my-project
    cd my-project
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Log in to clasp:**

    Authorize `clasp` to manage your Google Apps Script projects using your Google account.

    ```bash
    npx clasp login
    ```

4.  **Create a new Google Apps Script project:**

    Create a new script project bound to a Google Sheet or as a standalone script.

    ```bash
    npx clasp create --type sheets --title "My Apps Script Project" --rootDir ./dist
    ```

    This will create a new Google Sheet and a bound script project in your Google Drive.

## Development

This starter kit provides a streamlined development workflow to help you build your Google Apps Script projects efficiently.

### Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This command will watch for changes in your source files and automatically rebuild the project.

### Code Structure

The main source code for your application is located in the `src` directory.

- `src/index.js`: The main entry point for your application.
- `src/html/`: Contains the HTML files for your user interface.
- `src/server/`: Contains the server-side code for your application.

### Writing Code

You can write your code using modern JavaScript (ES6+) features. Vite will automatically transpile your code to a format that is compatible with the Google Apps Script V8 runtime.

## Testing

This starter kit uses [Jest](https://jestjs.io/) for unit testing.

### Running Tests

To run the tests, use the following command:

```bash
npm run test
```

### Writing Tests

You can write tests for your code in files with a `.test.js` extension. The tests are located alongside the files they are testing.

**Note:** You cannot directly test code that has dependencies on Google Apps Script services (e.g., `SpreadsheetApp`, `Logger`). You will need to mock these services in your tests.

## Deployment

To deploy your project to Google Apps Script, run the following command:

```bash
npm run deploy
```

This command will build your project and then use `clasp` to push the bundled code to your Google Apps Script project.

## Configuration

The starter kit includes several configuration files to customize the development environment:

- **`appsscript.json`:** The manifest file for your Google Apps Script project. You can use this file to specify dependencies, OAuth scopes, and other settings.
- **`.clasp.json`:** The configuration file for `clasp`. This file specifies the `scriptId` and `rootDir` for your project.
- **`vite.config.js`:** The configuration file for Vite. You can use this file to customize the build process.
- **`.prettierrc`:** The configuration file for Prettier. You can use this file to customize the code formatting rules.
- **`eslint.config.js`:** The configuration file for ESLint. You can use this file to customize the linting rules.

## Contributing

Contributions, issues, and feature requests are welcome. If you are using this starter kit and have fixed a bug for yourself, please consider submitting a pull request!

## Development Conventions

- **Coding Style:** The project uses Prettier for code formatting and ESLint for linting. The configuration for these tools can be found in `.prettierrc` and `eslint.config.js` respectively.
- **Testing:** The project uses Jest for unit testing. Test files are located alongside the files they are testing and have a `.test.js` extension.
- **Commits:** The project does not have a formal commit message convention, but it is recommended to follow standard practices for writing clear and descriptive commit messages.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Developed by [Amit Agarwal](https://www.labnol.org/about) | [Digital Inspiration](https://digitalinspiration.com/)
