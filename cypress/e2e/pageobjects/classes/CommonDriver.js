const loginPage = require("../../../e2e/pageobjects/locators/LoginPage.json");

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
}

export default CommonDriver;
