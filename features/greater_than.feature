Feature: Greater Than Operation

  Scenario: Compare two numbers
    Given i start with 9
    When i compare with 5
    Then i end up with true

   Scenario: Compare a smaller number
    Given i start with 2
    When i compare with 5
    Then i end up with false
