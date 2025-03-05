Feature: Shopping Cart functionality

    Background:
        Given User is on the Products page
        And User adds "Sauce Labs Backpack" to the cart
        And User adds "Sauce Labs Bike Light" to the cart
        When User clicks on the shopping cart button

    Scenario Outline: Verify cart item details
        Then User verifies the cart item name is "<productName>"
        And User verifies the cart item price is "<price>"
        And User verifies the cart item quantity is "1"

        Examples:
            | productName           | price  |
            | Sauce Labs Backpack   | $29.99 |
            | Sauce Labs Bike Light | $9.99  |

    Scenario: Remove item from cart
        When User removes "Sauce Labs Backpack" from the cart
        Then The cart should show "1" items
        And "Sauce Labs Backpack" should not be in the cart

    Scenario: Continue shopping
        When User clicks continue shopping
        Then User should be redirected to the "inventory" page

    Scenario: Proceed to checkout
        When User clicks checkout
        Then User should be redirected to the "checkout" page