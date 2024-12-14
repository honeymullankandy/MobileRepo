# Mobile Automation Testing

This project demonstrates mobile automation testing using **WebDriverIO**, **BrowserStack**, and **Allure Report**. It automates mobile application testing, captures screenshots for failed test cases, and generates detailed test execution reports.

this frame work has provision to run locally or browserstack
## Tools and Technologies

- **JavaScript**: Used for writing the test scripts.
- **WebDriverIO**: A powerful test automation framework for web and mobile applications.
- **BrowserStack**: A cloud-based platform for testing on real devices.
- **Allure Report**: Used for generating visually appealing test execution reports.
- **Screenshot Capture**: Automatically captures screenshots for failed test cases to assist with debugging.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: Download and install from [Node.js](https://nodejs.org/).
- **WebDriverIO**: A test framework used for automation.
- **Allure Report**: For generating detailed reports.
- **BrowserStack Account**: Sign up at [BrowserStack](https://www.browserstack.com/) for cloud-based device testing.

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/honeymullankandy/APIAutomation.git
cd APIAutomation
npx wdio  this will excute the test case
npx allure open
