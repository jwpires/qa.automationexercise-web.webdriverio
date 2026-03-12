import HomePage from "../pageobjects/home.page.js";
import LoginPage from "../pageobjects/login.page.js";
import SignupPage from "../pageobjects/signup.page.js";

describe("Teste utilizando automation exercise", () => {
  it("Registro de usuário", async () => {
    const timestamp = Date.now();
    const userData = {
      name: "Tester QA",
      email: `qa_auto_${timestamp}@mail.com`,
      password: "Password123!",
      firstName: "John",
      lastName: "Doe",
      address: "Main St, 123",
      state: "California",
      city: "Los Angeles",
      zip: "90001",
      phone: "123456789",
    };

    // Navegar e iniciar processo de signup
    await HomePage.open();
    await HomePage.clickSignupLogin();
    await LoginPage.initiateSignup(userData.name, userData.email);

    // Preencher formulários
    await SignupPage.fillAccountDetails(userData);
    await SignupPage.fillAddressDetails(userData);

    // Prosseguir após criação
    await SignupPage.clickContinue();

    // // Deletar conta para limpeza de dados
    await HomePage.clickDeleteAccount();

    // // --- ASSERT (Verificar) ---
    const statusMessage = await $(".title b");
    await expect(statusMessage).toHaveText("ACCOUNT DELETED!");

    const continueBtn = await $('[data-qa="continue-button"]');
    // await expect(continueBtn).toBeDisplayed();
  });
});
