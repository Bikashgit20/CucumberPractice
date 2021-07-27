$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "By valid user name and pass word to login",
  "description": "",
  "id": "by-valid-user-name-and-pass-word-to-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Inorder to verify login to facebook",
  "description": "",
  "id": "by-valid-user-name-and-pass-word-to-login;inorder-to-verify-login-to-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "enter the \"\u003cusername\u003e\" user name",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter the \"\u003cPassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should successfully login to facebook",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "by-valid-user-name-and-pass-word-to-login;inorder-to-verify-login-to-facebook;",
  "rows": [
    {
      "cells": [
        "username",
        "Password"
      ],
      "line": 14,
      "id": "by-valid-user-name-and-pass-word-to-login;inorder-to-verify-login-to-facebook;;1"
    },
    {
      "cells": [
        "valid",
        "valid"
      ],
      "line": 15,
      "id": "by-valid-user-name-and-pass-word-to-login;inorder-to-verify-login-to-facebook;;2"
    },
    {
      "cells": [
        "invalid",
        "invalid"
      ],
      "line": 16,
      "id": "by-valid-user-name-and-pass-word-to-login;inorder-to-verify-login-to-facebook;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 986700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "navigate to the facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user validate the home page title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.navigate_to_the_facebook_login_page()"
});
formatter.result({
  "duration": 221977100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validate_the_home_page_title()"
});
formatter.result({
  "duration": 132100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Inorder to verify login to facebook",
  "description": "",
  "id": "by-valid-user-name-and-pass-word-to-login;inorder-to-verify-login-to-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "enter the \"valid\" user name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter the \"valid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should successfully login to facebook",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 11
    }
  ],
  "location": "LoginStep.enter_the_user_name(String)"
});
formatter.result({
  "duration": 4285000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "valid",
      "offset": 11
    }
  ],
  "location": "LoginStep.enter_the_password(String)"
});
formatter.result({
  "duration": 310700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_the_login_button()"
});
formatter.result({
  "duration": 109800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_should_successfully_login_to_facebook()"
});
formatter.result({
  "duration": 102200,
  "status": "passed"
});
formatter.after({
  "duration": 94200,
  "status": "passed"
});
formatter.before({
  "duration": 212100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "navigate to the facebook login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user validate the home page title",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStep.navigate_to_the_facebook_login_page()"
});
formatter.result({
  "duration": 344600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_validate_the_home_page_title()"
});
formatter.result({
  "duration": 333400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Inorder to verify login to facebook",
  "description": "",
  "id": "by-valid-user-name-and-pass-word-to-login;inorder-to-verify-login-to-facebook;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "enter the \"invalid\" user name",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter the \"invalid\" password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should successfully login to facebook",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 11
    }
  ],
  "location": "LoginStep.enter_the_user_name(String)"
});
formatter.result({
  "duration": 141000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "invalid",
      "offset": 11
    }
  ],
  "location": "LoginStep.enter_the_password(String)"
});
formatter.result({
  "duration": 247200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.click_on_the_login_button()"
});
formatter.result({
  "duration": 129000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.user_should_successfully_login_to_facebook()"
});
formatter.result({
  "duration": 342700,
  "status": "passed"
});
formatter.after({
  "duration": 322000,
  "status": "passed"
});
});