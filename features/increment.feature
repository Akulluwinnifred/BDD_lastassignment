Feature: Increment Operation

  Scenario: Increment a number
    Given i start with 7
    When i increment it
    Then i end up with 8

    Scenario: Increment a number again
    Given i start with 10
    When i increment it
    Then i end up with 11
    
