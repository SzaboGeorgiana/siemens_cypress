import { homePage,roomsPage } from "../../ui-manager/georgiana/pages/pages";
// import {selectDateInIframe,formatDateForSearch} from "../../ui-manager/georgiana/helpers/functions"


describe("Standard Suite Page Test", () => {


    beforeEach(() => {
        cy.visit("https://ancabota09.wixsite.com/intern/rooms/rooms/afda6ba1-efd1-4432-bd42-dd678bd4beb4%3FcheckIn%3D1727308800000%26checkOut%3D1727654400000%26adults%3D1%26children%3D0%26price%3D1");
        // cy.contains("ROOMS").first().click();
        // // homePage.clickOnExploreButton;
        // cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/rooms')
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

                roomsPage.iframeSelector()
                .its('0.contentDocument')
                .find('button.fancy-btn.s-button.button').first()
                .should('be.visible')
                .click();

                cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/booknow');
                roomsPage.resultBar()
                  .should('exist')
        });
      });
    }

    it('verify Search With 2 Adults', () => {
      const checkInDate = new Date(); 
      const checkOutDate = new Date(checkInDate); 
      checkOutDate.setDate(checkInDate.getDate() + 3); 

      setDataInSearchWidget(checkInDate,checkOutDate,2,0);
    });


    it('Search With 8 Adults', () => {
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

    it.only('should click the "Read Our Policies" link', () => {
        cy.wait(10000);

        roomsPage.iframeSelector()
        .its('0.contentDocument')
        .find('a.policies') // or cy.contains('Read Our Policies') if you prefer text matching
          .should('be.visible') // Check if the link is visible
          .and('have.attr', 'href') // Verify it has an href attribute
          .then((href) => {
            expect(href).to.include("checkIn")
            expect(href).to.include("checkOut")

        });
        // Click the link
        roomsPage.iframeSelector()
        .its('0.contentDocument')
        .find('a.policies')
          .click();
       
      });

});
 

