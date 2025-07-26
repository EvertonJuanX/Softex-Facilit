import LoginPage from '../../pages/login/index';

describe('Login', () => {
  let users;

  beforeEach(() => {
    LoginPage.carregarUsuarios().then((dados) => {
      users = dados;
    });

    cy.then(() => {
      LoginPage.visitar();
    });
  });

    it('Login com credenciais válidas', () => {
      LoginPage.realizarLogin(users.valido.usuario, users.valido.senha); 
    });

    it('Login com credenciais inválidas', () => {
      LoginPage.realizarLogin(users.invalido.usuario, users.invalido.senha);
      LoginPage.validarMensagemErro(); 
    });
});