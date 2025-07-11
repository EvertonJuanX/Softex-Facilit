class HomePage {
    validarLoginSucesso() {
        cy.url().should(
            'eq', 'https://fapsoftex.plataformatarget.com.br/web/fap/2025/home#/');
        cy.screenshot('Acesso a homepage')
    }
}

export default new HomePage();