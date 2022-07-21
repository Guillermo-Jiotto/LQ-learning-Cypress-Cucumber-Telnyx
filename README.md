# Telnyx. Testing website with Cypress+Cucumber

To run the project:<br>

1. Install Cypress<br>
- npm install cypress

2. Install cypress-cucumber-preprocessor<br>
- npm install @badeball/cypress-cucumber-preprocessor

3. Configure specPattern with "**/*.feature", using EG. cypress.config.js<br>
import { defineConfig } from "cypress";<br>
export default defineConfig({<br>
  e2e: {<br>
    specPattern: "**/*.feature"<br>
  }<br>
});<br>

4. Add following to package.json<br>
{<br>
  "dependencies": {<br>
    "@badeball/cypress-cucumber-preprocessor": "latest"<br>
  },<br>
  "cypress-cucumber-preprocessor": {<br>
    "json": {<br>
      "enabled": true<br>
    }<br>
  }<br>
}<br>

5. Install cypress-browserify-preprocessor<br>
- npm install --save-dev @cypress/browserify-preprocessor

6. Configure cypress.config.js<br>
const { defineConfig } = require("cypress");<br>
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");<br>
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");<br>

async function setupNodeEvents(on, config) {<br>
  await preprocessor.addCucumberPreprocessorPlugin(on, config);<br>

  on("file:preprocessor", browserify.default(config));<br>

  // Make sure to return the config object as it might have been modified by the plugin.<br>
  return config;<br>
}<br>

module.exports = defineConfig({<br>
  e2e: {<br>
    specPattern: "**/*.feature",<br>
    supportFile: false,<br>
    setupNodeEvents,<br>
  },<br>
});<br>

To run Cucumber reporter:<br>
1. Install Cucumber reporter:<br>
npm install multiple-cucumber-html-reporter --save-dev<br>
2. Run headless test script:<br>
npm run cypress:execution<br>
3. Generate report:<br>
node cucumber-html-report.js<br>

Status of Last Deployment:<br>
<img src="https://github.com/Guillermo-Jiotto/LQ-learning-Cypress-Cucumber-Telnyx/workflows/GH-Actions-Cypress-Cucumber/badge.svg?branch=main"><br>