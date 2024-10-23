import { elements_homePage, methods_homePage } from '../../ui-manager/david/pages/pages';
import { selectDateInIframe } from '../../ui-manager/david/helpers/functions';
import { isDisabledDate } from '../../ui-manager/david/helpers/functions';

describe('HomePageTest', () => {
  const dayjs = require('dayjs');

  beforeEach(() => {
    cy.visit('https://ancabota09.wixsite.com/intern');
  });

  it('ExploreButtonTest', () => {
    elements_homePage.exploreButton().should('be.visible');

    elements_homePage.exploreButton().click();

    cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/explore');
  });

  it ('RoomsButtonTest', () => {
    elements_homePage.roomsButton().should('be.visible');

    elements_homePage.roomsButton().click();

    cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/rooms');
  });

  it('ContactButtonTest', () => {
    elements_homePage.contactButton().should('be.visible');

    elements_homePage.contactButton().click();

    cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/contact');
  });

  it('BookNowButtonTest', () => {
    const bookNowPageUrl = 'https://ancabota09.wixsite.com/intern/bookNow';

    elements_homePage.bookNowButton().should('be.visible');

    elements_homePage.bookNowButton().click();

    cy.url().should('eq', bookNowPageUrl);
  });

  it('HomeButtonTest', () => {
    elements_homePage.homeButton().should('be.visible');

    elements_homePage.homeButton().click();

    cy.url().should('eq', 'https://ancabota09.wixsite.com/intern');
  });

  it('HomeAndAwayButtonTest', () => {
    elements_homePage.homeAndAwayButton().should('be.visible');

    elements_homePage.homeAndAwayButton().click();

    cy.url().should('eq', 'https://ancabota09.wixsite.com/intern');
  });
  it("Facebook Button Test", () => {
    elements_homePage.facebookButton()
      .should("be.visible")
      .invoke('attr', 'href')
      .should('equal', 'http://www.facebook.com/wix')
  })

  it('TwitterButtonTest', () => { 
      const twitterPageUrl = "http://www.x.com/wix";
      elements_homePage.twitterButton()
        .should("be.visible")
        .invoke('attr', 'href')
        .should('equal', 'http://www.x.com/wix')
  });

  it('PinterestButtonTest', () => {
    elements_homePage.pinterestButton()
    .should("be.visible")
    .invoke('attr', 'href')
    .should('equal', 'http://pinterest.com/wixcom/')
  });

  it('WixButtonTest', () => {
    elements_homePage.wixButton()
    .should("be.visible")
    .invoke('attr', 'href')
    .should('equal', 'http://wix.com/?utm_campaign=vir_created_with')
  });

  it('MailToButtonTest', () => {
    elements_homePage.mailToButton().should('be.visible');

      const linkStartText = "mailto:";
      const linkAddress = "info@mysite.com";
      elements_homePage.mailToButton().invoke('attr', 'href').should('startWith', linkStartText);
      elements_homePage.mailToButton().invoke('attr', 'href').should('include', linkAddress);
  });


  const formatDateForSearch = (date: Date): string => {
    const day = date.getDate();
    const year = date.getFullYear();
 
    const monthMap = {
        0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun',
        6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'
    };
 
    const month = monthMap[date.getMonth()];
 
    return `${day} ${month} ${year}`;
  };

  it ('TodayCheckInDateTest', () => {
    const checkInDay = dayjs().add(0, 'days');

    cy.get('iframe.nKphmK[title="Wix Hotels"]').its('0.contentDocument').find('#search-widget #check-in').should('exist').click();

    selectDateInIframe(checkInDay);

    const formattedCheckinDate = formatDateForSearch(checkInDay);
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
    .its('0.contentDocument')
    .find('#search-widget #check-in-value')
    .should('have.text', formattedCheckinDate);
    });
  
  it('Check-In and Check-Out for 3 days', () => {
    const todayDate = new Date(); 
    const checkoutDate = new Date(todayDate); 
    checkoutDate.setDate(todayDate.getDate() + 3); 
    
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#search-widget #check-in')
      .should('exist')
      .click();
    
    selectDateInIframe(todayDate);
    
    const formattedCheckinDate = formatDateForSearch(todayDate);
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#search-widget #check-in-value') 
      .should('have.text', formattedCheckinDate);
    
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#search-widget #check-out') 
      .should('exist')
      .click();
    
    selectDateInIframe(checkoutDate);
    
    const formattedCheckoutDate = formatDateForSearch(checkoutDate);
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#search-widget #check-out-value') 
      .should('have.text', formattedCheckoutDate);
       
  });
    

  
  it('Future Date Selection Check-In Calendar', () => {
    cy.wait(3000);
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 5);

    cy.get('iframe.nKphmK[title="Wix Hotels"]').its('0.contentDocument').find('#search-widget #check-in').should('exist').click();
    selectDateInIframe(futureDate);
   
    const formattedDate = formatDateForSearch(futureDate);

    cy.get('iframe.nKphmK[title="Wix Hotels"]').its('0.contentDocument').find('#search-widget #check-in-value')
        .should('have.text', (formattedDate));
  });

  it('Past Date Selection Check-In Calendar', () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 2);

    cy.get(elements_homePage.iframeSelector).its('0.contentDocument').find('#search-widget #check-in').should('exist').click();
    isDisabledDate(pastDate)
  });

  it('Adults Increase Button', () => {
    cy.wait(3000)

    cy.get(elements_homePage.iframeSelector)
        .its('0.contentDocument')
        .find('#adults > .up').click({ force: true,  multiple: true }); 


    cy.get(elements_homePage.iframeSelector)
        .its('0.contentDocument')
        .find('#adults span.value.ng-binding')
        .should('have.text', '2');
  });


  it('Adults Button increment and decrement', () => {
    const clicks= 5;
    for(let i=0;i<clicks;i++){
      cy.get('iframe.nKphmK[title="Wix Hotels"]')
       .its('0.contentDocument')
       .find('#adults .up')
       .should('be.visible')
       .click()
    }
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
     .its('0.contentDocument')
     .find('#adults .value')
     .invoke('text')
     .then((finalValue) => {
      const finalAdults = parseInt(finalValue, 10); 
      expect(finalAdults).to.equal(clicks);
    });
  
    for (let i = 0; i < clicks; i++) {
      cy.get('iframe.nKphmK[title="Wix Hotels"]')
        .its('0.contentDocument')
        .find('#adults .down')
        .should('be.visible')
        .click();
    }
  
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#adults .value')
      .invoke('text')
      .then((decrementedValue) => {
        const finalAdultsAfterDecrement = parseInt(decrementedValue, 10);
        expect(finalAdultsAfterDecrement).to.equal(1); 
      });
  });
  
  it('Kids Button increment and decrement', () => {
    const clicks=5;
    for(let i=0;i<clicks;i++){
      cy.get('iframe.nKphmK[title="Wix Hotels"]')
       .its('0.contentDocument')
       .find('#children > a.up')
       .should('be.visible')
       .click()
    }
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
     .its('0.contentDocument')
     .find('#children')
     .invoke('text')
     .then((finalValue) => {
      const finalKids = parseInt(finalValue, 10); 
      expect(finalKids).to.equal(clicks - 1);
    });
  
    for (let i = 0; i < clicks; i++) {
      cy.get('iframe.nKphmK[title="Wix Hotels"]')
        .its('0.contentDocument')
        .find('#children > a.down') 
        .should('be.visible')
        .click();
    }
  
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#children')
      .invoke('text')
      .then((decrementedValue) => {
        const finalKidsAfterDecrement = parseInt(decrementedValue, 10);
        expect(finalKidsAfterDecrement).to.equal(0); 
      });
  });
  
  it ('Adults decrease button no lower than one', () => {
    
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#adults .down')
      .should('be.visible')

    elements_homePage.searchFrame().then($iframe => {
    const $body = $iframe.contents().find('body');
    cy.wrap($body).find('#adults .value').should('have.text', '1');
    });

    elements_homePage.searchFrame().then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('#adults > .down').should('have.attr', 'disabled');
    });
  });

  it('Kids decrease number no lower than zero', () => {
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
        .its('0.contentDocument')
        .find('#children > a.down') 
        .should('be.visible')

     elements_homePage.searchFrame().then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('#children .value').should('have.text', '0');
    });

    elements_homePage.searchFrame().then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body).find('#children > a.down').should('have.attr', 'disabled');
    });
  });

  it('should correctly handle the search widget functionality', () => {
    const todayDate = new Date();
    const checkoutDate = new Date(todayDate);
    checkoutDate.setDate(todayDate.getDate() + 3);

    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#search-widget #check-in')
      .should('exist')
      .click();
    
    selectDateInIframe(todayDate);

    const formattedCheckinDate = formatDateForSearch(todayDate);
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#search-widget #check-in-value')
      .should('have.text', formattedCheckinDate);

    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#search-widget #check-out')
      .should('exist')
      .click();
    
    selectDateInIframe(checkoutDate);

    const formattedCheckoutDate = formatDateForSearch(checkoutDate);
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#search-widget #check-out-value')
      .should('have.text', formattedCheckoutDate);

    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#adults > .up').click();
    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('#children > .up').click();

    cy.get('iframe.nKphmK[title="Wix Hotels"]')
      .its('0.contentDocument')
      .find('button.s-button')
      .should('be.visible')
      .click();

    cy.url().should('include', '/rooms');
  });


});
