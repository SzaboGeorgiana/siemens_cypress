import { When, Then, Given, Before } from "@badeball/cypress-cucumber-preprocessor";
import { homePage } from "../../ui-manager/georgiana/pages/pages";


Given("the site implicit Home page", () => {
    cy.visit("https://ancabota09.wixsite.com/intern");
  });
