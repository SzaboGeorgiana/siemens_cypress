import { roomsPage } from "../pages/pages";

export function generateRandomWords(length: number): string {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomWords = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomWords += characters[randomIndex];
    }
    return randomWords;
  }

  const formatDateForAriaLabel = (date: Date): string => {
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
export function selectDateInIframe_rooms(date: Date, ok: boolean)  {
  const formattedDate = formatDateForAriaLabel(date);

  if(ok)
  roomsPage.iframeSelector()
         .its('0.contentDocument') // Accesează documentul iframe-ului
          .find('.calendar')  // Selectează calendarul
          .find(`button[aria-label="${formattedDate}"]`).first()
          .click();
        else
      roomsPage.iframeSelector()
          .its('0.contentDocument') // Accesează documentul iframe-ului
           .find('.calendar')  // Selectează calendarul
           .find(`button[aria-label="${formattedDate}"]`).last()
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