import BasePage from "../basePage";
import { elements as el } from "./elements";

class LoginPage extends BasePage {
  visitar() {
    super.visit("/login")
  }

  preencherUsuario(usuario) {
    this.type(el.USUARIO, usuario);
  }

  preencherSenha(senha) {
    this.type(el.PASSWORD, senha);
  }

  clicarBotaoEntrar() {
    this.click(el.BTN_LOGIN);
  }

  realizarLogin(usuario, senha) {
    this.preencherUsuario(usuario);
    this.preencherSenha(senha);
    this.clicarBotaoEntrar();
  }

  validarMensagemErro() {
    this.shouldContainText(el.ERROR_LOGIN);
  }

  carregarUsuarios() {
    return this.carregarFixture('users', (users) => {
      users.valido.usuario = Cypress.env('VALID_USER');
      users.valido.senha = Cypress.env('VALID_PASSWORD');
      users.invalido.usuario = Cypress.env('INVALID_USER');
      users.invalido.senha = Cypress.env('INVALID_PASSWORD');
    });
  }
}

export default new LoginPage();