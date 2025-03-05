const productsPage = require("../../../e2e/pageobjects/locators/ProductsPage.json");
const loginPage = require("../../../e2e/pageobjects/locators/LoginPage.json");
const cartPage = require("../../../e2e/pageobjects/locators/CartPage.json");
const checkoutPage = require("../../../e2e/pageobjects/locators/CheckoutPage.json");

class CommonDriver {
  getElmntFrmNickName(pageName, elmntNickName) {
    let paramName = elmntNickName.replace(/\s/g, "");
    cy.log("pageName: " + pageName);
    cy.log("elmntNickName: " + elmntNickName);
    let locator = "";
    switch (pageName) {
      case "loginPage":
        locator = loginPage[pageName][paramName];
        break;
      case "productsPage":
        locator = productsPage[pageName][paramName];
        break;
      case "cartPage":
        locator = cartPage[pageName][paramName];
        break;
      case "checkoutPage":
        locator = checkoutPage[pageName][paramName];
        break;
      default:
        throw new Error(`No locators defined for page: ${pageName}`);
    }
    cy.log("LOCATOR: " + locator);
    return cy.get(locator);
  }

  enterData(pageName, elmntNickName, dataValue) {
    this.getElmntFrmNickName(pageName, elmntNickName).then(($elem) => {
      if ($elem.val()) {
        cy.wrap($elem).clear({ force: true });
      }
      cy.wrap($elem).type(dataValue);
    });
  }

  clickButton(pageName, elmntNickName) {
    this.getElmntFrmNickName(pageName, elmntNickName).click();
  }

  verifyProductDetails(productName, price, description) {
    this.getElmntFrmNickName("productsPage", "product_name")
      .contains(productName)
      .parents(".inventory_item")
      .within(() => {
        this.getElmntFrmNickName("productsPage", "product_price").should(
          "contain",
          price
        );
        this.getElmntFrmNickName("productsPage", "product_description").should(
          "contain",
          description
        );
      });
  }

  addProductToCart(productName) {
    this.getElmntFrmNickName("productsPage", "product_name")
      .contains(productName)
      .parents(".inventory_item")
      .find(
        this.getElmntFrmNickName("productsPage", "add_to_cart_button").selector
      )
      .click();
  }

  sortProducts(sortOption) {
    this.getElmntFrmNickName("productsPage", "sort_dropdown").select(
      sortOption
    );
  }
}

export default CommonDriver;
