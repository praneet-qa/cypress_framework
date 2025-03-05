import CommonDriver from "./CommonDriver";

class LoginPage {
  constructor() {
    this.commonDriver = new CommonDriver();
  }

  visit() {
    cy.visit("/");
  }

  enterUsername(username) {
    this.commonDriver
      .getElmntFrmNickName("loginPage", "username_field")
      .then(($elem) => {
        if ($elem.val()) {
          cy.wrap($elem).clear({ force: true });
        }
        cy.wrap($elem).type(username);
      });
  }

  enterPassword(password) {
    this.commonDriver
      .getElmntFrmNickName("loginPage", "password_field")
      .then(($elem) => {
        if ($elem.val()) {
          cy.wrap($elem).clear({ force: true });
        }
        cy.wrap($elem).type(password);
      });
  }

  clickLoginButton() {
    this.commonDriver.getElmntFrmNickName("loginPage", "login_button").click();
  }
}

export default LoginPage;
