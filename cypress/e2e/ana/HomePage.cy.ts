import { homePage } from "../../ui-manager/ana/pages/pages";

beforeEach(() => {
    cy.visit("/")
  })

  //navbar buttons

  it("Home Button Test", () => {
    homePage.homeButton().should("be.visible").click()
    cy.url().should("eq", "https://ancabota09.wixsite.com/intern")
  })

  it("Explore Button Test", () => {
    homePage.exploreButton().should("be.visible").click()
    cy.url().should("eq", "https://ancabota09.wixsite.com/intern/explore")
  })

  it("Rooms Button Test", () => {
    homePage.roomsButton().should("be.visible").click()
    cy.url().should("eq", "https://ancabota09.wixsite.com/intern/rooms")
  }) 

  it("Contact Button Test", () => {
    homePage.contactButton().should("be.visible").click()
    cy.url().should("eq", "https://ancabota09.wixsite.com/intern/contact")
  })

  it("Book Now Button Test", () => {
    homePage.contactButton().should("be.visible").click()
    cy.url().should("eq", "https://ancabota09.wixsite.com/intern/booknow")
  })

  it("Page Title Button Test", () => {
    homePage.pageTitleButton().should("be.visible").click()
    cy.url().should("eq", "https://ancabota09.wixsite.com/intern/")
  })

  //footer social media buttons

  it("Facebook Button Test", () => {
    //homePage.facebookButton().should("have.prop", "target", "_blank").invoke('removeAttr', 'target', '_self').click({ force: true })
    //should("exist").invoke("removeAttr", "target").click({ force: true })
    //cy.url({ timeout: 10000 }).should("eq", "https://www.facebook.com/wix");
    homePage.facebookButton()
      .should("be.visible")
      .invoke('attr', 'href')
      .should('equal', 'http://www.facebook.com/wix')
  })

  it("X Button Test", () => {
    homePage.xButton()
      .should("be.visible")
      .invoke('attr', 'href')
      .should('equal', 'https://x.com/wix')
  })

  it("Pinterest Button Test", () => {
    homePage.pinterestButton()
      .should("be.visible")
      .invoke('attr', 'href')
      .should('equal', 'http://pinterest.com/wixcom/')
  })

  //footer buttons

  it("Wix Page Button Test", () => {
    // homePage.wixPageButton().invoke('removeAttr', 'target').click()
    // cy.url({ timeout: 10000 }).should('equal', 'https://www.wix.com/?utm_campaign=vir_created_with')
    // cy.go('back');
    homePage.wixPageButton()
      .should("be.visible")
      .invoke('attr', 'href')
      .should('equal', 'http://wix.com/?utm_campaign=vir_created_with');
  })

  it("Contact Mail Button Test", () => {
    homePage.contactMailButton()
      .should("be.visible")
      .should('have.attr', 'href')
      .should('contain', 'info@mysite.com');
  })
  
  //Search Widget
  it.only("Selector Check In Button Test", () => {
    cy.visit("https://ancabota09.wixsite.com/intern")
    cy.get('iframe.nKphmK[title="Wix Hotels"]').its('0.contentDocument').find('#search-widget #check-in')
    .should('exist').click()
    .find('#tpapopup-1726744450629_rtby_i6kppi75 > iframe').its('0.contentDocument')
    .should('exist');
    // cy.get('iframe.U73P_q[title="tpapopup-1726743680262_rtby_i6kppi75"]').its('0.contentDocument').should('exist');
    
  })



