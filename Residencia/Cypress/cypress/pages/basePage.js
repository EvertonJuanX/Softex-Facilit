class BasePage {    
    visit(url) {
        cy.visit(url);
    }

    get(selector) {
        return cy.get(selector);
    }

    click(selector) {
        cy.get(selector).should('be.visible').click();
    }

    type(selector, text) {
        cy.get(selector).should('be.visible').clear().type(text);
    }

    select(selector, option) {
        cy.get(selector).should('be.visible').select(option);
    }

    shouldContainText(text) {
        cy.contains(text).should('be.visible');
    }

    carregarFixture(nomeFixture, callback) {
    return cy.fixture(nomeFixture).then((data) => {
      if (callback && typeof callback === 'function') {
        callback(data); //permite sobrescrever ou modificar os dados
      }
      return data;
    });
  }
}

export default BasePage;