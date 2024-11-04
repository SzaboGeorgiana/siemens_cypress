import { homepage } from "../../ui-manager/roxana/pages/pages"
import {selectDateInIframe, formatDateForSearch, isDisabledDate} from "../../ui-manager/roxana/helpers/functions"


describe('Home Page Test', () => {
    beforeEach(() => {
      cy.visit("/");
    });
  
    it('Explore Button Test', () => {
      homepage.exploreButton().should('be.visible');
      homepage.clickExploreButton();
      cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/explore');
    });

    it('Rooms Button Test', () => {
        homepage.roomsButton().should('be.visible');
        homepage.clickRoomsButton();
        cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/rooms');
      });

    it('Contact Button Test', () => {
        homepage.contactButton().should('be.visible');
        homepage.clickContactButton();
        cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/contact');
    });

    it('Book Now Button Test', () => {
        homepage.bookNowButton().should('be.visible');
        homepage.clickBookNowButton();
        cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/booknow');
    });

    it('Home Button Test', () => {
        homepage.homeButton().should('be.visible');
        homepage.clickHomeButton();
        cy.url().should('eq', 'https://ancabota09.wixsite.com/intern');
    });

    it('Home and Away Button Test', () => {
        homepage.homeAndAwayButton().should('be.visible');
        homepage.clickHomeAndAwayButton();
        cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/');
    });

    it('Facebook Button Test', () => {
        homepage.facebookButton().should("be.visible")
        .invoke('attr', 'href')
        .should('equal', "http://www.facebook.com/wix")
    });

    it('Twitter Button Test', () => {
        homepage.twitterButton().should("be.visible")
        .invoke('attr', 'href')
        .should('equal', "http://www.twitter.com/wix")
    });

    it('Pinterest Button Test', () => {
        homepage.pinterestButton().should("be.visible")
        .invoke('attr', 'href')
        .should('equal', "http://pinterest.com/wixcom/")
    });

    it('Wix Button Test', () => {
        homepage.wixButton().should("be.visible")
        .invoke('attr', 'href')
        .should('equal', "http://wix.com/?utm_campaign=vir_created_with")
    });

    it(`Test: MailButton button visibility and functionality`, () => {
        homepage.mailToButton()
          .should("be.visible")
          .should('have.attr', 'href')
          .should('contain', 'info@mysite.com');
    })

    it(`Test: Future Date Selection - Check-In Calendar`, () => {
        cy.wait(3000)

        const checkInDay = new Date();
        checkInDay.setDate(checkInDay.getDate() + 2);

        homepage.clickCheckInButton();
        selectDateInIframe(checkInDay);

        const expectedDateText = formatDateForSearch(checkInDay);
        homepage.getTextCheckInLabel().should('equal', expectedDateText);
    })

    it(`Test: Today Date Selection - Check-In Calendar`, () => {
        cy.wait(3000)

        const checkInDay = new Date();

        homepage.clickCheckInButton();
        selectDateInIframe(checkInDay);

        const expectedDateText = formatDateForSearch(checkInDay);
        homepage.getTextCheckInLabel().should('equal', expectedDateText);
    })

    it(`Test: Past Date Selection - Check-In Calendar`, () => {
        cy.wait(3000)

        const checkInDay = new Date();
        checkInDay.setDate(checkInDay.getDate() - 2);

        homepage.clickCheckInButton();
        isDisabledDate(checkInDay);
    })

    it('Adults Increase Button', () => {
        cy.wait(5000)

        homepage.clickIncreaseAdultsButton();

        cy.get('iframe.nKphmK[title="Wix Hotels"]')
            .its('0.contentDocument')
            .find('#adults .value')
            .should('have.text', '2');   
    });

    it('Adults Decrease Button', () => {
        cy.wait(5000)

        homepage.clickIncreaseAdultsButton();
        homepage.clickIncreaseAdultsButton();
        homepage.clickDecreaseAdultsButton();
    
        cy.get('iframe.nKphmK[title="Wix Hotels"]')
            .its('0.contentDocument')
            .find('#adults .value')
            .should('have.text', '2');    
    });

    it('Children Increase Button', () => {
        cy.wait(5000)

        homepage.clickIncreaseChildrenButton();

        cy.get('iframe.nKphmK[title="Wix Hotels"]')
            .its('0.contentDocument')
            .find('#children .value')
            .should('have.text', '1');   
    });

    it('Children Decrease Button', () => {
        cy.wait(5000)

        homepage.clickIncreaseChildrenButton();
        homepage.clickIncreaseChildrenButton();
        homepage.clickDecreaseChildrenButton();
    
        cy.get('iframe.nKphmK[title="Wix Hotels"]')
            .its('0.contentDocument')
            .find('#children .value')
            .should('have.text', '1');    
    });
   
    it.only('Search Widget Test', () => {
        cy.wait(3000)
        const checkInDay = new Date();
        const checkOutDay = new Date();
        checkOutDay.setDate(checkInDay.getDate() + 3)

        homepage.clickCheckInButton();
        selectDateInIframe(checkInDay);

        cy.wait(3000)
        selectDateInIframe(checkOutDay);

        homepage.clickIncreaseAdultsButton();
        homepage.clickIncreaseChildrenButton();
        homepage.clickSearchButton();

        cy.url().should('include', '/rooms');

    })





  });


