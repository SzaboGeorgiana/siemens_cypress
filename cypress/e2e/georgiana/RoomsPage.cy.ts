import { homePage,roomsPage } from "../../ui-manager/georgiana/pages/pages";
// import {selectDateInIframe,formatDateForSearch} from "../../ui-manager/georgiana/helpers/functions"



describe("Rooms Page Test", () => {


    beforeEach(() => {
        cy.visit("/");
        cy.contains("ROOMS").first().click();
        // homePage.clickOnExploreButton;
        cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/rooms')
    });


    it('Adults Button increment', () => {
      cy.wait(10000)
      roomsPage.tryToIncrement(6);
      roomsPage.adultValue()
      .invoke('text')
      .then((finalValue) => {
        expect(finalValue).to.equal("6"); 
        roomsPage.adultsButtonIncrement()
              .should('be.visible').should('have.attr', 'disabled', 'disabled');

          });
        });
    
    it('Adults Button decrement', () => {
      cy.wait(10000)
      roomsPage.tryToDecrement(1);
      roomsPage.adultValue()
      .invoke('text')
      .then((finalValue) => {
        expect(finalValue).to.equal("1"); 
        roomsPage.adultsButtonDecrement()
              .should('be.visible').should('have.attr', 'disabled', 'disabled');

        });
    });

    it('verify Search With CheckOut One Day After CheckIn', () =>{ 
      cy.wait(10000)
      const todayDate = new Date(); 
      const tomorrowDate = new Date(todayDate); 
      tomorrowDate.setDate(todayDate.getDate() + 1); 

      roomsPage.setDataInCalendar(todayDate,tomorrowDate)
    });
  

    // it.only('verify Search With 2 Adults', () => {
    //   cy.wait(10000)

    //   const checkInDate = new Date(); 
    //   const checkOutDate = new Date(checkInDate); 
    //   checkOutDate.setDate(checkInDate.getDate() + 3); 

    //   roomsPage.setDataInCalendar(checkInDate,checkOutDate)
    //   roomsPage.tryToIncrement(2);
    //   roomsPage.adultValue()
    //   .invoke('text')
    //   .then((finalValue) => {
    //     expect(finalValue).to.equal("2"); 
        
    //     cy.get('iframe.nKphmK[title="Wix Hotels"]')
    //     .its('0.contentDocument')
    //     .find('#search-widget > form > ul > li.search > button')
    //     .click()

    //     cy.url().should('include', 'https://ancabota09.wixsite.com/intern/rooms');
    //   });



    // Funcția separată completarea datelor in search widget
    function setDataInSearchWidget(checkInDate,checkOutDate,adultsNb,kidsNb) {
      cy.wait(10000);

      roomsPage.setDataInCalendar(checkInDate, checkOutDate);
      roomsPage.tryToIncrement(adultsNb);
      roomsPage.tryToIncrementKids(kidsNb);

      roomsPage.adultValue()
        .invoke('text')
        .then((finalValue) => {
        
          expect(finalValue).to.equal(adultsNb.toString());
          
              roomsPage.childrenValue()
              .invoke('text')
              .then((childrenFinalValue) => {
              
                expect(childrenFinalValue).to.equal(kidsNb.toString());

                roomsPage.searchButton()
                  .click();

                cy.url().should('include', 'https://ancabota09.wixsite.com/intern/rooms');
        });
      });
    }

    it('verify Search With 2 Adults', () => {
      const checkInDate = new Date(); 
      const checkOutDate = new Date(checkInDate); 
      checkOutDate.setDate(checkInDate.getDate() + 3); 

      setDataInSearchWidget(checkInDate,checkOutDate,2,0);
    });


    it.only('Search With 8 Adults', () => {
      const checkInDate = new Date(); 
      const checkOutDate = new Date(checkInDate); 
      checkOutDate.setDate(checkInDate.getDate() + 3); 

      setDataInSearchWidget(checkInDate,checkOutDate,8,0);
    });

    it('Search With 2 Kids', () => {
      const checkInDate = new Date(); 
      const checkOutDate = new Date(checkInDate); 
      checkOutDate.setDate(checkInDate.getDate() + 3); 

      setDataInSearchWidget(checkInDate,checkOutDate,1,2);
    });

    

});
 

