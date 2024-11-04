Feature: Search button in Home page
Background:
	Given the site implicit Home page
    And a calendar for check in date
    And a calendar for check out date
    And a counter for adults number
    And a counter for kids number
    And a Search button on Home page


Scenario: Search with Check out date one day after Check in
	Given a Search button on Home page
	When the user completes Check In date today and Check Out date next day
	Then receives notification the hotel allows more then 2 nights

@focus

Scenario: Search with 1 adult, 0 kids
	Given a Search button on Home page
	When the user complete Check and Check out date 
    And the user completes 1 Adult
    And the user completes 0 Kids 
    And the user clicks on the Search button
	Then the Search page is loaded successfully
   

Scenario: Search with 0 adult, 1 kid
	Given a Search button on Home page
	When the user complete Check and Check out date 
    And the user completes 1 Kid
    And the user tries to complete 0 Adults 
	Then counter decrement is blocked



Scenario: Search with 2 adult, 1 kid
	Given a Search button on Home page
	When the user complete Check and Check out date 
    And the user completes 2 Adults 
    And the user completes 1 Kid 
    And the user clicks on the Search button
	Then the Search page is loaded successfully
    

@focus

Scenario: Search with 7 adult, 0 kids
	Given a Search button on Home page
   	When the user complete Check and Check out date 
    And the user completes 0 Kids 
    And the user completes 7 Adults 
	Then counter increment is blocked


Scenario: Search without data
	Given a Search button on Home page
	When the user clicks on the Search button
	Then receives notification that the dates in the calendar must be completed
