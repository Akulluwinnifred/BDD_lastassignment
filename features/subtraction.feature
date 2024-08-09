Feature: Subtraction Operation

  Scenario: Subtract two numbers
    Given i start with 10
    When i subtract 4
    Then i end up with 6

    Scenario: Subtract a number from itself
    Given i start with 5
    When i subtract 5
    Then i end up with 0
