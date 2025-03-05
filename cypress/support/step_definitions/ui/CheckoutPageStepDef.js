import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CheckoutPage from "../../../e2e/pageobjects/classes/CheckoutPage";
import CommonDriver from "../../../e2e/pageobjects/classes/CommonDriver";

const checkoutPage = new CheckoutPage();
const commonDriver = new CommonDriver();

Then("The checkout page title should be {string}", (expectedTitle) => {
  commonDriver
    .getElmntFrmNickName("checkoutPage", "title")
    .invoke("text")
    .should("eq", expectedTitle);
});

When("User enters {string} as the first name", (firstName) => {
  checkoutPage.enterFirstName(firstName);
});

When("User enters {string} as the last name", (lastName) => {
  checkoutPage.enterLastName(lastName);
});

When("User enters {string} as the postal code", (postalCode) => {
  checkoutPage.enterPostalCode(postalCode);
});

When("User clicks continue", () => {
  checkoutPage.clickContinue();
});

When("User clicks cancel", () => {
  checkoutPage.clickCancel();
});

Then("User should be redirected to the checkout step two page", () => {
  cy.url().should("include", "/checkout-step-two.html");
});

Then("User should be redirected to the cart page", () => {
  cy.url().should("include", "/cart.html");
});
