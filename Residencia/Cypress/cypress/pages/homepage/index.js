import { elements as el } from './elements';

class HomePage {
  validarLoginComSucesso() {
    cy.url().should('include', el.URL_HOMEPAGE); 
  }
}

export default new HomePage();