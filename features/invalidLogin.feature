Feature: The saucedemo page invalid login

  Scenario Outline: User logs in without credentials

    Given User is located on the main page of saucedemo website
    When User clicks “Login” button
    Then User should see “Epic sadface: Username is required” error message

    # Examples:
    #   | username | password             | message                        |
    #   | tomsmith | SuperSecretPassword! | You logged into a secure area! |
    #   | foobar   | barfoo               | Your username is invalid!      |
