export const contactURL = "https://ancabota09.wixsite.com/intern/contact";

export const homepage = {
    homeAndAwayButton: () => cy.get("#i6ksxrtk > h1 > a"),
    homeButton: () => cy.get("#i6kl732v0label"),
    exploreButton: () => cy.get("#i6kl732v1label"),
    roomsButton: () => cy.get("#i6kl732v2label"),
    contactButton: () => cy.get("#i6kl732v3label"),
    bookNowButton: () => cy.get(".wixui-button__label"),

    facebookButton: () => cy.get("#i0odz-i6rlbitx > a"),
    twitterButton: () => cy.get("#i220sc-i6rlbitx > a"),
    pinterestButton: () => cy.get("#i3175p-i6rlbitx > a"),
    wixButton: () => cy.contains("a", "Wix.com"),
    mailToButton: () => cy.contains("a", "info@mysite.com"),

    clickHomeAndAwayButton: () => cy.get("#i6ksxrtk > h1 > a").should("be.visible").click(),
    clickHomeButton: () => cy.get("#i6kl732v0label").should("be.visible").click(),
    clickExploreButton: () => cy.get("#i6kl732v1label").should("be.visible").click(),
    clickRoomsButton: () => cy.get("#i6kl732v2label").should("be.visible").click(),
    clickContactButton: () => cy.get("#i6kl732v3label").should("be.visible").click(),
    clickBookNowButton: () => cy.get(".wixui-button__label").should("be.visible").click(),
    
    clickCheckInButton: () =>
        cy.get('iframe.nKphmK[title="Wix Hotels"]')
            .its('0.contentDocument')
            .find('#search-widget #check-in')
            .should('exist')
            .click(), 

    clickIncreaseAdultsButton: () =>
        cy.get('iframe.nKphmK[title="Wix Hotels"]')
            .its('0.contentDocument')
            .find('#adults .up')
            .should('be.visible')
            .click(),

    clickDecreaseAdultsButton: () =>
        cy.get('iframe.nKphmK[title="Wix Hotels"]')
            .its('0.contentDocument')
            .find('#adults .down')
            .should('be.visible')
            .click(),

    clickIncreaseChildrenButton: () =>
        cy.get('iframe.nKphmK[title="Wix Hotels"]')
            .its('0.contentDocument')
            .find('#children .up')
            .should('be.visible')
            .click(),

    clickDecreaseChildrenButton: () =>
        cy.get('iframe.nKphmK[title="Wix Hotels"]')
            .its('0.contentDocument')
            .find('#children .down')
            .should('be.visible')
            .click(),

    clickSearchButton: () =>
        cy.get('iframe.nKphmK[title="Wix Hotels"]')
            .its('0.contentDocument')
            .find('button[ng-click="filter($root.endpoint)"]') 
            .should('be.visible') 
            .click(),


    getTextCheckInLabel() {
        return cy.get('iframe.nKphmK[title="Wix Hotels"]')
          .its('0.contentDocument') 
          .find('#search-widget #check-in-value') 
          .invoke('text'); 
      }
} 

export const contactpage = {
    nameField: () => cy.get("#input_comp-jxbsa1e9"),
    emailField: () => cy.get("#input_comp-jxbsa1em"),
    phoneField: () => cy.get("#input_comp-jxbsa1ev"),
    commentField: () => cy.get("#textarea_comp-jxbsa1f7"),
    submitButton: () => cy.get("#comp-jxbsa1fi > button"),

    submitMessage: () => cy.contains('Thanks for submitting!'),

    contactParagraph: () => cy.get('#i6ly3ckc_0'),
    mapFrame: () => cy.get('iframe[title="Google Maps"]'),
    fullscreenButton: () => 
        cy.get('iframe[title="Google Maps"]')
            .its('0.contentDocument')
            .find('button[title="Toggle fullscreen view"]')
  
}