import { roomsPage } from "../../ui-manager/ana/pages/pages";
import { homePage } from "../../ui-manager/ana/pages/pages";
import { selectDateInIframe } from "../../ui-manager/ana/helpers/functions";
import { formatDateForSearch } from "../../ui-manager/ana/helpers/functions";
import { navigateMonthsInCalendarInRoomsPage } from "../../ui-manager/ana/helpers/functions";
import { formatDateForAriaLabel } from "../../ui-manager/ana/helpers/functions";
import { roomButton, clickElementRoomsPage, elementVisibilityRoomsPage} from "../../ui-manager/ana/helpers/functions";
import { textEqualRoomsPage, textNotEqualRoomsPage } from "../../ui-manager/ana/helpers/functions";


const roomsPageURL = "https://ancabota09.wixsite.com/intern/rooms";

beforeEach(() => {
    cy.visit("/")
  })

  it("Selector Check In Button Test", () => {

    cy.visit(roomsPageURL)
    cy.wait(10000);
    clickElementRoomsPage('#check-in');
    elementVisibilityRoomsPage('.calendar-popup.s-field.s-separator.visible');

  })
  
  it("Selector Check Out Button Test", () => {

    cy.visit(roomsPageURL)
    cy.wait(10000);
    clickElementRoomsPage('#check-out');
    elementVisibilityRoomsPage('.calendar-popup.s-field.s-separator.visible');

  })

  it("Adults Button Test", () => {
    cy.visit(roomsPageURL);
    cy.wait(10000);
    //default number is 1 test
    let stringAdultsNumber = '1'
    let adultsNumber = 1;
    textEqualRoomsPage('#adults .value',stringAdultsNumber);

    //decrement under 1 test
    clickElementRoomsPage('#adults > a.down');
    adultsNumber--
    stringAdultsNumber = adultsNumber.toString();
    textNotEqualRoomsPage('#adults .value',stringAdultsNumber);
    adultsNumber = 1

    //increment the adults number test
    clickElementRoomsPage('#adults > a.up');
    adultsNumber++
    stringAdultsNumber = adultsNumber.toString();
    textEqualRoomsPage('#adults .value',stringAdultsNumber);
    
    //decrement number back to 1 test
    clickElementRoomsPage('#adults > a.down');
    adultsNumber--
    stringAdultsNumber = adultsNumber.toString();
    textEqualRoomsPage('#adults .value',stringAdultsNumber);
  })

  it("Kids Button Test", () => {
    cy.visit(roomsPageURL);
    cy.wait(10000);
    //default number is 0 test
    let stringKidsNumber = '0'
    let kidsNumber = 0;
    textEqualRoomsPage('#children .value',stringKidsNumber);

    //decrement under 0- test
    clickElementRoomsPage('#children > a.down')
    kidsNumber--;
    stringKidsNumber = kidsNumber.toString();
    textNotEqualRoomsPage('#children .value',stringKidsNumber);
    kidsNumber = 0

    //increment the adults number test
    clickElementRoomsPage('#children > a.up')
    kidsNumber++
    stringKidsNumber = kidsNumber.toString();
    textEqualRoomsPage('#children .value',stringKidsNumber);
    
    //decrement number back to 1 test
    clickElementRoomsPage('#children > a.down')
    kidsNumber--
    stringKidsNumber = kidsNumber.toString();
    textEqualRoomsPage('#children .value',stringKidsNumber);
  })

  it.only("Search Button Valid Input Test", () => {
    cy.visit(roomsPageURL);
    cy.wait(2000);
    //check if search button exists
    let searchButton = cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find('#hotel-container > section > div > div > form > ul > li.search-btn > button > span:nth-child(1)')
        .should('be.visible')

    //select today for check in
    const today = new Date();
    today.setDate(today.getDate());
    let formattedDateForText = formatDateForSearch(today);
    let formattedDate = formatDateForAriaLabel(today);
    clickElementRoomsPage('#check-in');
    
    cy.wait(2000);

    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(`button[aria-label="${formattedDate}"]`)
         .click();
         
    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#check_in-value')
      .should('have.text', (formattedDateForText));

    //select a day after 10 days for checkout
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 10);
    formattedDate = formatDateForAriaLabel(futureDate);

    const monthsToClick = (futureDate.getFullYear() - today.getFullYear()) * 12 + (futureDate.getMonth() - today.getMonth());

    for (let i = 0; i < monthsToClick; i++) {
      navigateMonthsInCalendarInRoomsPage('.navigate-right');
    }

    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(`button[aria-label="${formattedDate}"]`)
         .click();

    formattedDateForText = formatDateForSearch(futureDate);

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#check_out-value')
      .should('have.text', (formattedDateForText));

    //number of adults 3
    let desiredNumberOfAdults = 3;
    let adultsNumber = 1;
    //increment the adults number test
    for (let i = 1; i < desiredNumberOfAdults; i++) {
      cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#adults > a.up')
        .click();
      adultsNumber++;
    }

    let stringAdultsNumber = adultsNumber.toString();

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#adults .value')
      .invoke('text')
      .should('equal',stringAdultsNumber);

    //number of kids 0
    let desiredNumberOfKids = 1;
    let kidsNumber = 0;
    //increment the adults number test
    for (let i = 1; i <= desiredNumberOfKids; i++) {
      cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#children > a.up')
        .click();
      kidsNumber++;
    }

    let stringKidsNumber = kidsNumber.toString();

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#children .value')
      .invoke('text')
      .should('equal',stringKidsNumber);

    searchButton.click();
    cy.url().should("contains", "https://ancabota09.wixsite.com/intern/rooms")

  })

  it("Clear Button Test", () => {
    cy.visit(roomsPageURL);
    cy.wait(2000);
    //check if search button exists
    let searchButton = cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find('#hotel-container > section > div > div > form > ul > li.search-btn > button > span:nth-child(1)')
        .should('be.visible')

    //select today for check in
    const today = new Date();
    today.setDate(today.getDate());
    let formattedDateForText = formatDateForSearch(today);
    let formattedDate = formatDateForAriaLabel(today);

    cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find('#check-in')
        .click()
    
    cy.wait(2000);

    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(`button[aria-label="${formattedDate}"]`)
         .click();
         
    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#check_in-value')
      .should('have.text', (formattedDateForText));

    //select a day after 10 days for checkout
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 10);
    formattedDate = formatDateForAriaLabel(futureDate);

    const monthsToClick = (futureDate.getFullYear() - today.getFullYear()) * 12 + (futureDate.getMonth() - today.getMonth());

    for (let i = 0; i < monthsToClick; i++) {
      navigateMonthsInCalendarInRoomsPage('.navigate-right');
    }

    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(`button[aria-label="${formattedDate}"]`)
         .click();

    formattedDateForText = formatDateForSearch(futureDate);

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#check_out-value')
      .should('have.text', (formattedDateForText));

    //number of adults 3
    let desiredNumberOfAdults = 3;
    let adultsNumber = 1;
    //increment the adults number test
    for (let i = 1; i < desiredNumberOfAdults; i++) {
      cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#adults > a.up')
        .click();
      adultsNumber++;
    }

    let stringAdultsNumber = adultsNumber.toString();

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#adults .value')
      .invoke('text')
      .should('equal',stringAdultsNumber);

    //number of kids 0
    let desiredNumberOfKids = 1;
    let kidsNumber = 0;
    //increment the adults number test
    for (let i = 1; i <= desiredNumberOfKids; i++) {
      cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#children > a.up')
        .click();
      kidsNumber++;
    }

    let stringKidsNumber = kidsNumber.toString();

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#children .value')
      .invoke('text')
      .should('equal',stringKidsNumber);

    searchButton.click();
    cy.url().should("contains", "https://ancabota09.wixsite.com/intern/rooms")

   cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find('.back.s-button-color')
        .should('be.visible')
        .click();

    cy.url().should("equal", "https://ancabota09.wixsite.com/intern/rooms/rooms")

  })

  it("Standard Suite Name Button Test", () => {
    cy.visit(roomsPageURL)
    cy.wait(10000);
    roomButton('#content > div > div.content-body > div > ul > li:nth-child(1) > div > div.info > div.description > h3 > a > span');
    cy.url().should("equal", "https://ancabota09.wixsite.com/intern/rooms/rooms/afda6ba1-efd1-4432-bd42-dd678bd4beb4");
  })

  it("Cottage Name Button Test", () => {
    cy.visit(roomsPageURL)
    cy.wait(10000);
    roomButton('#content > div > div.content-body > div > ul > li:nth-child(2) > div > div.info > div.description > h3 > a > span');
    cy.url().should("equal", "https://ancabota09.wixsite.com/intern/rooms/rooms/4e2820f3-0564-4bd0-9258-e7594d617297");
  })

  it("Clasic App Name Button Test", () => {
    cy.visit(roomsPageURL)
    cy.wait(10000);
    roomButton('#content > div > div.content-body > div > ul > li:nth-child(3) > div > div.info > div.description > h3 > a > span');
    cy.url().should("equal", "https://ancabota09.wixsite.com/intern/rooms/rooms/1739582a-003e-49e7-a9e6-b6fdb55a9027");
  })

  it("Rooms Buttons Test", () => {
    const testCases = [
      {
        name: "Standard Suite More Info",
        selector: '#content > div > div.content-body > div > ul > li:nth-child(1) > div > div.info > div.bottom > button',
        expectedUrl: 'https://ancabota09.wixsite.com/intern/rooms/rooms/afda6ba1-efd1-4432-bd42-dd678bd4beb4'
      },
      {
        name: "Cottage More Info",
        selector: '#content > div > div.content-body > div > ul > li:nth-child(2) > div > div.info > div.bottom > button',
        expectedUrl: 'https://ancabota09.wixsite.com/intern/rooms/rooms/4e2820f3-0564-4bd0-9258-e7594d617297'
      },
      {
        name: "Classic App More Info",
        selector: '#content > div > div.content-body > div > ul > li:nth-child(3) > div > div.info > div.bottom > button',
        expectedUrl: 'https://ancabota09.wixsite.com/intern/rooms/rooms/1739582a-003e-49e7-a9e6-b6fdb55a9027'
      },
      {
        name: "Standard Suite Image Button",
        selector: '#content > div > div.content-body > div > ul > li:nth-child(1) > div > div.image > span > span',
        expectedUrl: 'https://ancabota09.wixsite.com/intern/rooms/rooms/afda6ba1-efd1-4432-bd42-dd678bd4beb4'
      },
      {
        name: "Cottage Image Button",
        selector: '#content > div > div.content-body > div > ul > li:nth-child(2) > div > div.image > span > span',
        expectedUrl: 'https://ancabota09.wixsite.com/intern/rooms/rooms/4e2820f3-0564-4bd0-9258-e7594d617297'
      },
      {
        name: "Classic App Image Button",
        selector: '#content > div > div.content-body > div > ul > li:nth-child(3) > div > div.image > span > span',
        expectedUrl: 'https://ancabota09.wixsite.com/intern/rooms/rooms/1739582a-003e-49e7-a9e6-b6fdb55a9027'
      }
    ];

    cy.visit(roomsPageURL);
    cy.wait(10000);
  
    testCases.forEach((testCase) => {
      cy.log(`Testing ${testCase.name}`);
      roomButton(testCase.selector); 
      cy.url().should('equal', testCase.expectedUrl);
      cy.visit(roomsPageURL);
      cy.wait(10000);
    });

  })

  it("One Night Test", () => {
    cy.visit(roomsPageURL);
    cy.wait(2000);
    //check if search button exists
    let searchButton = cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find('#hotel-container > section > div > div > form > ul > li.search-btn > button > span:nth-child(1)')
        .should('be.visible')

    //select today for check in
    const today = new Date();
    today.setDate(today.getDate());
    let formattedDateForText = formatDateForSearch(today);
    let formattedDate = formatDateForAriaLabel(today);

    cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find('#check-in')
        .click()
    
    cy.wait(2000);

    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(`button[aria-label="${formattedDate}"]`)
         .click();
         
    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#check_in-value')
      .should('have.text', (formattedDateForText));

    //select tomorrow checkout
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 1);
    formattedDate = formatDateForAriaLabel(futureDate);

    const monthsToClick = (futureDate.getFullYear() - today.getFullYear()) * 12 + (futureDate.getMonth() - today.getMonth());

    for (let i = 0; i < monthsToClick; i++) {
      navigateMonthsInCalendarInRoomsPage('.navigate-right');
    }

    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(`button[aria-label="${formattedDate}"]`)
         .click();

    formattedDateForText = formatDateForSearch(futureDate);

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#check_out-value')
      .should('have.text', (formattedDateForText));

    //number of adults 1
    searchButton.click();
    cy.url().should("equals", "https://ancabota09.wixsite.com/intern/rooms/rooms/%3FcheckIn%3D1724198400000%26checkOut%3D1724457600000%26adults%3D1%26children%3D0");

  })

  it("More than 180 Nights Test", () => {
    cy.visit(roomsPageURL);
    cy.wait(2000);
    //check if search button exists
    let searchButton = cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find('#hotel-container > section > div > div > form > ul > li.search-btn > button > span:nth-child(1)')
        .should('be.visible')

    //select today for check in
    const today = new Date();
    today.setDate(today.getDate());
    let formattedDateForText = formatDateForSearch(today);
    let formattedDate = formatDateForAriaLabel(today);

    cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find('#check-in')
        .click()
    
    cy.wait(2000);

    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(`button[aria-label="${formattedDate}"]`)
         .click();
         
    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#check_in-value')
      .should('have.text', (formattedDateForText));

    //select a date after 181 days
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 181);
    formattedDate = formatDateForAriaLabel(futureDate);

    const monthsToClick = (futureDate.getFullYear() - today.getFullYear()) * 12 + (futureDate.getMonth() - today.getMonth());

    for (let i = 0; i < monthsToClick; i++) {
      navigateMonthsInCalendarInRoomsPage('.navigate-right');
    }

    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(`button[aria-label="${formattedDate}"]`)
         .click();

    formattedDateForText = formatDateForSearch(futureDate);

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#check_out-value')
      .should('have.text', (formattedDateForText));

    //number of adults 1

    searchButton.click();
    //error message
    cy.get('iframe.nKphmK[title="Book a Room"]')
    .its('0.contentDocument')
    .find('.alert.alert-danger.clearfix')
    .should('be.visible')

  })

  it("Search 8 Adults Test", () => {
    cy.visit(roomsPageURL);
    cy.wait(2000);
    //check if search button exists
    let searchButton = cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find('#hotel-container > section > div > div > form > ul > li.search-btn > button > span:nth-child(1)')
        .should('be.visible')

    //select today for check in
    const today = new Date();
    today.setDate(today.getDate());
    let formattedDateForText = formatDateForSearch(today);
    let formattedDate = formatDateForAriaLabel(today);

    cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find('#check-in')
        .click()
    
    cy.wait(2000);

    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(`button[aria-label="${formattedDate}"]`)
         .click();
         
    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#check_in-value')
      .should('have.text', (formattedDateForText));

    //select a day after 10 days for checkout
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 10);
    formattedDate = formatDateForAriaLabel(futureDate);

    const monthsToClick = (futureDate.getFullYear() - today.getFullYear()) * 12 + (futureDate.getMonth() - today.getMonth());

    for (let i = 0; i < monthsToClick; i++) {
      navigateMonthsInCalendarInRoomsPage('.navigate-right');
    }

    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(`button[aria-label="${formattedDate}"]`)
         .click();

    formattedDateForText = formatDateForSearch(futureDate);

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#check_out-value')
      .should('have.text', (formattedDateForText));

    //number of adults 8
    let desiredNumberOfAdults = 8;
    let adultsNumber = 1;
    //increment the adults number test
    for (let i = 1; i < desiredNumberOfAdults; i++) {
      cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#adults > a.up')
        .click();
      adultsNumber++;
    }

    let stringAdultsNumber = adultsNumber.toString();

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#adults .value')
      .invoke('text')
      .should('equal',stringAdultsNumber);
    //number of kids 0
    searchButton.click();
    
    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('p[stranslate="rooms.error.SORRY"] > span.strans')
         .should('be.visible')
         .should('contain.text', "We can’t seem to find what you’re looking for. Try another search.");
  })

  it("Search 2 Adults 2 Kids Test", () => {
    cy.visit(roomsPageURL);
    cy.wait(2000);
    //check if search button exists
    let searchButton = cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find('#hotel-container > section > div > div > form > ul > li.search-btn > button > span:nth-child(1)')
        .should('be.visible')

    //select today for check in
    const today = new Date();
    today.setDate(today.getDate());
    let formattedDateForText = formatDateForSearch(today);
    let formattedDate = formatDateForAriaLabel(today);

    cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find('#check-in')
        .click()
    
    cy.wait(2000);

    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(`button[aria-label="${formattedDate}"]`)
         .click();
         
    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#check_in-value')
      .should('have.text', (formattedDateForText));

    //select a day after 10 days for checkout
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 10);
    formattedDate = formatDateForAriaLabel(futureDate);

    const monthsToClick = (futureDate.getFullYear() - today.getFullYear()) * 12 + (futureDate.getMonth() - today.getMonth());

    for (let i = 0; i < monthsToClick; i++) {
      navigateMonthsInCalendarInRoomsPage('.navigate-right');
    }

    cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(`button[aria-label="${formattedDate}"]`)
         .click();

    formattedDateForText = formatDateForSearch(futureDate);

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#check_out-value')
      .should('have.text', (formattedDateForText));

    //number of adults 2
    let desiredNumberOfAdults = 2;
    let adultsNumber = 1;
    //increment the adults number test
    for (let i = 1; i < desiredNumberOfAdults; i++) {
      cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#adults > a.up')
        .click();
      adultsNumber++;
    }

    let stringAdultsNumber = adultsNumber.toString();

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#adults .value')
      .invoke('text')
      .should('equal',stringAdultsNumber);

    //number of kids 2
    let desiredNumberOfKids = 2;
    let kidsNumber = 0;
    //increment the adults number test
    for (let i = 1; i <= desiredNumberOfKids; i++) {
      cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#children > a.up')
        .click();
      kidsNumber++;
    }

    let stringKidsNumber = kidsNumber.toString();

    cy.get('iframe.nKphmK[title="Book a Room"]').its('0.contentDocument').find('#children .value')
      .invoke('text')
      .should('equal',stringKidsNumber);

    searchButton.click();
    cy.get('iframe.nKphmK[title="Book a Room"]')
      .its('0.contentDocument')
      .find('p[stranslate="rooms.error.SORRY"] > span.strans')
      .should('be.visible')
      .should('contain.text', "We can’t seem to find what you’re looking for. Try another search.");

  })

