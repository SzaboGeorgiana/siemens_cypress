export const homePage = {
    //Navbar
    roomsButton: () => cy.get("#i6kl732v2label"),
    clickOnRoomsButton: () => cy.get("#i6kl732v2label").should("be.visible").click(),
    exploreButton: () => cy.get("#i6kl732v1label"),
    contactButton: () => cy.get("#i6kl732v3label"),
    bookNowButton: () => cy.get('[data-testid="linkElement"] > .l7_2fn'),
    homeButton: () => cy.get("#i6kl732v0label"),
    pageTitleButton: () => cy.get('.font_0 > .wixui-rich-text__text'),
    //footer social media buttons
    facebookButton: () => cy.get('#i0odz-i6rlbitx > a'),
    xButton: () => cy.get('#i220sc-i6rlbitx > a'),
    pinterestButton: () => cy.get('#i3175p-i6rlbitx > a'),
    //footer buttons
    wixPageButton: () => cy.get('#i71wwqnj > p:nth-child(2) > span > a'),
    contactMailButton: () => cy.get('#i71ww6nk > p:nth-child(1) > a'),
    //Search Widget
    searchWidgetIframe: () => cy.get('#i6kppi75 > iframe'),
    calendarCheckInButton: () => cy.get('.check-in button'),

  }
  
  export const roomsPage = {
    cottageRoom: () => cy.get("#content > div > div.content-body > div > ul > li:nth-child(2) > div > div.info > div.bottom > button > span")
  }
  
  export const explorePage = {
    twitterLink: () => cy.get('[href="http://www.twitter.com/wix"]'),
    title: () => cy.get('#i6ksjvsy > h2'),
    textBlock: () => cy.get('#i6kvh3dl > p > span')
  }
  
  export const contactPage = {
    nameField: () => cy.get("#input_comp-jxbsa1e9"),
    emailField: () => cy.get("#input_comp-jxbsa1em"),
    phoneField: () => cy.get("#input_comp-jxbsa1ev"),
    commentField: () => cy.get("#textarea_comp-jxbsa1f7"),
    submitButton: () => cy.get("#comp-jxbsa1fi > button"),
    form:() => cy.get(".JVi7i2.comp-jxbsa1dm.wixui-form"),
    title: () => cy.get('#i6ly3ckd > h2'),
    textBlock: () => cy.get('#i6ly3ckc_0'),
    mapFullscreenButton: () => cy.get('#map_canvas > div > div.gm-style > div:nth-child(8) > button'),
    facebookButton: () => cy.get('#i01vcq-i6m1143v > a'),
    xButton: () => cy.get('#i21ibq-i6m1143v > a'),
    pinterestButton: () => cy.get('#i3mls-i6m1143v > a'),
    confirmationMessage: () => cy.get('#comp-jxbsa1fv > p > span')
  }