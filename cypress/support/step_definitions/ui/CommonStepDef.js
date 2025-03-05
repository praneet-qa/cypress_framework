import { Then } from "@badeball/cypress-cucumber-preprocessor";
import CommonDriver from "../../../e2e/pageobjects/classes/CommonDriver";

const commonDriver = new CommonDriver();

Then("User should be redirected to the {string} page", (pageName) => {
  switch (pageName.toLowerCase()) {
    case "inventory":
      cy.url().should("include", "/inventory.html");
      commonDriver
        .getElmntFrmNickName("productsPage", "product_label")
        .invoke("text")
        .should("eq", "Products");
      break;

    case "cart":
      cy.url().should("include", "/cart.html");
      break;

    case "checkout":
      cy.url().should("include", "/checkout-step-one.html");
      commonDriver
        .getElmntFrmNickName("checkoutPage", "title")
        .invoke("text")
        .should("eq", "Checkout: Your Information");
      break;

    case "checkout step two":
      cy.url().should("include", "/checkout-step-two.html");
      break;

    default:
      throw new Error(`Page "${pageName}" not defined in redirections`);
  }
});
