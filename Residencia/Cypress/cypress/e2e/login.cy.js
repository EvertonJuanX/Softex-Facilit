import Login from '../pages/login/index.js'
import HomePage from '../pages/homepage/index.js'

describe('Login', () => { 
    it('Realizar login com sucesso', () => {
       //Arrange
        Cypress.on('uncaught:exception', (err, runnable) => {
          if (err.message.includes("themeDisplay.getUser is not a function")) {
              return false; 
              }
          });

        Login.carregarPagina();

        //Act
        Login.loginSucesso();

        // Assert
        HomePage.validarLoginSucesso();
    } )

    it('Realizar login inválido', () => {
       //Arrange
        Cypress.on('uncaught:exception', (err, runnable) => {
          if (err.message.includes("themeDisplay.getUser is not a function")) {
              return false; 
              }
          });

        Login.carregarPagina();

        //Act
        Login.loginInvalido();

        //Assert
        Login.validarErroCrendicialInvalida();
    } )
} )