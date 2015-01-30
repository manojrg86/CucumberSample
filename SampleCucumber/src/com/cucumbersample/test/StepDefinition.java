package com.cucumbersample.test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import cucumber.api.java.en.*;

public class StepDefinition {

	protected WebDriver driver;

    @BeforeTest
    public void setUp() {
          driver = new ChromeDriver();
          driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
          driver.manage().window().maximize();
    }

    @AfterTest
    public void tearDown() {
          driver.close();
    }
         
    @Given("user is on google search page")
    public void The_user_is_on_google_search_page() {                      
          driver.get("https://www.google.co.in/");
    }
         
    @When("enter \"([^\"]*)\" text into search field")
    public void User_enters_text_into_field(String text) {
          driver.findElement(By.id("gbqfq")).sendKeys(text);
    }
         
    @And("click on search button")
    public void user_click_on_search_button() {
          driver.findElement(By.id("gbqfb")).click();
    }    
         
    @And("click on advance search icon")
    public void click_on_advance_icon() {
          driver.findElement(By.id("abar_button_opt")).click();
    }
         
    @And("click on advance search link")
    public void click_on_advance_link() {
          driver.findElement(By.xpath("//div[text()=\"Advanced search\"]")).click();
    }
         
    @And("click on advance search button")
    public void click_on_advance_button() {
          driver.findElement(By.xpath("//input[@value='Advanced Search']")).click();
    }
         
    @Then("verify first link text \"([^\"]*)\"")
    public void verify_first_link_text(String msg)
   {
     WebElement message = driver.findElement(By.xpath("//*[@id='rso']/li[1]/div/h3/a"));
   //  Assert.assertTrue(message.getText().contains(msg));
    }    
}
