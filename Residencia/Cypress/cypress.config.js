const { defineConfig } = require("cypress");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ 
  path: path.resolve(__dirname, '.env') 
});

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: process.env.BASE_URL,
    env: {
      VALID_USER: process.env.VALID_USER,
      VALID_PASSWORD: process.env.VALID_PASSWORD,
      INVALID_USER: process.env.INVALID_USER,
      INVALID_PASSWORD: process.env.INVALID_PASSWORD, 
    },
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});