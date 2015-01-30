package com.cucumbersample.test;

import org.testng.annotations.Test;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.TestNGCucumberRunner;


public class RunAsTestNgTest{

	@CucumberOptions(features = {"src/test/resources/"},tags={"@Search1"})
	public 	class SearchTest1 {
		@Test(groups = "SearchTest_Sample1", description = "Example of using TestNGCucumberRunner to invoke Cucumber")
		public void SearchTest_Sample1(){
			new TestNGCucumberRunner(getClass()).runCukes();
		}
	}

	@CucumberOptions(features = {"src/test/resources/"},tags={"@Search2"})
	public	class SearchTest2 {
		@Test(groups = "SearchTest_Sample1", description = "Example of using TestNGCucumberRunner to invoke Cucumber")
		public void SearchTest_Sample2() {
			new TestNGCucumberRunner(getClass()).runCukes();
		}
	}
}
