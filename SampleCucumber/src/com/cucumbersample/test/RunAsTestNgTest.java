package com.cucumbersample.test;

import org.testng.annotations.Test;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.TestNGCucumberRunner;

@CucumberOptions(features = {"src/test/resources/"},tags={"@Search1"})
public class RunAsTestNgTest{

	/**
	 * Create one test method that will be invoked by TestNG and invoke the
	 * Cucumber runner within that method.
	 */
	
	@Test(groups = "examples-testng", description = "Example of using TestNGCucumberRunner to invoke Cucumber")
	public void runTest() {
		new TestNGCucumberRunner(getClass()).runCukes();
	}

}
