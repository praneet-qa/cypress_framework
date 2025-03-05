Feature: Login functionality

    Scenario: Successful login
        Given User visits the Sauce Demo login page
        When User enters "standard_user" as the username
        And User enters "secret_sauce" as the password
        And User clicks the login button
        Then User should be redirected to the "inventory" page

    Scenario: Failed login due to incorrect password
        Given User visits the Sauce Demo login page
        When User enters "standard_user" as the username
        And User enters "wrong_password" as the password
        And User clicks the login button
        And The error message should say "Username and password do not match any user in this service"

    Scenario: Login attempt with a locked-out user
        Given User visits the Sauce Demo login page
        When User enters "locked_out_user" as the username
        And User enters "secret_sauce" as the password
        And User clicks the login button
        And The error message should say "Epic sadface: Sorry, this user has been locked out."
