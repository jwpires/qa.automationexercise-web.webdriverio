import Page from "./page.js";

class LoginPage extends Page {
  /**
   * Seletores para a seção de Novo Registro (New User Signup!)
   */
  get inputSignupName() {
    return $('[data-qa="signup-name"]');
  }
  get inputSignupEmail() {
    return $('[data-qa="signup-email"]');
  }
  get signupBtn() {
    return $('[data-qa="signup-button"]');
  }

  /**
   * Inicia o fluxo de cadastro inserindo nome e e-mail inicial
   * @param {string} name Nome do usuário
   * @param {string} email E-mail único
   */
  async initiateSignup(name, email) {
    await this.inputSignupName.setValue(name);
    await this.inputSignupEmail.setValue(email);
    await this.signupBtn.click();
  }
}

export default new LoginPage();
