$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Site.feature");
formatter.feature({
  "id": "google-search",
  "description": "",
  "name": "Google Search",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 4325869450,
  "status": "passed"
});
formatter.scenario({
  "id": "google-search;advance-search-in-google",
  "description": "",
  "name": "Advance Search in Google",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "enter \"testing\" text into search field",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "click on search button",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "click on advance search icon",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "click on advance search link",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "click on advance search button",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "verify first link text \"testing\"",
  "keyword": "Then ",
  "line": 10
});
formatter.match({
  "location": "StepDefinition.The_user_is_on_google_search_page()"
});
formatter.result({
  "duration": 2203810242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing",
      "offset": 7
    }
  ],
  "location": "StepDefinition.User_enters_text_into_field(String)"
});
formatter.result({
  "duration": 162722894,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_click_on_search_button()"
});
formatter.result({
  "duration": 152350992,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_advance_icon()"
});
formatter.result({
  "duration": 900054107,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_advance_link()"
});
formatter.result({
  "duration": 312458845,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_advance_button()"
});
formatter.result({
  "duration": 609144926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testing",
      "offset": 24
    }
  ],
  "location": "StepDefinition.verify_first_link_text(String)"
});
formatter.result({
  "duration": 30074907180,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d40.0.2214.93)\n  (Driver info: chromedriver\u003d2.8.241075,platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 30.07 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.43.1\u0027, revision: \u00275163bce\u0027, time: \u00272014-09-10 16:27:33\u0027\nSystem info: host: \u0027WG5HS5S1\u0027, ip: \u002710.28.43.18\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.7.0_09\u0027\nSession ID: 4a4045bfdaf26cc1dfe049777d6ed2f0\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{platform\u003dXP, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dchrome, chrome\u003d{userDataDir\u003dC:\\Users\\rmanoj\\AppData\\Local\\Temp\\scoped_dir3016_29680}, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d40.0.2214.93, takesHeapSnapshot\u003dtrue, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, webStorageEnabled\u003dtrue, applicationCacheEnabled\u003dfalse, takesScreenshot\u003dtrue}]\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.cucumbersample.test.StepDefinition.verify_first_link_text(StepDefinition.java:66)\r\n\tat ✽.Then verify first link text \"testing\"(Site.feature:10)\r\n"
});
formatter.after({
  "duration": 95315176,
  "status": "passed"
});
});