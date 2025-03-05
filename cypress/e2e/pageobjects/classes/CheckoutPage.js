import CommonDriver from "./CommonDriver";

class CheckoutPage {
  constructor() {
    this.commonDriver = new CommonDriver();
  }

  enterFirstName(firstName) {
    this.commonDriver
      .getElmntFrmNickName("checkoutPage", "first_name")
      .then(($elem) => {
        if ($elem.val()) {
          cy.wrap($elem).clear({ force: true });
        }
        cy.wrap($elem).type(firstName);
      });
  }

  enterLastName(lastName) {
    this.commonDriver
      .getElmntFrmNickName("checkoutPage", "last_name")
      .then(($elem) => {
        if ($elem.val()) {
          cy.wrap($elem).clear({ force: true });
        }
        cy.wrap($elem).type(lastName);
      });
  }

  enterPostalCode(postalCode) {
    this.commonDriver
      .getElmntFrmNickName("checkoutPage", "postal_code")
      .then(($elem) => {
        if ($elem.val()) {
          cy.wrap($elem).clear({ force: true });
        }
        cy.wrap($elem).type(postalCode);
      });
  }

  clickContinue() {
    this.commonDriver
      .getElmntFrmNickName("checkoutPage", "continue_button")
      .click();
  }

  clickCancel() {
    this.commonDriver
      .getElmntFrmNickName("checkoutPage", "cancel_button")
      .click();
  }
}

export default CheckoutPage;
