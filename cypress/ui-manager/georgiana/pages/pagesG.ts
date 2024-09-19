export const homePage = {
    homeAndAwayButton: () => cy.get("#i6ksxrtk > h1 > a"),
    homeButton: () => cy.get("#i6kl732v0label"),
    exploreButton: () => cy.get("#i6kl732v1label"),
    roomsButton: () => cy.get("#i6kl732v2label"),
    contactButton: () => cy.get("#i6kl732v3label"),
    bookNowButton: () => cy.get(".wixui-button__label"),

    facebookButton: () => cy.get('#i0odz-i6rlbitx > a'),
    twitterButton: () => cy.get('#i220sc-i6rlbitx > a'),
    pinterestButton: () => cy.get('#i3175p-i6rlbitx > a'),
    wixButton: () => cy.get('#i71wwqnj > p:nth-child(2) > span > a'),
    mailToButton: () => cy.get('[href="mailto:info@mysite.com"]'),

    quickSearchFrame : '#i6kppi75 > .nKphmK',
    
    searchButton: () => cy.get("button.s-button"),
    adultsButtonIncr: () => cy.get("#adults > .up"),
    adultsButtonDecr: () => cy.get("#adults > .down"),
    childrenButtonIncr: () => cy.get("#children > .up"),
    childrenButtonDecr: () => cy.get("#children > .down"),
  
    // clickOnHomeAndAwayButton: () => cy.get("#i6ksxrtk > h1 > a").should('be.visible').click(),
    // clickOnHomeButton: () => cy.get("#i6kl732v0label").should('be.visible').click(),
    // clickOnExploreButton: () => cy.get("#i6kl732v1label").should('be.visible').click(),
    // clickOnRoomsButton: () => cy.get("#i6kl732v2label").should('be.visible').click(),
    // clickOnContactButton: () => cy.get("#i6kl732v3label").should('be.visible').click(),
    // clickOnBookNowButton: () => cy.get(".wixui-button__label").should('be.visible').click(),
    // clickOnFacebookButton: () => cy.get("#i0odz-i6rlbitx").should('be.visible').click(),
    // clickOnTwitterButton: () => cy.get("#i220sc-i6rlbitx").should('be.visible').click(),
    // clickOnPinterestButton: () => cy.get("#i3175p-i6rlbitx").should('be.visible').click(),
    // clickOnWixButton: () => cy.get('[href="https://wix.com"]').should('be.visible').click(),
    // clickOnMailToButton: () => cy.get('[href="mailto:info@mysite.com"]').should('be.visible').click(),


    // clickOnSearchButton: () => {
    //   cy.get('iframe').then($iframe => {
    //     const $body = $iframe.contents().find('body');
    //     cy.wrap($body).find("button.s-button").should('be.visible').click();
    //   });
    // },
    // clickOnAdultsButtonIncr: () => {
    //   cy.get('iframe').then($iframe => {
    //     const $body = $iframe.contents().find('body');
    //     cy.wrap($body).find("#adults > .up").should('be.visible').click();
    //   });
    // },
    // clickOnAdultsButtonDecr: () => {
    //   cy.get('iframe').then($iframe => {
    //     const $body = $iframe.contents().find('body');
    //     cy.wrap($body).find("#adults > .down").should('be.visible').click();
    //   });
    // },
    // clickOnChildrenButtonIncr: () => {
    //   cy.get('iframe').then($iframe => {
    //     const $body = $iframe.contents().find('body');
    //     cy.wrap($body).find("#children > .up").should('be.visible').click();
    //   });
    // },
    // clickOnChildrenButtonDecr: () => {
    //   cy.get('iframe').then($iframe => {
    //     const $body = $iframe.contents().find('body');
    //     cy.wrap($body).find("#children > .down").should('be.visible').click();
    //   });
    // },
  
    // isAdultsButtonDecrDisabled: () => {
    //   cy.get('iframe').then($iframe => {
    //     const $body = $iframe.contents().find('body');
    //     cy.wrap($body).find("#adults > .down").should('have.attr', 'disabled');
    //   });
    // },
  
    // isChildrenButtonDecrDisabled: () => {
    //   cy.get('iframe').then($iframe => {
    //     const $body = $iframe.contents().find('body');
    //     cy.wrap($body).find("#children > .down").should('have.attr', 'disabled');
    //   });
    // },
  
    // checkInDateIsDisabled: (date) => {
    //   const formattedDate = date.format('d, EEEE MMMM yyyy');
    //   cy.get('iframe').then($iframe => {
    //     const $body = $iframe.contents().find('body');
    //     cy.wrap($body).find(`button[aria-label="${formattedDate}"]`).should('have.attr', 'disabled');
    //   });
    // },


    // de aici in jos
    getButtonColor: (buttonElement) => {
      return buttonElement.invoke('css', 'color');  // Returns the color property
    },

      // Verifică dacă widgetul de căutare este afișat
      searchWidgetIsDisplayed:() =>{

        cy.get('iframe.nKphmK[title="Wix Hotels"]').its('0.contentDocument').find('#search-widget #check-in')
        .should('exist').click()
        // .find('#tpapopup-1726744450629_rtby_i6kppi75 > iframe').its('0.contentDocument')
        // .should('exist');
      },
    
    //   // Verifică dacă calendarul este afișat
    //   calendarIsDisplayed() {
    //     cy.get('.calendar').should('be.visible');
    //   },
    
    //   // Verifică dacă frame-ul de check-out este afișat
    //   checkOutFrameIsDisplayed() {
    //     cy.get('.check-out-frame').should('be.visible');
    //   },
    
    //   // Verifică dacă butonul de clear este afișat
    //   clearIsDisplayed() {
    //     cy.get('iframe').then(($iframe) => {
    //       const $body = $iframe.contents().find('body');
    //       cy.wrap($body).find('.clear-button').should('be.visible');
    //     });
    //   },
    
    //   // Verifică dacă butonul pentru luna următoare este afișat
    //   nextMonthButtonIsDisplayed() {
    //     cy.get('.next-month-button').should('be.visible');
    //   },
    
    //   // Verifică dacă butonul pentru luna precedentă este afișat
    //   previousMonthButtonIsDisplayed() {
    //     cy.get('.previous-month-button').should('be.visible');
    //   },
    
      // Verifică dacă butonul de decrementare a adulților este dezactivat
      decrementAdultsButtonDisabled() {
        cy.get('.decrement-adults-button').should('be.disabled');
      },
    
    //   // Verifică dacă butonul de incrementare a adulților este dezactivat
    //   incrementAdultsButtonDisabled() {
    //     cy.get('.increment-adults-button').should('be.disabled');
    //   },
    
    //   // Verifică dacă butonul de incrementare a copiilor este dezactivat
    //   incrementKidsButtonDisabled() {
    //     cy.get('.increment-kids-button').should('be.disabled');
    //   },
    
      // Încearcă să decrementezi numărul de adulți
      tryToDecrementAdults(targetValue) {
        cy.get('.adults-counter').invoke('text').then((counterValue) => {
          while (parseInt(counterValue) > targetValue) {
            this.decrementAdultsButtonDisabled(); // Verifică dacă butonul este dezactivat
            cy.get('.decrement-adults-button').click();
            cy.get('.adults-counter').invoke('text').then((newValue) => {
              counterValue = newValue;
              cy.log('Counter value after decrement: ' + counterValue);
            });
          }
        });
      },
    
    //   // Încearcă să incrementezi numărul de adulți
    //   tryToIncrementAdults(targetValue) {
    //     cy.get('.adults-counter').invoke('text').then((counterValue) => {
    //       while (parseInt(counterValue) < targetValue) {
    //         this.incrementAdultsButtonDisabled(); // Verifică dacă butonul este dezactivat
    //         cy.get('.increment-adults-button').click();
    //         cy.get('.adults-counter').invoke('text').then((newValue) => {
    //           counterValue = newValue;
    //           cy.log('Counter value after increment: ' + counterValue);
    //         });
    //       }
    //     });
    //   },
    
    //   // Încearcă să incrementezi numărul de copii
    //   tryToIncrementKids(targetValue) {
    //     cy.get('.kids-counter').invoke('text').then((counterValue) => {
    //       while (parseInt(counterValue) < targetValue) {
    //         this.incrementKidsButtonDisabled(); // Verifică dacă butonul este dezactivat
    //         cy.get('.increment-kids-button').click();
    //         cy.get('.kids-counter').invoke('text').then((newValue) => {
    //           counterValue = newValue;
    //           cy.log('Counter value after increment: ' + counterValue);
    //         });
    //       }
    //     });
    //   },
    
    //   // Setează data de check-in
    //   setCheckInDate(checkInDate) {
    //     cy.get('.check-in-button').click();
    //     cy.get('.calendar').should('be.visible');
    //     cy.get('.check-in-date').type(checkInDate);
    //     return checkInDate;
    //   },
    
    //   // Setează data de check-out
    //   setCheckOutDate(checkOutDate, monthsDifference, isSameMonth) {
    //     if (isSameMonth) {
    //       cy.get('.previous-month-button').should('be.visible').click();
    //     }
    
    //     for (let i = 0; i < monthsDifference; i++) {
    //       cy.get('.next-month-button').should('be.visible').click();
    //     }
    
    //     cy.get('.check-out-date').type(checkOutDate);
    //     return checkOutDate;
    //   }
}
    
  