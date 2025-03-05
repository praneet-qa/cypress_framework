import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../../e2e/pageobjects/classes/loginPage";
import CommonDriver from "../../../e2e/pageobjects/classes/CommonDriver";

const loginPage = new LoginPage();
const commonDriver = new CommonDriver();

Given("User visits the Sauce Demo login page", () => {
  loginPage.visit();
});

When("User enters {string} as the username", (username_value) => {
  // loginPage.enterUsername(username);
  commonDriver.enterData("loginPage", "username_field", username_value);
});

When("User enters {string} as the password", (password_value) => {
  commonDriver.enterData("loginPage", "password_field", password_value);
});

When("User clicks the login button", () => {
  commonDriver.clickButton("loginPage", "login_button");
});

Then("User should be redirected to the inventory page", () => {
  commonDriver
    .getElmntFrmNickName("productsPage", "product_label")
    .invoke("text")
    .should("eq", "Products");
});

Then("The error message should say {string}", (expectedErrorMessage) => {
  commonDriver
    .getElmntFrmNickName("loginPage", "error_message")
    .should("contain.text", expectedErrorMessage);
});
