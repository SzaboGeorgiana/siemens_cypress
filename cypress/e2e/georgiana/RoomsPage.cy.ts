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

    it.only('verify Search after search', () => {
      const checkInDate = new Date(); 
      const checkOutDate = new Date(checkInDate); 
      checkOutDate.setDate(checkInDate.getDate() + 3); 

      setDataInSearchWidget(checkInDate,checkOutDate,2,0);

      const checkInDate1 = new Date(checkInDate); 
      checkInDate1.setDate(checkInDate.getDate() + 1); 
      const checkOutDate1 = new Date(checkInDate1); 
      checkOutDate1.setDate(checkInDate1.getDate() + 3); 

      setDataInSearchWidget(checkInDate1,checkOutDate1,2,0);
    });

    it.only('verify clear after search', () => {
      const checkInDate = new Date(); 
      const checkOutDate = new Date(checkInDate); 
      checkOutDate.setDate(checkInDate.getDate() + 3); 

      setDataInSearchWidget(checkInDate,checkOutDate,2,0);

      roomsPage.resultBar()
            .should('exist')

        roomsPage.iframeSelector()
            .its('0.contentDocument')
            .find('#content > div > div.clearfix.content-head > h2 > a')
            .should('exist').click()
        
      roomsPage.resultBar()
            .should('not.exist')

    });


    it.only('Test all room images and URLs', () => {
      cy.wait(10000);
      const defaultImage = "https://static.wixstatic.com/media/fde015_cb4dcccb4258499a894623f5282baa98.png/v1/fill/w_240,h_170,q_85,usm_0.66_1.00_0.01/fde015_cb4dcccb4258499a894623f5282baa98.png";
      const results: boolean[] = []; // Array to store results
    
      roomsPage.roomsList().each(($room) => {
        // Get the room image source
        const roomImageSrc = $room.find('img.thumbnail').attr('src');
        // Get the room title
        const roomTitle = $room.find('h3 a').text();
    
        if (roomImageSrc === defaultImage) {
          cy.log(`Room ${roomTitle} has default image`);
          results.push(false); // Add false to results
        } else {
          cy.log(`Room ${roomTitle} has an image`);
          results.push(true); // Add true to results
        }
      }).then(() => {
        const allOk = results.every(result => result === true);
        cy.wrap(allOk).should('eq', true); // Assert that all checks passed
      });
    });
    
    function verifyLinksAndButtons(buttonType) {
      cy.wait(10000);
      const initialRoomTitles : string[] = []; 
      const results: boolean[] = []; // Array to store results

      roomsPage.roomsList().each(($room) => {
          const roomTitle = $room.find('h3 a').text();
          initialRoomTitles.push(roomTitle); // Store each room title in the array
      }).then(() => {
              initialRoomTitles.forEach((roomTitle_initial, index) => {
                if (buttonType === "TitleLink") {
                  roomsPage.roomsList().eq(index).find('h3 a').click();
                } 
                if (buttonType === "MoreInfo") {
                    roomsPage.roomsList().eq(index).find('.more span.strans').click();
                }
                if (buttonType === "HideMoreInfo") {
                  roomsPage.roomsList().eq(index).find('.more').click();
                } 
                cy.wait(5000); // Wait for content to load after the click
              
                roomsPage.iframeSelector()
                .its('0.contentDocument')
                .find('h2.s-title span.strans').then(($finalTitle) => {
                    const roomTitle_final = $finalTitle.text();
                    
                    // Compare initial and final room titles
                    if (roomTitle_initial === roomTitle_final) {
                        cy.log(`Room ${roomTitle_initial} loaded successfully`);
                        results.push(true); // Room loaded successfully
                    } else {
                        cy.log(`Room ${roomTitle_initial} did not load successfully`);
                        results.push(false); // Room did not load successfully
                    }
                });
            
              cy.visit('https://ancabota09.wixsite.com/intern/rooms'); 
              cy.wait(10000); // Wait for content to load after the click
            
          })
              const allOk = results.every(result => result === true);
              cy.wrap(allOk).should('eq', true); // Assert that all checks passed
      })
           
    }
   
    it.only('Verify more info button', () => {
      verifyLinksAndButtons("MoreInfo")
    });

    it('Verify hide more info button', () => {
      verifyLinksAndButtons("HideMoreInfo")
    });

    it('Verify title link', () => {
      verifyLinksAndButtons("TitleLink");
    });

});
 

