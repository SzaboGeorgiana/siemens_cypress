import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { chatBox } from "../../../../ui-manager/georgiana/pages/pages";

// Feature: Testing Chat
// Background:
// Given("the site implicit Home page", () => {
//   cy.visit("https://ancabota09.wixsite.com/intern");
// });

Given("the Chat box is open", () => {
  cy.wait(10000);
  chatBox.isVisibleChatButton();  
  chatBox.clickOnChatButton();
  cy.wait(5000);
});



// Scenario: Send first message
Given("a text box", () => {
      chatBox.isVisibleChatTextArea();  
});

When("the user writes a message in the text box", () => {
  chatBox.chatTextArea()
  .type("hello"); 
});

When("the user clicks on the Send button", () => {
  chatBox.isVisibleSendButton();
  chatBox.sendButton()
  .click();
 });

Then("the message was sent", () => {
    chatBox.chatMessages()
    .last()
    .should('contain', "hello"); 
});

Then("the robot answers with a form", () => {
  cy.wait(10000);
  chatBox.isVisibleChatForm();
});

// Scenario: Send a message after first message

Then("the robot answers with an other form", () => {
  cy.wait(10000);
  chatBox.isVisibleChatForm1();
});

// Scenario: click on Submit button on the form submitted by the robot (with valid data)
Given("the form submitted by the robot", () => {
  chatBox.isVisibleChatTextArea();  
  chatBox.chatTextArea()
  .type("hello"); 
  chatBox.sendButton()
  .click();
  chatBox.chatMessages()
  .last()
  .should('contain', "hello"); 
  cy.wait(5000);
  chatBox.isVisibleChatForm();
});

When("the user writes the name", () => {
  chatBox.nameField()
          .should('be.visible')
          .clear()
          .type("Sara Alina"); 
});

When("the user writes the email", () => {
  chatBox.emailField()
          .should('be.visible')
          .clear()
          .type("sara@example.com");
});

When("the user writes a message", () => {
  chatBox.messageField()
  .should('be.visible')
  .clear()
  .type("I would like more information about room availability.");
});

When("the user clicks on the Submit button", () => {
  chatBox.submitField() 
  .click();
  cy.wait(5000);
});

Then("the message was sent, receive notification", () => {
  chatBox.formFeedback()
  .should('contain', 'Thanks! Message us here.');});

// Scenario: click on Submit button on the form submitted by the robot (with no name)
When("the user writes no name", () => {
  chatBox.nameField()
  .should('be.visible')
  .clear()
});

Then("receive error message for name", () => {
  // Verify error message for the invalid field
  cy.get('#comp-jr4sqg2g > .nKphmK')
  .its('0.contentDocument')
  .find('#name-error')
  .should('be.visible')
  .find('span.Tmj8I') 
  .should('contain.text', 'Make sure to add your name.');
});

// Scenario: click on Submit button on the form submitted by the robot (with no email)
When("the user writes no email", () => {
  chatBox.emailField()
  .should('be.visible')
  .clear()});

  Then("receive error message for email", () => {
    // Verify error message for the invalid field
    cy.get('#comp-jr4sqg2g > .nKphmK')
    .its('0.contentDocument')
    .find('#email-error')
    .should('be.visible')
    .find('span.Tmj8I') 
    .should('contain.text', 'Make sure to add your email.');
  });

// Scenario: click on Submit button on the form submitted by the robot (with no message)
When("the user writes no message", () => {
  chatBox.messageField()
  .should('be.visible')
  .clear()});

  Then("receive error message for message", () => {
    // Verify error message for the invalid field
    cy.get('#comp-jr4sqg2g > .nKphmK')
    .its('0.contentDocument')
    .find('#message-error')
    .should('be.visible')
    .find('span.Tmj8I') 
    .should('contain.text', 'Make sure to add your message.');
  });


// Scenario: click on Submit button on the form submitted by the robot (with invalid email)
When("the user writes an invalid email", () => {
  chatBox.emailField()
  .should('be.visible')
  .clear().type("sara"

  )});

  Then("receive error message for invalid email", () => {
    // Verify error message for the invalid field
    cy.get('#comp-jr4sqg2g > .nKphmK')
    .its('0.contentDocument')
    .find('#email-error')
    .should('be.visible')
    .find('span.Tmj8I') 
    .should('contain.text',"Enter a valid email address.");
  });


// Scenario: Send a message after submit

