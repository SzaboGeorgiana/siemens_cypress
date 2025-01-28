import { When, Then, Given, Before } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../../../ui-manager/georgiana/pages/pages";


// Given("the site implicit Home page", () => {
//     cy.visit("https://ancabota09.wixsite.com/intern");
//   });


  Given("a Navbar with buttons: Home, Explore, BookNow, Rooms, Contact, Home&Away", () => {
    homePage.isVisibleHomeButton();
    homePage.isVisibleExploreButton();
    homePage.isVisibleBookNowButton();
    homePage.isVisibleRoomsButton();
    homePage.isVisibleContactButton();
    homePage.isVisibleHomeAndAwayButton();
 });

// Scenario: click on Home button

Given("a Home button", () => {
  homePage.isVisibleHomeButton();
});

When("click on Home button", (boardName) => {
    homePage.clickOnHomeButton();
});


Then("the Home page is loaded successfully", () => {
    cy.url().should("eq", "https://ancabota09.wixsite.com/intern");
});


// Scenario: click on Explore button
Given("an Explore button", () => {
  homePage.isVisibleExploreButton();
});

When("click on Explore button", () => {
  homePage.clickOnExploreButton();
});

Then("the Explore page is loaded successfully", () => {
  cy.url().should("eq", "https://ancabota09.wixsite.com/intern/explore");
});

// Scenario: click on Rooms button
Given("a Rooms button", () => {
  homePage.isVisibleRoomsButton();
});

When("click on Rooms button", () => {
  homePage.clickOnRoomsButton();
});

Then("the Rooms page is loaded successfully", () => {
  cy.url().should("eq", "https://ancabota09.wixsite.com/intern/rooms");
});

// Scenario: click on Contact button
Given("a Contact button", () => {
  homePage.isVisibleContactButton();
});

When("click on Contact button", () => {
  homePage.clickOnContactButton();
});

Then("the Contact page is loaded successfully", () => {
  cy.url().should("eq", "https://ancabota09.wixsite.com/intern/contact");
});

// Scenario: click on Book now button
Given("a Book now button", () => {
  homePage.isVisibleBookNowButton();
});

When("click on Book now button", () => {
  homePage.clickOnBookNowButton();
});

Then("the Book now page is loaded successfully", () => {
  cy.url().should("eq", "https://ancabota09.wixsite.com/intern/book-now");
});

// Scenario: click on Home&Away button
Given("a Home&Away button", () => {
  homePage.isVisibleHomeAndAwayButton();
});

When("click on Home&Away button", () => {
  homePage.clickOnHomeAndAwayButton();
});

