export const formatDateForAriaLabel = (date: Date): string => {
    const day = date.getDate();
    const dayName = date.toLocaleDateString('en-GB', { weekday: 'long' });
    const monthName = date.toLocaleDateString('en-GB', { month: 'long' });
    const year = date.getFullYear();
 
    return `${day}, ${dayName} ${monthName} ${year}`;
};
 
  export function selectDateInIframe(date: Date)  {
    const formattedDate = formatDateForAriaLabel(date);
    cy.get('iframe.U73P_q')
            .its('0.contentDocument')
            .find(`button[aria-label="${formattedDate}"]`)
            .click();
};

export const formatDateForSearch = (date: Date): string => {
    const day = date.getDate();
    const year = date.getFullYear(); 
    const monthMap = {
      0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun',
      6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec'
    };

    const month = monthMap[date.getMonth()]; 

    return `${day} ${month} ${year}`;
  };

  export function navigateMonthsInCalendarIframe(selector: string)  {
    
    cy.get('iframe.U73P_q')
            .its('0.contentDocument')
            .find(selector)
            .click();
};

export function navigateMonthsInCalendarInRoomsPage(selector: string)  {
    
  cy.get('iframe.nKphmK[title="Book a Room"]')
         .its('0.contentDocument')
         .find('.calendar-popup.s-field.s-separator.visible')
         .should('be.visible')
         .find(selector)
         .should('exist')
         .click();
};

export function typeEmailInContactForm(emailField: () => Cypress.Chainable, email: string) {

  emailField()
    .type(email)
    .invoke('attr', 'value')
    .should('equal', email);
}

export function typeNameInContactForm(nameField: () => Cypress.Chainable, name: string) {

  nameField()
    .type(name)
    .invoke('attr', 'value')
    .should('equal', name);
}

export function typeMessageInContactForm(nameField: () => Cypress.Chainable, message: string) {
  
  nameField()
    .type(message)
    .invoke('val')
    .should('equal', message);
}

export function typePhoneInContactForm(phoneField: () => Cypress.Chainable, phone: string) {
  
  phoneField()
      .type(phone)
      .invoke('attr','value')
      .should('equal',phone);
}

export function roomButton(selector: string)  {
  
  cy.get('iframe.nKphmK[title="Book a Room"]')
        .its('0.contentDocument')
        .find(selector)
        .should('be.visible')
        .click();
};

export function clickElementRoomsPage(selector: string)  {
  
  cy.get('iframe.nKphmK[title="Book a Room"]')
    .its('0.contentDocument')
    .find(selector)
    .click()
    
};

export function elementVisibilityRoomsPage(selector: string)  {
  
  cy.get('iframe.nKphmK[title="Book a Room"]')
    .its('0.contentDocument')
    .find(selector)
    .should('be.visible');
    
};


export function textEqualRoomsPage(selector: string, adultsNumber: string)  {
  
  cy.get('iframe.nKphmK[title="Book a Room"]')
  .its('0.contentDocument')
  .find(selector)
  .invoke('text')
  .should('equal',adultsNumber);
    
};


export function textNotEqualRoomsPage(selector: string, number: string)  {
  
  cy.get('iframe.nKphmK[title="Book a Room"]')
  .its('0.contentDocument')
  .find(selector)
  .invoke('text')
  .should('not.equal', number);
    
};

export function selectDayInCalendar(selector: string, date: Date)  {
  
  cy.get('iframe.nKphmK[title="Book a Room"]')
  .its('0.contentDocument')
  .find(selector)
  .should('be.visible')
  .find(`button[aria-label="${Date}"]`)
  .click();
    
};