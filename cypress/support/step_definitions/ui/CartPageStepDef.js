import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CartPage from "../../../e2e/pageobjects/classes/CartPage";
import CommonDriver from "../../../e2e/pageobjects/classes/CommonDriver";

const cartPage = new CartPage();
const commonDriver = new CommonDriver();
let currentCartItem;

When("User clicks on the shopping cart button", () => {
  commonDriver
    .getElmntFrmNickName("productsPage", "shopping_cart_link")
    .click();
});

Then("User verifies the cart item name is {string}", (expectedName) => {
  commonDriver.getElmntFrmNickName("cartPage", "cart_list").within(() => {
    commonDriver
      .getElmntFrmNickName("cartPage", "item_name")
      .contains(expectedName)
      .parents(".cart_item")
      .then(($item) => {
        currentCartItem = $item;
        cy.wrap($item)
          .find(".cart_item_label")
          .find(".inventory_item_name")
          .invoke("text")
          .should("eq", expectedName);
      });
  });
});

Then("User verifies the cart item price is {string}", (expectedPrice) => {
  cy.wrap(currentCartItem)
    .find(".cart_item_label")
    .find(".item_pricebar")
    .find(".inventory_item_price")
    .invoke("text")
    .should("contain", expectedPrice.replace("$", ""));
});

Then("User verifies the cart item quantity is {string}", (expectedQuantity) => {
  cy.wrap(currentCartItem)
    .find(".cart_quantity")
    .invoke("text")
    .should("eq", expectedQuantity);
});

When("User removes {string} from the cart", (productName) => {
  commonDriver.getElmntFrmNickName("cartPage", "cart_list").within(() => {
    cy.contains(".inventory_item_name", productName)
      .parents(".cart_item_label")
      .find(".item_pricebar")
      .find(".btn_secondary.cart_button")
      .click();
  });
});

Then("The cart should show {string} items", (itemCount) => {
  commonDriver
    .getElmntFrmNickName("cartPage", "cart_list")
    .find(".cart_item")
    .should("have.length", parseInt(itemCount));
});

Then("{string} should not be in the cart", (productName) => {
  commonDriver.getElmntFrmNickName("cartPage", "cart_list").within(() => {
    cy.contains(".inventory_item_name", productName).should("not.exist");
  });
});

When("User clicks continue shopping", () => {
  commonDriver.clickButton("cartPage", "continue_shopping_button");
});

When("User clicks checkout", () => {
  commonDriver.clickButton("cartPage", "checkout_button");
});

Then("User should be redirected to the inventory page", () => {
  commonDriver
    .getElmntFrmNickName("productsPage", "product_label")
    .invoke("text")
    .should("eq", "Products");
});

Then("User should be redirected to the checkout page", () => {
  cy.url().should("include", "/checkout-step-one.html");
  commonDriver
    .getElmntFrmNickName("checkoutPage", "title")
    .invoke("text")
    .should("eq", "Checkout: Your Information");
});
