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
    baseUrl: 'https://telnyx.com',
    viewportWidth: 1440,
    viewportHeight: 780,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000
  },
  chromeWebSecurity: false
});
