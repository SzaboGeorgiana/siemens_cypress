import { formatDateForSearch, selectDateInIframe, selectDateInIframe_rooms } from "../helpers/functions";

export const explorePage = {
  exploreParagraph: () => cy.get('#i6kvh3dl'),
  chinatownParagraph: () => cy.get('#i6kv3ge8 > p.wixui-rich-text__text.font_8'),
  haightandashburyParagraph: () => cy.get('#i6kvbhmb > p.wixui-rich-text__text.font_8'),
  goldengateParagraph: () => cy.get('#i6kvbkw0 > p.wixui-rich-text__text.font_8'),
  chinatownImage: () => cy.get('#img_i6kv4ak9 img'),
  haightAshburyImage: () => cy.get('#img_i6kvbhmc img'),
  goldenGateImage: () => cy.get('#img_i6kvbkw0_0 img')
};

export const contactPage = {
  nameField: () => cy.get("#input_comp-jxbsa1e9"),
  emailField: () => cy.get("#input_comp-jxbsa1em"),
  phoneField: () => cy.get("#input_comp-jxbsa1ev"),
  commentField: () => cy.get("#textarea_comp-jxbsa1f7"),
  submitField: () => cy.get("#comp-jxbsa1fi > button"),
  confirmationMessage:()=> cy.get("#comp-jxbsa1fv > p > span"),
  paragraphElement:()=>cy.get("#i6ly3ckc_0")
}

export const chatBox = {
  iframeSelector: () =>  cy.get('#comp-jr4sqg2g > .nKphmK'),
  iframeDoc: ()=> chatBox.iframeSelector().its('0.contentDocument'),

  chatButton: () => chatBox.iframeDoc().find('#minimized-chat'),
  chatTextArea: () => chatBox.iframeDoc().find('textarea[aria-label="Type your message. Hit enter to submit."]'),
  sendButton: () => chatBox.iframeDoc().find('button[data-hook="send-button"]'),
  chatMessages: () => chatBox.iframeDoc().find('div[data-hook="chat-message"]'),
  chatForm: () => chatBox.iframeDoc().find('form.zd18O'),
  nameField: () => chatBox.iframeDoc().find('input#name'),
  emailField: () => chatBox.iframeDoc().find('input#email'),
  messageField: () =>chatBox.iframeDoc().find('textarea#message'),
  chatEmailError: () => chatBox.iframeDoc().find('#email-error'),
  chatNameError: () => chatBox.iframeDoc().find('#name-error'),
  submitField: () => chatBox.iframeDoc().find('button[data-hook="lcf-submit"]'),
  formFeedback: () =>  chatBox.iframeDoc().find('div[data-hook="lcf-thank-you"]')
}


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
    
    iframeSelector:()=>cy.get('iframe.nKphmK[title="Wix Hotels"]'),
    iframeDoc: ()=> homePage.iframeSelector().its('0.contentDocument'),

    checkInButton:()=>homePage.iframeDoc().find('#search-widget #check-in'),
    checkInValue:()=>homePage.iframeDoc().find('#search-widget #check-in-value'),
    checkOutButton:()=>homePage.iframeDoc().find('#search-widget #check-out'),
    checkOutValue:()=>homePage.iframeDoc().find('#search-widget #check-out-value'),
    adultsButtonIncrement:()=>homePage.iframeDoc().find('#adults .up'),
    adultsButtonDecrement:()=>homePage.iframeDoc().find('#adults .down'),
    adultValue: () => homePage.iframeDoc().find('#adults .value'),
    childrensButtonIncrement:()=>homePage.iframeDoc().find('#children .up'),
    childrenButtonDecrement:()=>homePage.iframeDoc().find('#children .down'),
    childrenValue: () => homePage.iframeDoc().find('#children .value'),
    searchButton:()=> homePage.iframeDoc().find('#search-widget > form > ul > li.search > button'),

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

    getButtonColor: (buttonElement) => {
      return buttonElement.invoke('css', 'color');  // Returns the color property
    },

    setDataInCalendar:(checkInDate, checkOutDate) =>{
      homePage.checkInButton()
        .should('exist')
        .click();

      selectDateInIframe(checkInDate);
  
      const formattedCheckinDate = formatDateForSearch(checkInDate);
      homePage.checkInValue()
        .should('have.text', formattedCheckinDate);
  
      homePage.checkOutButton()
        .should('exist')
        .click();
  
      selectDateInIframe(checkOutDate);
  
      const formattedCheckoutDate = formatDateForSearch(checkOutDate);
      homePage.checkOutValue()
        .should('have.text', formattedCheckoutDate);
    },


    tryToIncrement: (clicks) => {
        homePage.adultValue().invoke('text').then((currentValue) => {
          let currentVal = parseInt(currentValue); // Convertește valoarea la număr      
          const clickUntilMatch = () => {
            if (currentVal !== clicks) {
              homePage.adultsButtonIncrement()
                .should('be.visible')
                .click()
                .then(() => {
                  homePage.adultValue().invoke('text').then((newVal) => {
                    currentVal = parseInt(newVal); // Actualizăm valoarea curentă
                    clickUntilMatch();
                  });
                });
            }
          };
          clickUntilMatch();
        });
    },
      

    tryToDecrement:(clicks) => {
        homePage.adultValue().invoke('text').then((currentValue) => {
          let currentVal = parseInt(currentValue); // Convertește valoarea la număr
          const clickUntilMatch = () => {
            if (currentVal !== clicks) {
              homePage.adultsButtonDecrement()
                .should('be.visible')
                .click()
                .then(() => {
                  homePage.adultValue().invoke('text').then((newVal) => {
                    currentVal = parseInt(newVal); // Actualizăm valoarea curentă
                    clickUntilMatch();
                  });
                });
            }
          };
          clickUntilMatch();
        });
    },

    tryToIncrementKids:(clicks) => {
        homePage.childrenValue().invoke('text').then((currentValue) => {
          let currentVal = parseInt(currentValue); // Convertește valoarea la număr
          const clickUntilMatch = () => {
            if (currentVal !== clicks) {
              homePage.childrensButtonIncrement()
                .should('be.visible')
                .click()
                .then(() => {
                  homePage.childrenValue().invoke('text').then((newVal) => {
                    currentVal = parseInt(newVal); // Actualizăm valoarea curentă
                    clickUntilMatch();
                  });
                });
            }
          };
          clickUntilMatch();
        });
    },


};


