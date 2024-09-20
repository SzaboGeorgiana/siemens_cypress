import { homePage } from "../../ui-manager/georgiana/pages/pages";

beforeEach(() => {
    cy.visit("/")
  })

it.only('verifyMinimumBoundary', () => {
  cy.get('iframe.nKphmK[title="Wix Hotels"]').its('0.contentDocument').find('#search-widget #check-in').should('exist').click();
    homePage.searchWidgetIsDisplayed();
    homePage.tryToDecrementAdults(1);
    
    cy.get('.adults-counter').invoke('text').then((counterValue) => {
      homePage.decrementAdultsButtonDisabled();
      expect(parseInt(counterValue)).to.equal(1);
      cy.log('The decrement button is disabled at counter value 1');
    });
  });
