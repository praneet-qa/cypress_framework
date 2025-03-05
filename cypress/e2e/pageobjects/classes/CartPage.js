import CommonDriver from "./CommonDriver";

class CartPage {
  constructor() {
    this.commonDriver = new CommonDriver();
  }

  navigateToCart() {
    this.commonDriver
      .getElmntFrmNickName("productsPage", "shopping_cart_link")
      .click();
  }

  getCartItemCount() {
    return this.commonDriver.getElmntFrmNickName(
      "productsPage",
      "shopping_cart_badge"
    );
  }

  clickContinueShopping() {
    this.commonDriver
      .getElmntFrmNickName("cartPage", "continue_shopping_button")
      .click();
  }

  clickCheckout() {
    this.commonDriver
      .getElmntFrmNickName("cartPage", "checkout_button")
      .click();
  }
}

export default CartPage;
