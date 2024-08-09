Feature: Less Than Operation

  Scenario: Compare two numbers
    Given i start with 4
    When i compare with 8 which is bigger
    Then i end up with true

   Scenario: Compare a larger number
    Given i start with 10
    When i compare with 3 which is smaller
    Then i end up with false
