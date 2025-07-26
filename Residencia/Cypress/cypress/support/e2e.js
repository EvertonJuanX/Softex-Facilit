// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

//Tratar erros de JavaScript não capturados
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("themeDisplay.getUser is not a function")) {
    return false;
  }

  if (err.message.includes('Highcharts error #16')) {
      return false; 
  }

  return true;
});

//Printar a tela quando falhar e salvar o print c/ nome do teste
afterEach(function () {
  if (this.currentTest.state === 'failed') {
    const testName = this.currentTest.title.replace(/ /g, '_');
    cy.screenshot(`erro-${testName}`);
  }
});