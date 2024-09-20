import { homePage } from "../../ui-manager/georgiana/pages/pages";
import dayjs from 'dayjs';


describe("Home Page Test", () => {
  
    beforeEach(() => {
    cy.visit("/")
  })

  // Array of buttons and corresponding URLs
  const buttons_navbar = [
    { element: homePage.exploreButton, url: "https://ancabota09.wixsite.com/intern/explore", name: "Explore" },
    { element: homePage.roomsButton, url: "https://ancabota09.wixsite.com/intern/rooms", name: "Rooms" },
    { element: homePage.homeButton, url: "https://ancabota09.wixsite.com/intern", name: "Home" },
    { element: homePage.homeAndAwayButton, url: "https://ancabota09.wixsite.com/intern/", name: "Home&Away" },
    { element: homePage.contactButton, url: "https://ancabota09.wixsite.com/intern/contact", name: "Contact" },
    { element: homePage.bookNowButton, url: "https://ancabota09.wixsite.com/intern/booknow", name: "BookNow" },
  ];

  buttons_navbar.forEach((button) => {
    it(`Test: ${button.name} button visibility and functionality`, () => {
      button.element().should('be.visible').click();
      cy.url().should('eq', button.url);
      homePage.getButtonColor(button.element()).should('eq',"rgb(255, 255, 255)")
      });    
  });

    const buttons_footer = [
      { element: homePage.facebookButton, url: "http://www.facebook.com/wix", name: "Facebook" },
      { element: homePage.twitterButton, url: 'http://www.twitter.com/wix', name: "Twitter" },
      { element: homePage.pinterestButton, url: 'http://pinterest.com/wixcom/', name: "Pinterest" },
      { element: homePage.wixButton, url: 'http://wix.com/?utm_campaign=vir_created_with', name: "Wix" },
    ];

    buttons_footer.forEach((button) => {
        it(`Test: ${button.name} button visibility and functionality`, () => {
          button.element()
            .should("be.visible")
            .invoke('attr', 'href')
            .should('equal', button.url)
        })
      
      
    });

    it(`Test: MailButton button visibility and functionality`, () => {
      homePage.mailToButton()
        .should("be.visible")
        .should('have.attr', 'href')
        .should('contain', 'info@mysite.com');
    })
  
  // it("Home Button Test", () => {
  //   homePage.clickOnHomeButton();
  //   cy.url().should("eq", "https://ancabota09.wixsite.com/intern");
  // })

  // it("Explore Button Test", () => {
  //   homePage.clickOnExploreButton();
  //   cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/explore');
  // });

  // it("Contact Button Test", () => {
  //   homePage.clickOnContactButton();
  //   cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/contact');
  // });

  // it("Rooms Button Test", () => {
  //   homePage.clickOnRoomsButton();
  //   cy.url().should("eq", "https://ancabota09.wixsite.com/intern/rooms");
  // })

  // it("BookNow Button Test", () => {
  //   homePage.clickOnBookNowButton();
  //   cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/booknow');
  // });

  // it("Home&Away Button Test", () => {
  //   homePage.clickOnHomeAndAwayButton();
  //   cy.url().should("eq", "https://ancabota09.wixsite.com/intern/");
  // })


    it('verifyMinimumBoundary', () => {
      homePage.searchWidgetIsDisplayed();
      homePage.tryToDecrementAdults(1);
      
      cy.get('.adults-counter').invoke('text').then((counterValue) => {
        homePage.decrementAdultsButtonDisabled();
        expect(parseInt(counterValue)).to.equal(1);
        cy.log('The decrement button is disabled at counter value 1');
      });
    });
  
  //   it('verifyMaximumBoundary', () => {
  //     homePage.searchWidgetIsDisplayed();
  //     homePage.tryToIncrementAdults(6);
      
  //     cy.get('.adults-counter').invoke('text').then((counterValue) => {
  //       homePage.incrementAdultsButtonDisabled();
  //       expect(parseInt(counterValue)).to.equal(6);
  //       cy.log('The increment button is disabled at counter value 6');
  //     });
  //   });
  
  //   it('verifySearchWithCheckOutOneDayAfterCheckIn', () => {
  //     const today =  dayjs().format('YYYY-MM-DD');
  //     const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
  
  //     homePage.setCheckInDate(today);
  //     homePage.setCheckOutDate(tomorrow, 0, true);
  //   });
  // })
  
//     it('verifySearchWith2Adults', () => {
//       const today = Cypress.moment().format('YYYY-MM-DD');
//       const threeDaysAfter = Cypress.moment().add(3, 'days').format('YYYY-MM-DD');
  
//       verifySearchWithData(today, threeDaysAfter, 2, 0);
//     });
  
//     function verifySearchWithData(checkIn, checkOut, adultsNb, kidsNb) {
//       homePage.searchWidgetIsDisplayed();
//       homePage.setCheckInDate(checkIn);
//       homePage.setCheckOutDate(checkOut, 0, true);
//       homePage.tryToIncrementAdults(adultsNb);
//       homePage.tryToIncrementKids(kidsNb);
  
//       cy.get('.check-in-value').should('have.value', checkIn);
//       cy.get('.check-out-value').should('have.value', checkOut);
  
//       cy.url().should('include', '/rooms-page-url');
//       cy.get('.room-list').should('be.visible');
//     }
//   });
  

// })




  })