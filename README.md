![caption](https://github.com/mjaroszewski1979/playwright-sel-shop/blob/main/selenium_shop_img.jpg)

# Selenium Shop E2E Tests with Playwright

### This is a TypeScript-based automated end-to-end (E2E) testing project built using Playwright. It is designed to verify the key functionalities of the web application Selenium Shop, a sample e-commerce site. The project follows the Page Object Model (POM) design pattern for clean, scalable, and maintainable test code.

#### The repository is configured to work seamlessly with GitHub Codespaces, allowing users to quickly launch a fully interactive development environment directly from the browser.

## Features
* E2E Testing: Validates critical user flows such as login, product selection, cart operations, and checkout.
* Page Object Model: Organizes selectors and test logic into reusable, modular components.
* GitHub Codespace Support: Enables instant development and testing setup in a cloud-based VS Code environment.
* Test Reporting: Integrated Playwright test reporting for quick feedback and visibility.

## Quick Start in GitHub Codespace
#### Click the green "Code" button above and choose "Open with Codespaces" to start this project directly in your browser using VS Code.

## Local Installation
1. Clone the repository
```bash
git clone https://github.com/mjaroszewski1979/playwright-sel-shop.git
cd playwright-sel-shop
```

2. Install dependencies
```bash
npm install
```

3. Run tests

To run all E2E tests:

```bash
npx playwright test
```

To view test reports:

```bash
npx playwright show-report
```

## Folder Structure
```bash
selenium-shop/
├── node_modules/         # Node dependencies
├── src/                  # Page objects and helper functions
├── tests/                # E2E test files
├── test-results/         # Test result artifacts
├── playwright.config.ts  # Playwright configuration
├── .devcontainer/        # GitHub Codespaces configuration
├── package.json
└── tsconfig.json
```

## Technologies Used
* Playwright: Framework for end-to-end browser automation.
* TypeScript: Strongly typed superset of JavaScript for better code reliability.
* Page Object Model: Design pattern for managing UI test elements.
* VS Code + GitHub Codespaces: Integrated cloud development environment.

## GitHub Codespace Configuration
This project includes a .devcontainer folder with configuration to ensure a ready-to-use environment in Codespaces. It installs necessary dependencies and launches the appropriate VS Code setup.

## Contributing
Fork the repository.

Create a new branch:
```
git checkout -b feature-branch
```

Make your changes and commit:
```
git commit -m 'Add new feature'
```

Push to your branch:
```
git push origin feature-branch
```

Open a pull request.

## Contact
#### For questions or feedback, please contact mjaroszewski1979 on GitHub.
