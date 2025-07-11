import { elements } from "./elements";

class Login {
    carregarPagina () {
        cy.visit('https://fapsoftex.plataformatarget.com.br/web/fap/login')
    }

    loginSucesso () {
        cy.get(elements.username).type('evertonjuandev@gmail.com')
        cy.get(elements.password).type('faptarget123')
        cy.get(elements.loginButton).click()
    }

    loginInvalido () {
        cy.get(elements.username).type('emailinvalido@gmail.com')
        cy.get(elements.username).type('senhainvalida')
        cy.get(elements.loginButton).click()
        cy.get(elements.loginInvalido, {timeout: 10000}).should('exist')
    }

    validarErroCrendicialInvalida () {
        cy.get(elements.loginInvalido).should('exist')
            .and('contain', 'A autenticação falhou, usuário não cadastrado no sistema.');
    }
}

export default new Login();