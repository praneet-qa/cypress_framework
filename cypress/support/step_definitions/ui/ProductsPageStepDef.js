import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../../../e2e/pageobjects/classes/ProductsPage";
import CommonDriver from "../../../e2e/pageobjects/classes/CommonDriver";

const productsPage = new ProductsPage();
const commonDriver = new CommonDriver();
let currentProductItem;

Given("User is on the Products page", () => {
  productsPage.visit();
});

Then("The products should be displayed", () => {
  commonDriver
    .getElmntFrmNickName("productsPage", "product_item")
    .should("have.length.greaterThan", 0);
});

Then(
  "User verifies the product name is {string} on the products page",
  (expectedName) => {
    commonDriver
      .getElmntFrmNickName("productsPage", "inventory_list")
      .within(() => {
        commonDriver
          .getElmntFrmNickName("productsPage", "product_name")
          .contains(expectedName)
          .parents(".inventory_item")
          .then(($item) => {
            currentProductItem = $item;
            cy.wrap($item)
              .find(".inventory_item_label")
              .find(".inventory_item_name")
              .invoke("text")
              .should("eq", expectedName);
          });
      });
  }
);

Then(
  "User verifies the product price is {string} on the products page",
  (expectedPrice) => {
    cy.wrap(currentProductItem)
      .find(".pricebar")
      .find(".inventory_item_price")
      .invoke("text")
      .should("eq", expectedPrice);
  }
);

Then(
  "User verifies the product description is {string} on the products page",
  (expectedDescription) => {
    cy.wrap(currentProductItem)
      .find(".inventory_item_label")
      .find(".inventory_item_desc")
      .invoke("text")
      .should("eq", expectedDescription);
  }
);

When("User adds {string} to the cart", (productName) => {
  commonDriver
    .getElmntFrmNickName("productsPage", "inventory_list")
    .within(() => {
      cy.contains(".inventory_item_name", productName)
        .parents(".inventory_item")
        .find("button.btn_primary.btn_inventory")
        .click();
    });
});

Then("The shopping cart badge should show {string} items", (itemCount) => {
  commonDriver
    .getElmntFrmNickName("productsPage", "shopping_cart_badge")
    .should("have.text", itemCount);
});

When("User sorts products by {string}", (sortOption) => {
  commonDriver
    .getElmntFrmNickName("productsPage", "sort_dropdown")
    .select(sortOption);
});

Then("Products should be displayed in ascending price order", () => {
  commonDriver
    .getElmntFrmNickName("productsPage", "inventory_list")
    .within(() => {
      cy.get(".inventory_item_price").then(($prices) => {
        const prices = $prices
          .map((i, el) => parseFloat(el.innerText.replace("$", "")))
          .get();
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).to.deep.equal(sortedPrices);
      });
    });
});

Then("Products should be displayed in alphabetical order", () => {
  commonDriver
    .getElmntFrmNickName("productsPage", "inventory_list")
    .within(() => {
      cy.get(".inventory_item_name").then(($names) => {
        const names = $names.map((i, el) => el.innerText).get();
        const sortedNames = [...names].sort();
        expect(names).to.deep.equal(sortedNames);
      });
    });
});
