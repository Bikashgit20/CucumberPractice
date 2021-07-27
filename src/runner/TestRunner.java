package runner;

import java.io.File;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.ExtentCucumberFormatter;
import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)

@CucumberOptions(
		 features = {"src/features"}
		 ,glue= {"step"}
		 ,monochrome=true
		,plugin= {"pretty","html:target/cucumber"}
				)
				 
		 

public class TestRunner 
{
			
	

	

}
