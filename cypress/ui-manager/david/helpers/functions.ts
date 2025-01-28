
const formatDateForAriaLabel = (date: Date): string => {
  const day = date.getDate();
  const dayName = date.toLocaleDateString('en-GB', { weekday: 'long' });
  const monthName = date.toLocaleDateString('en-GB', { month: 'long' });
  const year = date.getFullYear();

  return `${day}, ${dayName} ${monthName} ${year}`;+9
};
  
  export function selectDateInIframe(date: Date)  {
    const formattedDate = formatDateForAriaLabel(date);
    cy.log(formattedDate.toString());
    cy.get('iframe.U73P_q')
            .its('0.contentDocument')
            .find(`button[aria-label="${formattedDate}"]`)
            .click();
  };

  export function isDisabledDate(date: Date)  {
    const formattedDate = formatDateForAriaLabel(date);

    cy.get('iframe.U73P_q')
            .its('0.contentDocument')
            .find(`button[aria-label="${formattedDate}"]`)
            .should('have.attr', 'disabled');
};


