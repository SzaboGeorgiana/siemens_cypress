import { formatDateForSearch, selectDateInIframe } from "../helpers/functions";

export const explorePage = {
  // explorehoteltitle: () => cy.get('#i6ksjvsy'),
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
    
    iframeSelector:()=>cy.get('.nKphmK'),
    checkInButton:()=>cy.get('iframe.nKphmK[title="Wix Hotels"]')
    .its('0.contentDocument')
    .find('#search-widget #check-in'),
    checkInValue:()=>cy.get('iframe.nKphmK[title="Wix Hotels"]')
    .its('0.contentDocument')
    .find('#search-widget #check-in-value'),
    checkOutButton:()=>cy.get('iframe.nKphmK[title="Wix Hotels"]')
    .its('0.contentDocument')
    .find('#search-widget #check-out'),
    checkOutValue:()=>cy.get('iframe.nKphmK[title="Wix Hotels"]')
    .its('0.contentDocument')
    .find('#search-widget #check-out-value'),
    adultsButtonIncrement:()=>cy.get('iframe.nKphmK[title="Wix Hotels"]')
    .its('0.contentDocument')
    .find('#adults .up'),
    adultsButtonDecrement:()=>cy.get('iframe.nKphmK[title="Wix Hotels"]')
    .its('0.contentDocument')
    .find('#adults .down'),
    adultValue: () => cy.get('iframe.nKphmK[title="Wix Hotels"]')
    .its('0.contentDocument')
    .find('#adults .value'),
    childrensButtonIncrement:()=>cy.get('iframe.nKphmK[title="Wix Hotels"]')
    .its('0.contentDocument')
    .find('#children .up'),
    childrenButtonDecrement:()=>cy.get('iframe.nKphmK[title="Wix Hotels"]')
    .its('0.contentDocument')
    .find('#children .down'),
    childrenValue: () => cy.get('iframe.nKphmK[title="Wix Hotels"]')
    .its('0.contentDocument')
    .find('#children .value'),

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

      // Verifică dacă widgetul de căutare este afișat
    setDataInCalendar:(checkInDate, checkOutDate) =>{
      // checkOutDate.setDate(todayDate.getDate() + 3); 

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
      }

  
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
};

    
  