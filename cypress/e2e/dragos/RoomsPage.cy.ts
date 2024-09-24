import { roomsURL, roomsPage } from "../../ui-manager/dragos/pages/pages";
import { isDisabledDate, selectDateCheckIn, selectDateCheckOut } from "../../ui-manager/dragos/helpers/functions";

describe("Test ExplorePage", () => {

  beforeEach(() => {
    cy.visit(roomsURL);
  });

  it('Check filters Test', () => {
    cy.wait(3000)
    const today = new Date();
    const nextDate = new Date();
    nextDate.setDate(today.getDate() + 3);

    cy.get(roomsPage.iframeSelector).its('0.contentDocument').find('#check-in').should('exist').click();
    selectDateCheckIn(today);

    //cy.get(roomsPage.iframeSelector).its('0.contentDocument').find('#check-out').should('exist').click();
    //cy.wait(3000)
    selectDateCheckOut(nextDate);

    cy.get(roomsPage.iframeSelector)
        .its('0.contentDocument')
        .find('#adults > .up').click({ force: true,  multiple: true }); 

    cy.get(roomsPage.iframeSelector)
        .its('0.contentDocument')
        .find('#children > .up').click({ force: true,  multiple: true }); 

    cy.get(roomsPage.iframeSelector)
        .its('0.contentDocument')
        .find('button.search') 
        .should('be.visible') 
        .click();

    // format dates for assertion
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    const month = today.toLocaleDateString('en-US', options).split(' ')[0]; 
    const startDate = today.getDate(); 
    const endDate = nextDate.getDate(); 
    const numberOfNights = nextDate.getDate() - today.getDate(); // Nr of nights

    cy.get(roomsPage.iframeSelector)
        .its('0.contentDocument')
        .find('h2.s-title.resultbar')
        .should('exist')
        .invoke('text')
        .then((text) => {
            // Normalize the text by trimming whitespace
            const normalizedText = text.replace(/\s+/g, ' ').trim();

            expect(normalizedText).to.include(month);
            expect(normalizedText).to.include(`${startDate}`);
            expect(normalizedText).to.include(`${endDate}`);
            expect(normalizedText).to.include(`${numberOfNights} night(s)`);
        });
    });

  it('Test "clear filters" button', () => {
        cy.wait(3000)
        const today = new Date();
        const nextDate = new Date();
        nextDate.setDate(today.getDate() + 3);
    
        cy.get(roomsPage.iframeSelector).its('0.contentDocument').find('#check-in').should('exist').click();
        selectDateCheckIn(today);
        selectDateCheckOut(nextDate);

        cy.get(roomsPage.iframeSelector)
            .its('0.contentDocument')
            .find('button.search') 
            .should('be.visible') 
            .click();
    
        
        cy.get(roomsPage.iframeSelector)
            .its('0.contentDocument')
            .find('h2.s-title.resultbar')
            .should('exist')

        cy.get(roomsPage.iframeSelector)
            .its('0.contentDocument')
            .find('#content > div > div.clearfix.content-head > h2 > a')
            .should('exist').click()
        
        cy.get(roomsPage.iframeSelector)
            .its('0.contentDocument')
            .find('h2.s-title.resultbar')
            .should('not.exist')
    });

  it('should verify the presence, visibility, and content of standard room descriptions, prices, and features', () => {
        cy.wait(3000)
        cy.get(roomsPage.iframeSelector)
          .its('0.contentDocument')
          .should('exist')
          .then((iframeDoc) => {
            cy.wrap(iframeDoc)
              .find(roomsPage.standardRoomDesc()) 
              .should('be.visible')
              .invoke('text')
              .should('not.be.empty');
      
            cy.wrap(iframeDoc)
              .find(roomsPage.standardRoomPrice()) 
              .should('be.visible')
              .invoke('text')
              .should('match', /\d+/);
      
            cy.wrap(iframeDoc)
              .find(roomsPage.standardRoomFeatures()) 
              .should('be.visible')
              .invoke('text')
              .should('not.be.empty');
          });
    });

  it('should verify the presence, visibility, and content of cottage room descriptions, prices, and features', () => {
        cy.wait(3000)
        cy.get(roomsPage.iframeSelector)
          .its('0.contentDocument')
          .should('exist')
          .then((iframeDoc) => {
            cy.wrap(iframeDoc)
              .find(roomsPage.cottageRoomDesc()) 
              .should('be.visible')
              .invoke('text')
              .should('not.be.empty');
      
            cy.wrap(iframeDoc)
              .find(roomsPage.cottageRoomPrice()) 
              .should('be.visible')
              .invoke('text')
              .should('match', /\d+/);
      
            cy.wrap(iframeDoc)
              .find(roomsPage.cottageRoomFeatures()) 
              .should('be.visible')
              .invoke('text')
              .should('not.be.empty');
          });
    });

  it('should verify the presence, visibility, and content of classic room descriptions, prices, and features', () => {
        cy.wait(3000)
        cy.get(roomsPage.iframeSelector)
          .its('0.contentDocument')
          .should('exist')
          .then((iframeDoc) => {
            cy.wrap(iframeDoc)
              .find(roomsPage.classicRoomDesc()) 
              .should('be.visible')
              .invoke('text')
              .should('not.be.empty');
      
            cy.wrap(iframeDoc)
              .find(roomsPage.classicRoomPrice()) 
              .should('be.visible')
              .invoke('text')
              .should('match', /\d+/);
      
            cy.wrap(iframeDoc)
              .find(roomsPage.classicRoomFeatures()) 
              .should('be.visible')
              .invoke('text')
              .should('not.be.empty');
          });
    });

  it.only('should verify the standard room title and correct room redirection', () => {
        cy.wait(3000)
        cy.get(roomsPage.iframeSelector)
          .its('0.contentDocument')
          .should('exist')
          .then((iframeDoc) => {
            cy.wrap(iframeDoc)
              .find(roomsPage.standardRoomTitle()) 
              .should('be.visible')
              .invoke('text')
              .should('eq',"Standard Suite");
      
            cy.wrap(iframeDoc)
              .find(roomsPage.standardRoom()) 
              .should('be.visible').first().click()

            cy.wait(3000);

            cy.wrap(iframeDoc)
                .find(roomsPage.roomPageTitle()) 
                .should('be.visible').invoke('text')
                .then(text => text.trim()) // Trim whitespace because it contains /n
                .should('eq', "Standard Suite");
          });
    });

  it.only('should verify the cottage room title and correct room redirection', () => {
        cy.wait(3000)
        cy.get(roomsPage.iframeSelector)
          .its('0.contentDocument')
          .should('exist')
          .then((iframeDoc) => {
            cy.wrap(iframeDoc)
              .find(roomsPage.cottageRoomTitle()) 
              .should('be.visible')
              .invoke('text')
              .should('eq',"Cottage");
      
            cy.wrap(iframeDoc)
              .find(roomsPage.cottageRoom()) 
              .should('be.visible').first().click()

            cy.wait(3000);

            cy.wrap(iframeDoc)
                .find(roomsPage.roomPageTitle()) 
                .should('be.visible').invoke('text')
                .then(text => text.trim()) // Trim whitespace because it contains /n
                .should('eq', "Cottage");
          });
    });

  it.only('should verify the classic room title and correct room redirection', () => {
        cy.wait(3000)
        cy.get(roomsPage.iframeSelector)
          .its('0.contentDocument')
          .should('exist')
          .then((iframeDoc) => {
            cy.wrap(iframeDoc)
              .find(roomsPage.classicRoomTitle()) 
              .should('be.visible')
              .invoke('text')
              .should('eq',"Classic App");
      
            cy.wrap(iframeDoc)
              .find(roomsPage.classicRoom()) 
              .should('be.visible').first().click()

            cy.wait(3000);

            cy.wrap(iframeDoc)
                .find(roomsPage.roomPageTitle()) 
                .should('be.visible').invoke('text')
                .then(text => text.trim()) // Trim whitespace because it contains /n
                .should('eq', "Classic App");
          });
    });
});
