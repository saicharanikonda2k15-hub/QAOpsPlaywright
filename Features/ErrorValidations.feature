Feature: Ecommerce Validation

@Validations
    Scenario Outline: Verify Error message
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then verify Error message displayed

Examples:
    | username                        | password        | 
    | saicharani.konda2k15@gmail.com  | Saicharani@123  | 
    | anshika123@gmail.com            | IamKing@123     |

