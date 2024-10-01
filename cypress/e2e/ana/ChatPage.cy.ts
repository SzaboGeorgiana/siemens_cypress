import { homePage } from "../../ui-manager/ana/pages/pages";
import { openChat,verifyChatText,chatTypeMessage,clickSendButton,formIsSentBack } from "../../ui-manager/ana/helpers/functions";
import { formTypeName, formTypeEmail, formTypeMessage,clickSubmitButton } from "../../ui-manager/ana/helpers/functions";

beforeEach(() => {
    cy.visit("/")
  })

it("Chat Button Test", () => {
    openChat()
    cy.wait(2000);
    verifyChatText('.QfkqU','Intern');
    verifyChatText('.m-WA9','Online');
})

it("Chat Send Message Test", () => {
    openChat();
    cy.wait(2000);
    chatTypeMessage('._3nFws','Test Message');
    clickSendButton('.sk1yM.S66IV');

    //verify the message was sent
    cy.get('iframe.nKphmK[title="Wix Chat"]')
        .its('0.contentDocument')
        .find('.ZCbUH.zSgqw')
        .should('be.visible')
        .should('have.text','Test Message');

})

it("Chat Auto Response Test", () => {
    openChat();
    cy.wait(2000);
    chatTypeMessage('._3nFws','Test Message');
    clickSendButton('.sk1yM.S66IV');
    cy.wait(2000);
    formIsSentBack('.zd18O');
})

it("Form Valid Data Test", () => {
    openChat();
    cy.wait(2000);
    chatTypeMessage('._3nFws','Test Message');
    clickSendButton('.sk1yM.S66IV');
    cy.wait(2000);
    formIsSentBack('.zd18O');
    //Complete the form with valid data
    formTypeName('#name','John McGinn');
    formTypeEmail('#email','johnmcginn@gmail.com');
    formTypeMessage('#message','Lorem ipsum dolor sit amet');
    //Click Submit button
    clickSubmitButton('.dUbg3');
    //Verify that the confirmation message was sent
    cy.get('iframe.nKphmK[title="Wix Chat"]')
        .its('0.contentDocument')
        .find('.aGtJq')
        .should('be.visible');
})

it.only("After Submission Test", () => {
    openChat();
    cy.wait(2000);
    chatTypeMessage('._3nFws','Test Message');
    clickSendButton('.sk1yM.S66IV');
    cy.wait(2000);
    formIsSentBack('.zd18O');
    //Complete the form with valid data
    formTypeName('#name','John McGinn');
    formTypeEmail('#email','johnmcginn@gmail.com');
    formTypeMessage('#message','Lorem ipsum dolor sit amet');
    //Click Submit button
    clickSubmitButton('.dUbg3');
    cy.wait(2000);
    chatTypeMessage('._3nFws','I have a problem');
    clickSendButton('.sk1yM.S66IV');
    cy.wait(2000);
    //verify the number of messages from the list is 5
    cy.get('iframe.nKphmK[title="Wix Chat"]')
        .its('0.contentDocument')
        .find('.zmP1y.undefined.chat-list-item')
        .should('have.length', 4);
})



