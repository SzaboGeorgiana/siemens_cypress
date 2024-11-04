@focus

Feature: Testing Navbar menu
Background:
	Given the site implicit Home page
	And a Navbar with buttons: Home, Explore, BookNow, Rooms, Contact, Home&Away 

Scenario: click on Home button
	Given a Home button 
	When click on Home button
	Then the Home page is loaded successfully

Scenario: click on Explore button
	Given an Explore button 
	When click on Explore button
	Then the Explore page is loaded successfully

Scenario: click on Rooms button
	Given a Rooms button 
	When click on Rooms button
	Then the Rooms page is loaded successfully

Scenario: click on Contact button
	Given a Contact button 
	When click on Contact button
	Then the Contact page is loaded successfully

Scenario: click on Book now button
	Given a Book now button 
	When click on Book now button
	Then the Book now page is loaded successfully !

Scenario: click on Home&Away button
	Given a Home&Away button 
	When click on Home&Away button
	Then the Home page is loaded successfully
