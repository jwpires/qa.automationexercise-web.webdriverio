import Page from "./page.js";

class SignupPage extends Page {
  /**
   * Define os seletores dos elementos da página de cadastro
   */
  get inputPassword() {
    return $("#password");
  }
  get daysSelect() {
    return $("#days");
  }
  get monthsSelect() {
    return $("#months");
  }
  get yearsSelect() {
    return $("#years");
  }
  get newsletterCheckbox() {
    return $("#newsletter");
  }
  get optinCheckbox() {
    return $("#optin");
  }
  get inputFirstName() {
    return $("#first_name");
  }
  get inputLastName() {
    return $("#last_name");
  }
  get inputAddress() {
    return $("#address1");
  }
  get selectCountry() {
    return $("#country");
  }
  get inputState() {
    return $("#state");
  }
  get inputCity() {
    return $("#city");
  }
  get inputZipcode() {
    return $("#zipcode");
  }
  get inputMobile() {
    return $("#mobile_number");
  }
  get createAccountBtn() {
    return $('button[data-qa="create-account"]');
  }

  /**
   * Preenche os detalhes da conta e endereço
   * @param {Object} userData Objeto contendo os dados do usuário
   */
  async fillAccountDetails(userData) {
    await $("#id_gender1").click(); // Seleciona título Mr.
    await this.inputPassword.setValue(userData.password);
    await this.daysSelect.selectByAttribute("value", "10");
    await this.monthsSelect.selectByVisibleText("May");
    await this.yearsSelect.selectByAttribute("value", "1990");
    await this.newsletterCheckbox.click();
    await this.optinCheckbox.click();
  }

  async fillAddressDetails(userData) {
    await this.inputFirstName.setValue(userData.firstName);
    await this.inputLastName.setValue(userData.lastName);
    await this.inputAddress.setValue(userData.address);
    await this.selectCountry.selectByVisibleText("United States");
    await this.inputState.setValue(userData.state);
    await this.inputCity.setValue(userData.city);
    await this.inputZipcode.setValue(userData.zip);
    await this.inputMobile.setValue(userData.phone);
    await this.createAccountBtn.click();
  }
}

export default new SignupPage();
