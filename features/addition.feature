Feature: Addition Operation

  Scenario: Add two numbers
    Given i start with 5
    When i add 3
    Then i end up with 8

    Scenario: Add zero to a number
    Given i start with 7
    When i add 0
    Then i end up with 7
