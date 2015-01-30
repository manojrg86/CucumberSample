Feature: Google Search
@Search1
Scenario: Advance Search in Google
            Given user is on google search page
            When enter "testing" text into search field
            And click on search button
            And click on advance search icon
            And click on advance search link
            And click on advance search button
            Then verify first link text "testing"
@Search2
Scenario: Advance Search in Google for cucumber
            Given user is on google search page
            When enter "cucumber" text into search field
            And click on search button
            And click on advance search icon
            And click on advance search link
            And click on advance search button
            Then verify first link text "cucumber"