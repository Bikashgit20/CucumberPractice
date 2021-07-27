Feature: By valid user name and pass word to login

  Background: 
    Given navigate to the facebook login page
    When user validate the home page title

  Scenario Outline: Inorder to verify login to facebook
    And enter the "<username>" user name
    And enter the "<Password>" password
    And click on the login button
    Then user should successfully login to facebook

    Examples: 
      | username | Password |
      | valid    | valid    |
      | invalid  | invalid  |
#Given navigate to the facebook login page 
#When user validate the home page title
#And enter the "invalid" user name 
#And enter the "valid" password
#And click on the login button
#Then user should successfully login to facebook 
