import CommonDriver from "./CommonDriver";

class ProductsPage {
  constructor() {
    this.commonDriver = new CommonDriver();
  }

  visit() {
    cy.visit("/inventory.html");
  }

  addToCart(productName) {
    this.commonDriver
      .getElmntFrmNickName("productsPage", "product_name")
      .contains(productName)
      .parents(".inventory_item")
      .find(
        this.commonDriver.getElmntFrmNickName(
          "productsPage",
          "add_to_cart_button"
        ).selector
      )
      .click();
  }

  sortProducts(option) {
    this.commonDriver
      .getElmntFrmNickName("productsPage", "sort_dropdown")
      .select(option);
  }
}

export default ProductsPage;
