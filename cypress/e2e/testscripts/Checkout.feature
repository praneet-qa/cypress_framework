Feature: Checkout functionality

    Background:
        Given User is on the Products page
        And User adds "Sauce Labs Backpack" to the cart
        And User clicks on the shopping cart button
        And User clicks checkout

    Scenario: Verify checkout page title
        Then User should be redirected to the "checkout" page

    Scenario: Complete checkout information
        When User enters "John" as the first name
        And User enters "Doe" as the last name
        And User enters "12345" as the postal code
        And User clicks continue
        Then User should be redirected to the "checkout step two" page

    Scenario: Cancel checkout
        When User clicks cancel
        Then User should be redirected to the "cart" page