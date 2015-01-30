package com.cucumbersample.test;

import org.junit.runner.RunWith;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(plugin = "json:target/cucumber-report.json")
public class RunTest extends AbstractTestNGCucumberTests{
	
}
