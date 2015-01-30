$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Site.feature");
formatter.feature({
  "id": "google-search",
  "description": "",
  "name": "Google Search",
  "keyword": "Feature",
  "line": 1
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
  "duration": 647920000,
  "status": "failed",
  "error_message": "java.lang.NullPointerException\n\tat com.cucumbersample.test.StepDefinition.The_user_is_on_google_search_page(StepDefinition.java:32)\n\tat ✽.Given user is on google search page(Site.feature:4)\n"
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
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_advance_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_advance_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.click_on_advance_button()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
});