Feature: Products Page functionality

    Background:
        Given User is on the Products page

    Scenario Outline: Verify product details
        Then User verifies the product name is "<productName>" on the products page
        And User verifies the product price is "<price>" on the products page
        And User verifies the product description is "<description>" on the products page

        Examples:
            | productName                       | price  | description                                                                                                                                                            |
            | Sauce Labs Backpack               | $29.99 | carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.                                 |
            | Sauce Labs Bike Light             | $9.99  | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.        |
            | Sauce Labs Bolt T-Shirt           | $15.99 | Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.                        |
            | Sauce Labs Fleece Jacket          | $49.99 | It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. |
            | Sauce Labs Onesie                 | $7.99  | Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.        |
            | Test.allTheThings() T-Shirt (Red) | $15.99 | This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.              |

    Scenario: Add multiple products to cart
        When User adds "Sauce Labs Backpack" to the cart
        And User adds "Sauce Labs Bike Light" to the cart
        Then The shopping cart badge should show "2" items

    Scenario: Sort products by price
        When User sorts products by "Price (low to high)"
        Then Products should be displayed in ascending price order

    Scenario: Sort products by name
        When User sorts products by "Name (A to Z)"
        Then Products should be displayed in alphabetical order
