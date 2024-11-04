@focus

Feature: Testing Footer menu
Background:
	Given the site implicit Home page
	And a set of buttons with icon Facebook, Twitter, Pinterest in the footer
	And a link to Wix.com site
	And button info@mysite.com
	And a chat button

Scenario: click on Facebook button
	Given a Facebook button 
	When click on Facebook button
	Then the Facebook page is loaded successfully
Scenario: click on Twitter button
	Given a Twitter button 
	When click on Twitter button
	Then the Twitter page is loaded successfully
Scenario: click on Pinterest button
	Given a Pinterest button 
	When click on Pinterest button
	Then the Pinterest page is loaded successfully
Scenario: click on info@mysite.com button
	Given an info@mysite.com button	
    When click on info@mysite.com button
	Then the email page loaded successfully with recipient info@mysite.com
Scenario: click on Wix.com link
	Given a Wix.com link
	When click on Wix.com link
	Then the page www.wix.com loaded successfully 
Scenario: click on Chat button
	Given a Chat button 
	When click on Chat button
	Then the Chat box is loaded successfully

