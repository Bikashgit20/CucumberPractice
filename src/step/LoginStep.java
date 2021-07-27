package step;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep 
{
	
	
	@Before
	public void setUp()
	{
		System.out.println("Launch url facebook.com");
	}
	@After
	public void endUp()
	{
		System.out.println("driver.quit()");
	}
	
	@Given("^navigate to the facebook login page$")
	public void navigate_to_the_facebook_login_page() throws Throwable {
		System.out.println("given--navigating to facebook Login ");
	   
	}

	@When("^user validate the home page title$")
	public void user_validate_the_home_page_title() throws Throwable {
		System.out.println("when--validating to the home title page");
	    
	}

	@When("^enter the \"([^\"]*)\" user name$")
	public void enter_the_user_name(String arg1) throws Throwable {
	   System.out.println("username");
	}

	@When("^enter the \"([^\"]*)\" password$")
	public void enter_the_password(String arg1) throws Throwable {
	   System.out.println("Password");
	}

	@When("^click on the login button$")
	public void click_on_the_login_button() throws Throwable {
		System.out.println("and--entering the login button");
	    	}

	@Then("^user should successfully login to facebook$")
	public void user_should_successfully_login_to_facebook() throws Throwable {
		System.out.println("then--user is successfully loging into facebook");
	    
	}



}
