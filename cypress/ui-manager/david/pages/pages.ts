export const elements_homePage = {
    roomsButton: () => cy.get("#i6kl732v2label"),
    exploreButton: () => cy.get("#i6kl732v1label"),
    homeButton: () => cy.get("#i6kl732v0label"),
    contactButton: () => cy.get("#i6kl732v3label"),
    bookNowButton: () => cy.get(".wixui-button__label"),
    facebookButton: () => cy.get("#i0odz-i6rlbitx > a"),
    twitterButton: () => cy.get("#i220sc-i6rlbitx > a"),
    pinterestButton: () => cy.get("#i3175p-i6rlbitx > a"),
    wixButton: () => cy.contains('a', 'Wix.com'),
    mailToButton: () => cy.get('#i71ww6nk > p:nth-child(1) > a'),
    searchButton: () => cy.get("button.s-button"),
    checkInButton: () => cy.get("#check-in"),
    checkInLabel: () => cy.get("#check-in-value"),
    adultsButtonIncr: () => cy.get("#adults > .up"),
    adultsButtonDecr: () => cy.get("#adults > .down"),
    childrenButtonIncr: () => cy.get("#children > .up"),
    childrenButtonDecr: () => cy.get("#children > .down"),
    adultsLabel: () => cy.get("#adults .value"),
    childrenLabel: () => cy.get("#children .value"),
    nextMonthButton: () => cy.get("button.navigate-right"),
    searchFrame: () => cy.get("#i6kppi75 > iframe"),
    checkInFrame: () => cy.get(".U73P_q"),
    checkOutFrame: () => cy.get(".U73P_q"),
    homeAndAwayButton: () => cy.get("#i6ksxrtk > h1 > a"),
    iframeSelector: 'iframe.nKphmK[title="Wix Hotels"]'
  };

  export const elements_contactPage = {
    contactParagraph: () => cy.get('#i6ly3ckc_0'),
    mapFrame: () => cy.get('iframe[title="Google Maps"]'),
    fullscreenButton: () => cy.get('iframe[title="Google Maps"]').its('0.contentDocument').find('#map_canvas > div > div.gm-style > div:nth-child(8) > button'),
  
    nameField: () => cy.get("#input_comp-jxbsa1e9"),
    emailField: () => cy.get("#input_comp-jxbsa1em"),
    phoneField: () => cy.get("#input_comp-jxbsa1ev"),
    commentField: () => cy.get("#textarea_comp-jxbsa1f7"),
    submitField: () => cy.get("#comp-jxbsa1fi > button"),

    submitFeedback: () => cy.get('#comp-jxbsa1dm > [data-testid="inline-content"] > [data-testid="mesh-container-content"] > [data-testid="richTextElement"] > .font_8 > .color_15')
  }

  
 export const methods_homePage = {
    clickHomeAndAwayButton: () => {
      elements_homePage.homeAndAwayButton().click();
    },
    clickHomeButton: () => {
      elements_homePage.homeButton().click();
    },
    clickExploreButton: () => {
      elements_homePage.exploreButton().click();
    },
    clickRoomsButton: () => {
      elements_homePage.roomsButton().click();
    },
    clickContactButton: () => {
      elements_homePage.contactButton().click();
    },
    clickBookNowButton: () => {
      elements_homePage.bookNowButton().click();
    },
    clickFacebookButton: () => {
      elements_homePage.facebookButton().click();
    },
    clickTwitterButton: () => {
      elements_homePage.twitterButton().click();
    },
    clickPinterestButton: () => {
      elements_homePage.pinterestButton().click();
    },
    clickWixButton: () => {
      elements_homePage.wixButton().click();
    },
    clickCheckInButton: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('#check-in').click();
      });
    },
    clickSearchButton: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('button.s-button').click();
      });
      cy.wait(3000);
    },
    clickAdultsButtonIncr: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('#adults > .up').click();
      });
    },
    clickAdultsButtonDecr: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('#adults > .down').click();
      });
    },
    clickChildrenButtonIncr: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('#children > .up').click();
      });
    },
    clickChildrenButtonDecr: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('#children > .down').click();
      });
    },
    pageUrl: () => {
      return cy.url();
    },
    isDisplayedHomeAndAwayButton: () => {
      return elements_homePage.homeAndAwayButton().should('be.visible');
    },
    isDisplayedHomeButton: () => {
      return elements_homePage.homeButton().should('be.visible');
    },
    isDisplayedExploreButton: () => {
      return elements_homePage.exploreButton().should('be.visible');
    },
    isDisplayedRoomsButton: () => {
      return elements_homePage.roomsButton().should('be.visible');
    },
    isDisplayedContactButton: () => {
      return elements_homePage.contactButton().should('be.visible');
    },
    isDisplayedBookNowButton: () => {
      return elements_homePage.bookNowButton().should('be.visible');
    },
    isDisplayedFacebookButton: () => {
      return elements_homePage.facebookButton().should('be.visible');
    },
    isDisplayedTwitterButton: () => {
      return elements_homePage.twitterButton().should('be.visible');
    },
    isDisplayedPinterestButton: () => {
      return elements_homePage.pinterestButton().should('be.visible');
    },
    isDisplayedWixButton: () => {
      return elements_homePage.wixButton().should('be.visible');
    },
    isDisplayedMailToButton: () => {
      return elements_homePage.mailToButton().should('be.visible');
    },
    isDisplayedSearchButton: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('button.s-button').should('be.visible');
      });
    },
    isDisplayedAdultsButtonIncr: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('#adults > .up').should('be.visible');
      });
    },
    isDisplayedAdultsButtonDecr: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('#adults > .down').should('be.visible');
      });
    },
    isDisplayedChildrenButtonIncr: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('#children > .up').should('be.visible');
      });
    },
    isDisplayedChildrenButtonDecr: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('#children > .down').should('be.visible');
      });
    },
    isAdultsDecreaseButtonDisabled: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('#adults > .down').should('have.attr', 'disabled');
      });
    },
    isChildrenDecreaseButtonDisabled: () => {
      elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).find('#children > .down').should('have.attr', 'disabled');
      });
    },
    isCheckInPastDateDisabled: (date) => {
      elements_homePage.checkInFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        const dateLabel = date.format('D, dddd MMMM YYYY');
        cy.wrap($body).find(`button[aria-label='${dateLabel}']`).should('have.attr', 'disabled');
      });
    },
    getColorExploreButton: () => {
      return elements_homePage.exploreButton().invoke('css', 'color');
    },
    getColorRoomsButton: () => {
      return elements_homePage.roomsButton().invoke('css', 'color');
    },
    getColorContactButton: () => {
      return elements_homePage.contactButton().invoke('css', 'color');
    },
    getColorBookNowButton: () => {
      return elements_homePage.bookNowButton().invoke('css', 'color');
    },
    getColorHomeButton: () => {
      return elements_homePage.homeButton().invoke('css', 'color');
    },
    hoverExploreButton: () => {
      elements_homePage.exploreButton().trigger('mouseover');
    },
    hoverRoomsButton: () => {
      elements_homePage.roomsButton().trigger('mouseover');
    },
    hoverContactButton: () => {
      elements_homePage.contactButton().trigger('mouseover');
    },
    hoverBookNowButton: () => {
      elements_homePage.bookNowButton().trigger('mouseover');
    },
    hoverHomeButton: () => {
      elements_homePage.homeButton().trigger('mouseover');
    },
    navigateToNewWindow: (url: string) => {
      cy.window().then((win) => {
          const originalWindow = win;
          cy.get('body').then(() => {
              const newWindow = win.open(url, '_blank');
              cy.wrap(newWindow).its('location.href').should('eq', url);
          });
      });
    },
    getAttributeMailToButton: (attribute) => {
      return elements_homePage.mailToButton().invoke('attr', attribute);
    },
    getTextCheckInLabel: () => {
      return elements_homePage.searchFrame().then($iframe => {
        const $body = $iframe.contents().find('body');
        return cy.wrap($body).find('#check-in-value').invoke('text');
      });
    },
    getTextAdultsLabel: () => {
        return elements_homePage.searchFrame().then($iframe => {
          const $body = $iframe.contents().find('body');
          return cy.wrap($body).find('#adults .value').invoke('text');
        });
      },
      getTextChildrenLabel: () => {
        return elements_homePage.searchFrame().then($iframe => {
          const $body = $iframe.contents().find('body');
          return cy.wrap($body).find('#children .value').invoke('text');
        });
      },
      selectCheckInDay: (date) => {
        elements_homePage.checkInFrame().then($iframe => {
          const $body = $iframe.contents().find('body');
          const dateLabel = date.format('D, dddd MMMM YYYY');
          cy.wrap($body).find(`button[aria-label='${dateLabel}']`).click();
        });
      },
      selectCheckOutDay: (date) => {
        return elements_homePage.checkOutFrame().then($iframe => {
          const $body = $iframe.contents().find('body');
          let nextDate = date.add(1, 'days');
          let daysDifference = 0;
      
          const findAvailableCheckOutDayButton = () => {
            const nextDateLabel = nextDate.format('D, dddd MMMM YYYY');
            return cy.wrap($body).find(`button[aria-label='${nextDateLabel}']:not([disabled])`).then($button => {
              if ($button.length) {
                cy.wrap($button).click();
                return daysDifference;
              } else {
                nextDate = nextDate.add(1, 'days');
                daysDifference++;
                return findAvailableCheckOutDayButton();
              }
            });
          };
      
          return findAvailableCheckOutDayButton();
        });
      }, 

    };
    