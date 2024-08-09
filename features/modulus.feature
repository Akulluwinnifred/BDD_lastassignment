Feature: Modulus Operation

  Scenario: Find the remainder
    Given i start with 10
    When i divide by to find modulus 3
    Then i end up with 1

    Scenario: Modulus with a multiple
    Given i start with 12
    When i divide by to find modulus 4
    Then i end up with 0
