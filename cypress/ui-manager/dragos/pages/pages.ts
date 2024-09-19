export const homeURL = "https://ancabota09.wixsite.com/intern";

export const contactURL = "https://ancabota09.wixsite.com/intern/contact";

export const exploreURL = "https://ancabota09.wixsite.com/intern/explore";

export const roomsURL = "https://ancabota09.wixsite.com/intern/rooms";


 export const homepage = {
    roomsButton: () => cy.get("#i6kl732v2label"),
    clickOnRoomsButton: () => cy.get("#i6kl732v2label").should("be.visible").click(),
    exploreButton: () => cy.get("#i6kl732v1label"),
    clickOnExploreButton: () => cy.get("#i6kl732v1label").should("be.visible").click(),
    contactButton: () => cy.get('#i6kl732v3label'),
    clickOnContactButton: () => cy.get('#i6kl732v3label').should("be.visible").click(),

    facebookButton: () => cy.get('[href="http://www.facebook.com/wix"]'),
    twitterButton: () => cy.get('[href="http://www.twitter.com/wix"]'),
    pinterestButton: () => cy.get('[href="http://pinterest.com/wixcom/"]'),

    quickSearchFrame : '#i6kppi75 > .nKphmK'

    
  }
  
  export const roomsPage = {
    cottageRoom: () => cy.get("#content > div > div.content-body > div > ul > li:nth-child(2) > div > div.info > div.bottom > button > span")
  }
  
  export const explorePage = {
    twitterLink: () => cy.get('[href="http://www.twitter.com/wix"]')
  }
  
  export const contactPage = {
    nameField: () => cy.get("#input_comp-jxbsa1e9"),
    emailField: () => cy.get("#input_comp-jxbsa1em"),
    phoneField: () => cy.get("#input_comp-jxbsa1ev"),
    commentField: () => cy.get("#textarea_comp-jxbsa1f7"),
    submitField: () => cy.get("#comp-jxbsa1fi > button")
  }