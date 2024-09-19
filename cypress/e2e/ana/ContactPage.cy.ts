import { contactPage } from "../../ui-manager/ana/pages/pages";
import { homePage } from "../../ui-manager/ana/pages/pages";

beforeEach(() => {
    cy.visit("/")
  })

  it("Contact Text Section Test", () => {
    
    homePage.contactButton().should("be.visible").click()
    cy.url().should("eq", "https://ancabota09.wixsite.com/intern/contact")

    contactPage.title()
        .should('exist')
        .should('have.text', 'CONTACT US')
    
    contactPage.textBlock()
        .should('exist')
        .should('have.text',"If you have any questions, please contact us by telephone or email and we'll get back to you as soon as possible.\n\nWe look forward to hearing from you.\n")
  })

  it.only("Map Fullscreen Test", () => {
    
    homePage.contactButton().should("be.visible").click()
    cy.url().should("eq", "https://ancabota09.wixsite.com/intern/contact")

    cy.get('iframe[title="Google Maps"]').its('0.contentDocument')
        .find('#map_canvas > div > div.gm-style > div:nth-child(8) > button')
        .should('exist')
        .should('have.attr', 'aria-pressed', 'false')
        .and('have.attr', 'title', 'Toggle fullscreen view')
        .click()
        .should('have.attr', 'aria-pressed', 'true')
    
    cy.wait(2000);  // Adjust the time based on expected transition duration

    // Verify the fullscreen mode
    // cy.get('iframe[title="Google Maps"]').its('0.contentDocument.body')
    //     .find('#map_canvas') 
    //     .should('have.css', 'position', 'fixed');
    
  })
