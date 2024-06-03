Feature: The saucedemo page invalid login

  Scenario Outline: User logs in with credentials
    Given User is located on the main page of saucedemo website
    When User logins with <username> and <password>
    Then User should see <message> error message

    Examples:
      | username | password | message                            |
      |          |          | Epic sadface: Username is required |
