Feature: Testing Chat
Background:
	Given the site implicit Home page
	And the Chat box is open

Scenario: Send first message
	Given a text box
  When the user writes a message in the text box
	And the user clicks on the Send button
	Then the message was sent
	And the robot answers with a form


Scenario: Send a message after first message
  Given a text box
  And the user writes a message in the text box
  And the user clicks on the Send button
  And the robot answers with a form
  When the user writes a message in the text box
  And the user clicks on the Send button
  Then the message was sent
	And the robot answers with an other form


Scenario: click on Submit button on the form submitted by the robot (with valid data)
	Given the form submitted by the robot
  When the user writes the name
  And the user writes the email
  And the user writes a message
  And the user clicks on the Submit button
	Then the message was sent, receive notification

@focus
Scenario: click on Submit button on the form submitted by the robot(with no name)
	Given the form submitted by the robot
  When the user writes no name
  And the user writes the email
  And the user writes a message
	And the user clicks on the Submit button
	Then receive error message for name

Scenario: click on Submit button on the form submitted by the robot(with no email)
	Given the form submitted by the robot
  When the user writes the name
  And the user writes no email
  And the user writes a message
	And the user clicks on the Submit button
	Then receive error message for email

Scenario: click on Submit button on the form submitted by the robot(with no message)
	Given the form submitted by the robot
  When the user writes the name
  And the user writes the email
  And the user writes no message
	And the user clicks on the Submit button
	Then receive error message for message

Scenario: click on Submit button on the form submitted by the robot(with invalid email)
	Given the form submitted by the robot
  When the user writes the name
  And the user writes an invalid email
  And the user writes a message
	And the user clicks on the Submit button
	Then receive error message for invalid email

@focus

Scenario: Send a message after submit
  Given the form submitted by the robot
  And the user writes the name
  And the user writes the email
  And the user writes a message
  And the user clicks on the Submit button
	And the message was sent, receive notification
	And a text box
  When the user writes a message in the text box
  And the user clicks on the Send button
  Then the message was sent
  And the robot answers with a form 
