/**
 * Classe principal que contém métodos e seletores compartilhados
 * por todos os objetos de página.
 */
export default class Page {
  /**
   * Abre uma subpágina da aplicação ou a URL base
   * @param {string} path Caminho da subpágina (ex: /login)
   */
  async open(path = "") {
    return await browser.url(`https://automationexercise.com/${path}`);
  }

  /**
   * Clica no botão 'Continue' após ações de sucesso
   */
  async clickContinue() {
    const btn = await $('[data-qa="continue-button"]');
    await btn.waitForClickable();
    await btn.click();
  }
}
