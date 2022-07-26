# Telnyx. Testing website with Cypress+Cucumber

## To run the project:<br>

1. Install Cypress<br>
```
npm install cypress
```

2. Install cypress-cucumber-preprocessor<br>
```
npm install @badeball/cypress-cucumber-preprocessor
```

3. Configure specPattern with "**/*.feature", using EG. cypress.config.js<br>
```
import { defineConfig } from "cypress";
export default defineConfig({
  e2e: {
    specPattern: "**/*.feature"
  }
});
```

4. Add following to package.json<br>
```
{
  "dependencies": {
    "@badeball/cypress-cucumber-preprocessor": "latest"
  },
  "cypress-cucumber-preprocessor": {
    "json": {
      "enabled": true
    }
  }
}
```

5. Install cypress-browserify-preprocessor<br>
```
npm install --save-dev @cypress/browserify-preprocessor
```

6. Configure cypress.config.js<br>
```
const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
});
```

## To run Cucumber reporter:<br>
1. Install Cucumber reporter:<br>
```
npm install multiple-cucumber-html-reporter --save-dev
```
2. Download [cucumber-json-formatter](https://github.com/cucumber/json-formatter/releases/tag/v19.0.0) according to your OS.
  - and rename this file to `cucumber-json-formatter`
3. Run headless test script:<br>
```
npm run cypress:execution
```
4. Generate report:<br>
```
node cucumber-html-report.js
```

Status of Last Deployment:<br>
<img src="https://github.com/Guillermo-Jiotto/LQ-learning-Cypress-Cucumber-Telnyx/workflows/GH-Actions-Cypress-Cucumber/badge.svg?branch=main"><br>