export const roomsPage = {
  iframeSelector:()=> cy.get('#i6klgqap_0 > .nKphmK'),
  iframeDoc:()=> roomsPage.iframeSelector().its('0.contentDocument'),

  checkInButton:()=> roomsPage.iframeDoc().find('#check-in'),
  checkInValue:()=>roomsPage.iframeDoc().find('#check_in-value'),
  checkOutButton:()=>roomsPage.iframeDoc().find('#check-out'),
  checkOutValue:()=>roomsPage.iframeDoc().find('#check_out-value'),
  adultsButtonIncrement:()=>roomsPage.iframeDoc().find('#adults .up'),
  adultsButtonDecrement:()=>roomsPage.iframeDoc().find('#adults .down'),
  adultValue: () => roomsPage.iframeDoc().find('#adults .value'),
  childrensButtonIncrement:()=>roomsPage.iframeDoc().find('#children .up'),
  childrenButtonDecrement:()=>roomsPage.iframeDoc().find('#children .down'),
  childrenValue: () => roomsPage.iframeDoc().find('#children .value'),
  searchButton: () => roomsPage.iframeDoc().find('form > ul > li.search-btn > button.search.s-button'),
  resultBar:  ()=> roomsPage.iframeDoc().find('h2.s-title.resultbar'),
  
  roomsList:()=> roomsPage.iframeDoc().find('#content > div > div.content-body > div > ul > li'),

    setDataInCalendar:(checkInDate, checkOutDate) =>{
    roomsPage.checkInButton()
      .should('exist')
      .click();

    selectDateInIframe_rooms(checkInDate,true);

    const formattedCheckinDate = formatDateForSearch(checkInDate);
    roomsPage.checkInValue()
      .should('have.text', formattedCheckinDate);

    selectDateInIframe_rooms(checkOutDate,false);

    const formattedCheckoutDate = formatDateForSearch(checkOutDate);
    roomsPage.checkOutValue()
      .should('have.text', formattedCheckoutDate);
    },


    tryToIncrement: (clicks) => {
      roomsPage.adultValue().invoke('text').then((currentValue) => {
        let currentVal = parseInt(currentValue); // Convertește valoarea la număr      
        const clickUntilMatch = () => {
          if (currentVal !== clicks) {
            roomsPage.adultsButtonIncrement()
              .should('be.visible').should('not.have.attr', 'disabled', 'disabled')
              .click()
              .then(() => {
                roomsPage.adultValue().invoke('text').then((newVal) => {
                  currentVal = parseInt(newVal); // Actualizăm valoarea curentă
                  clickUntilMatch();
                });
              });
          }
        };
        clickUntilMatch();
      });
    },
    

    tryToDecrement:(clicks) => {
      roomsPage.adultValue().invoke('text').then((currentValue) => {
        let currentVal = parseInt(currentValue); // Convertește valoarea la număr
        const clickUntilMatch = () => {
          if (currentVal !== clicks) {
            roomsPage.adultsButtonDecrement()
              .should('be.visible')
              .click()
              .then(() => {
                roomsPage.adultValue().invoke('text').then((newVal) => {
                  currentVal = parseInt(newVal); // Actualizăm valoarea curentă
                  clickUntilMatch();
                });
              });
          }
        };
        clickUntilMatch();
      });
    },


    tryToIncrementKids:(clicks) => {
      roomsPage.childrenValue().invoke('text').then((currentValue) => {
        let currentVal = parseInt(currentValue); // Convertește valoarea la număr
        const clickUntilMatch = () => {
          if (currentVal !== clicks) {
            roomsPage.childrensButtonIncrement()
              .should('be.visible').should('not.have.attr', 'disabled', 'disabled')
              .click()
              .then(() => {
                roomsPage.childrenValue().invoke('text').then((newVal) => {
                  currentVal = parseInt(newVal); // Actualizăm valoarea curentă
                  clickUntilMatch();
                });
              });
          }
        };
        clickUntilMatch();
      });
    },


};

    
  