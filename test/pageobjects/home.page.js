import Page from "./page.js";

class HomePage extends Page {
  /**
   * Seletores do Menu de Navegação
   */
  get loginMenuBtn() {
    return $('a[href="/login"]');
  }
  get deleteAccountBtn() {
    return $('a[href="/delete_account"]');
  }
  get logoutBtn() {
    return $('a[href="/logout"]');
  }

  async clickSignupLogin() {
    await this.loginMenuBtn.click();
  }

  async clickDeleteAccount() {
    await this.deleteAccountBtn.click();
  }

  /**
   * Sobrescrita do método open para a home
   */
  async open() {
    return await super.open("");
  }
}

export default new HomePage();
