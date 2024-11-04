import { When, Then, Given, Before } from "@badeball/cypress-cucumber-preprocessor";
import { homePage,chatBox } from "../../../../ui-manager/georgiana/pages/pages";



// Background: Given steps for the site and buttons
// Given("the site implicit Home page", () => {
//     cy.visit("https://ancabota09.wixsite.com/intern");
//   });
  
  Given("a set of buttons with icon Facebook, Twitter, Pinterest in the footer", () => {
    homePage.isVisibleFacebookButton();
    homePage.isVisibleTwitterButton();
    homePage.isVisiblePinterestButton();
  });
  
  Given("a link to Wix.com site", () => {
    homePage.isVisibleWixButton();
  });
  
  Given("button info@mysite.com", () => {
    homePage.isVisibleMailToButton();
  });
  
  Given("a chat button", () => {
    cy.wait(10000);
    chatBox.isVisibleChatButton();
  });
  
  // Scenario: click on Facebook button
  Given("a Facebook button", () => {
    homePage.isVisibleFacebookButton();
  });
  
  When("click on Facebook button", () => {
    homePage.clickOnFacebookButton();
  });
  
  Then("the Facebook page is loaded successfully", () => {
    homePage.facebookButton()
    .invoke('attr', 'href')
    .should('equal', "http://www.facebook.com/wix")
  });
  
  // Scenario: click on Twitter button
  Given("a Twitter button", () => {
    homePage.isVisibleTwitterButton();
  });
  
  When("click on Twitter button", () => {
    homePage.clickOnTwitterButton();
  });
  
  Then("the Twitter page is loaded successfully", () => {
    homePage.twitterButton()
    .invoke('attr', 'href')
    .should('equal', "http://www.twitter.com/wix")  
});
  
  // Scenario: click on Pinterest button
  Given("a Pinterest button", () => {
    homePage.isVisiblePinterestButton();
  });
  
  When("click on Pinterest button", () => {
    homePage.clickOnPinterestButton();
  });
  
  Then("the Pinterest page is loaded successfully", () => {
    homePage.pinterestButton()
    .invoke('attr', 'href')
    .should('equal', "http://pinterest.com/wixcom/")
  });
  
  // Scenario: click on info@mysite.com button
  Given("an info@mysite.com button", () => {
    homePage.isVisibleMailToButton();
  });
  
  When("click on info@mysite.com button", () => {
    // homePage.clickOnMailToButton();
    homePage.isVisibleMailToButton().click;

  });
  
  Then("the email page loaded successfully with recipient info@mysite.com", () => {
    homePage.mailToButton()
        .should('have.attr', 'href')
        .should('contain', 'info@mysite.com');
  });
  

  
  // Scenario: click on Wix.com link
  Given("a Wix.com link", () => {
    homePage.isVisibleWixButton();
  });
  
  When("click on Wix.com link", () => {
    homePage.clickOnWixButton();
  });
  
  Then("the page www.wix.com loaded successfully", () => {
    homePage.wixButton()
    .invoke('attr', 'href')
    .should('equal', "http://wix.com/?utm_campaign=vir_created_with")
  });
  
  // Scenario: click on Chat button
  Given("a Chat button", () => {
    chatBox.isVisibleChatButton();
  });
  
  When("click on Chat button", () => {
    chatBox.clickOnChatButton();
  });
  
  Then("the Chat box is loaded successfully", () => {
    cy.wait(5000);
    chatBox.isVisibleChatTextArea();  // Replace .chat-box-selector with actual chat box selector
  });
  