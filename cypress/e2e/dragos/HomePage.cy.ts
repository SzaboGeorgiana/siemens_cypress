/// <reference types="cypress-iframe" />
import { homepage, homeURL } from "../../ui-manager/dragos/pages/pages";
import 'cypress-iframe' ;

describe("Test Homepage", () => {

    beforeEach(() => {
        cy.visit(homeURL);
    })

    it("Test search filters in the iFrame", () => {
        cy.visit(homeURL);

        // cy.frameLoaded('#i6kppi75 > .nKphmK')
        // cy.wait(5000)

        // cy.iframe().then(($iframeBody) => {
        //     // Log the iframe content to the console to verify it's loaded correctly
        //     console.clear();
        //     console.log($iframeBody.html());
        //   });
          
        cy.iframe('#i6kppi75 > .nKphmK').find('#check-in').should('be.visible').click()
        cy.iframe().find('#check-in')
            .should('have.attr', 'aria-expanded', 'true');

    })






})