import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../../../ui-manager/georgiana/pages/pages";

// Feature: Search button in Home page

// Background:
// Given("the site implicit Home page", () => {
//   cy.visit("https://ancabota09.wixsite.com/intern");
// });

Given("a calendar for check in date", () => {
    cy.wait(10000);
  homePage.checkInButton().
  should('be.visible');
});

Given("a calendar for check out date", () => {
    homePage.checkOutButton().
    should('be.visible');});

Given("a counter for adults number", () => {
    homePage.adultsButtonIncrement().
    should('be.visible');});

Given("a counter for kids number", () => {
    homePage.childrensButtonIncrement().
    should('be.visible');});

Given("a Search button on Home page", () => {
    homePage.searchButton().
    should('be.visible');
});

// Scenario: Search with Check out date one day after Check in
When("the user completes Check In date today and Check Out date next day", () => {
    const checkInDate = new Date(); 
      const checkOutDate = new Date(checkInDate); 
      checkOutDate.setDate(checkInDate.getDate() + 1); 
     homePage.setDataInCalendar(checkInDate,checkOutDate);
});


Then("receives notification the hotel allows more than 2 nights", () => {
  homePage.errorSearch()
  .should('contain.text', "Hotel allows more than 2 nights!");
});

// Scenario: Search with 1 adult, 0 kids
When("the user complete Check and Check out date", () => {
    const checkInDate = new Date(); 
      const checkOutDate = new Date(checkInDate); 
      checkOutDate.setDate(checkInDate.getDate() + 3); 
     homePage.setDataInCalendar(checkInDate,checkOutDate);
});

When("the user completes 1 Adult", () => {
    homePage.tryToIncrement(1);
});

When("the user completes 0 Kids", () => {
    homePage.tryToIncrementKids(0);
});

When("the user clicks on the Search button", () => {
    homePage.searchButton()
    .click();
    cy.wait(3000);
});

Then("the Search page is loaded successfully", () => {
    cy.url().should('include', 'https://ancabota09.wixsite.com/intern/rooms');
});


// Scenario: Search with 0 adult, 1 kid
When("the user completes 1 Kid", () => {
    homePage.tryToIncrementKids(1);
});

When("the user tries to complete 0 Adults", () => {
    homePage.tryToIncrement(0);
});

Then("counter decrement is blocked", () => {
    homePage.tryToDecrement(1);
    homePage.adultValue()
    .invoke('text')
    .then((finalValue) => {
      expect(finalValue).to.equal("1"); 
      homePage.adultsButtonDecrement()
            .should('be.visible').should('have.attr', 'disabled', 'disabled');

      });
    });

// Scenario: Search with 2 adults, 1 kid
When("the user completes 2 Adults", () => {
    homePage.tryToIncrement(2);
});


// Scenario: Search with 7 adults, 0 kids
When("the user completes 7 Adults", () => {
    homePage.tryToIncrement(7);
});

Then("counter increment is blocked", () => {
    // homePage.tryToIncrement(6);
    homePage.adultValue()
    .invoke('text')
    .then((finalValue) => {
      expect(finalValue).to.equal("6"); 
      homePage.adultsButtonIncrement()
            .should('be.visible').should('have.attr', 'disabled', 'disabled');

        });
    });

// Scenario: Search without data

Then("receives notification that the dates in the calendar must be completed", () => {
 homePage.errorSearch()
  .should('contain.text', "Please complete dates in the calendar!");
});
