import { homePage } from "../../ui-manager/georgiana/pages/pages";
import {selectDateInIframe,formatDateForSearch} from "../../ui-manager/georgiana/helpers/functions"



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

    it.only('verify Search With CheckOut One Day After CheckIn', () =>{ 
      const todayDate = new Date(); 
      const tomorrowDate = new Date(todayDate); 
      tomorrowDate.setDate(todayDate.getDate() + 1); 

      homePage.setDataInCalendar(todayDate,tomorrowDate)
    });
  
  
    it('verify Search With 2 Adults', () => {
    })


it.only('Adults Button increment', () => {
    homePage.tryToIncrement(6);
    homePage.adultValue()
    .invoke('text')
    .then((finalValue) => {
      expect(finalValue).to.equal("6"); 
      homePage.adultsButtonIncrement()
            .should('be.visible').should('have.attr', 'disabled', 'disabled');

        });
      });
  
  it.only('Adults Button decrement', () => {
    homePage.tryToDecrement(1);
    homePage.adultValue()
    .invoke('text')
    .then((finalValue) => {
      expect(finalValue).to.equal("1"); 
      homePage.adultsButtonDecrement()
            .should('be.visible').should('have.attr', 'disabled', 'disabled');

        });
});


it('Kids Button increment and decrement', () => {

});

it('Search with adults and kids:', () => {

});
});
 

