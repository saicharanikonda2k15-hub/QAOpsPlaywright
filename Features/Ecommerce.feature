Feature: Ecommerce Validation

@Regression
    Scenario: Placing the order
    Given a login to Ecommerce application with "saicharani.konda2k15@gmail.com" and "Saicharani@123"
    When Add "ZARA COAT 3" to cart
    Then verify "ZARA COAT 3" is displayed in cart
    When Enter valid details and place the order
    Then verify order is present in order history


Scenario Outline: Verify Error message
  Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then verify Error message displayed

Examples:
    | username                        | password        | 
    | saicharani.konda2k15@gmail.com  | Saicharani@123  | 
    | anshika123@gmail.com            | IamKing@123     |
   