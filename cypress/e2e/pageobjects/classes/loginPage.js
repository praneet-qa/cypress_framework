export class LoginPage {
  visit() {
    cy.visit("/");
  }

  enterUsername(username) {
    cy.get('[data-test="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('[data-test="password"]').type(password);
  }

  clickLoginButton() {
    cy.get("#login-button").click();
  }
}

export default LoginPage;
