import { elements_contactPage } from "../../ui-manager/david/pages/pages";
beforeEach(() => {
    cy.visit('https://ancabota09.wixsite.com/intern/contact');
  });
it('Paragraph_Test', () => {

    elements_contactPage.contactParagraph().should('be.visible');

    const expectedText = "If you have any questions, please contact us by telephone or email and we'll get back to you as soon as possible.\n" +
                         "We look forward to hearing from you.";

    elements_contactPage.contactParagraph().invoke('text').then((actualText) => {
        console.log("The expected text is: " + expectedText);
        console.log("The actual text is: " + actualText);

        expect(actualText).to.equal(expectedText, "The text displayed is not relevant or is not correct");
    });
});

it('Verify Name Required', () => {

    elements_contactPage.submitField().should('be.visible');

    elements_contactPage.submitField().click();

    elements_contactPage.nameField().invoke('prop', 'validationMessage').then((warningMessage) => {
      cy.log(warningMessage);

      expect(warningMessage).to.eq('Please fill out this field.');
    });
  });

  it('Invalid Name', () => {
    elements_contactPage.submitField().should('be.visible');
  
    elements_contactPage.nameField().type('12345');
  
    elements_contactPage.nameField().should('have.value', '12345');
  
    elements_contactPage.emailField().type('mail@corect.com');
  
    elements_contactPage.emailField().should('have.value', 'mail@corect.com');
  
    elements_contactPage.phoneField().type('0712345678');
  
    elements_contactPage.phoneField().should('have.value', '0712345678');
  
    elements_contactPage.commentField().type('Test');
  
    elements_contactPage.commentField().should('have.value', 'Test');
  
    elements_contactPage.submitField().click();
  
    elements_contactPage.nameField().invoke('prop', 'validationMessage').then((warningMessage) => {
      cy.log(warningMessage);
  
      expect(warningMessage).to.contain("Please enter a valid name.");
    });
  });

  it('Verify Email Required', () => {
    elements_contactPage.submitField().should('be.visible');
  
    elements_contactPage.nameField().type('John');
  
    elements_contactPage.nameField().should('have.value', 'John');
  
    elements_contactPage.submitField().click();
  
    elements_contactPage.emailField().invoke('prop', 'validationMessage').then((warningMessage) => {
      cy.log(warningMessage);
  
      expect(warningMessage).to.eq('Please fill out this field.');
    });
  });

  it('Invalid Email', () => {
    elements_contactPage.submitField().should('be.visible');
  
    elements_contactPage.nameField().type('John');
  
    elements_contactPage.nameField().should('have.value', 'John');
  
    elements_contactPage.emailField().type('mailgresit');
  
    elements_contactPage.submitField().click();
  
    elements_contactPage.emailField().invoke('prop', 'validationMessage').then((warningMessage) => {
      cy.log(warningMessage);
  
      expect(warningMessage).to.contain("Please include an '@' in the email address.");
    });
  });

  it('Invalid Email Again', () => {
    elements_contactPage.submitField().should('be.visible');
  
    elements_contactPage.nameField().type('John');
  
    elements_contactPage.nameField().should('have.value', 'John');
  
    elements_contactPage.emailField().type('mailgresit@');
  
    elements_contactPage.submitField().click();
  
    elements_contactPage.emailField().invoke('prop', 'validationMessage').then((warningMessage) => {
      cy.log(warningMessage);
  
      expect(warningMessage).to.contain("Please enter a part following '@'.");
    });
  });

  it('Invalid Email with @', () => {
    elements_contactPage.submitField().should('be.visible');
  
    elements_contactPage.nameField().type('John');
  
    elements_contactPage.nameField().should('have.value', 'John');
  
    elements_contactPage.emailField().type('mailgresit@greseala@');
  
    elements_contactPage.submitField().click();
  
    elements_contactPage.emailField().invoke('prop', 'validationMessage').then((warningMessage) => {
      cy.log(warningMessage);
  
      expect(warningMessage).to.contain("A part following '@' should not contain the symbol '@'.");
    });
  });

  it('Message Required', () => {
    elements_contactPage.submitField().should('be.visible');
  
    elements_contactPage.nameField().type('John');
  
    elements_contactPage.nameField().should('have.value', 'John');
  
    elements_contactPage.emailField().type('mail@corect.com');
  
    elements_contactPage.emailField().should('have.value', 'mail@corect.com');
  
    elements_contactPage.submitField().click();
  
    elements_contactPage.commentField().invoke('prop', 'validationMessage').then((warningMessage) => {
      cy.log(warningMessage);
  
      expect(warningMessage).to.contain("Please fill out this field.");
    });
  });

  it('Phone Required', () => {
    elements_contactPage.submitField().should('be.visible');
  
    elements_contactPage.nameField().type('John');
  
    elements_contactPage.nameField().should('have.value', 'John');
  
    elements_contactPage.emailField().type('mail@corect.com');
  
    elements_contactPage.emailField().should('have.value', 'mail@corect.com');
  
    elements_contactPage.commentField().type('Test');
  
    elements_contactPage.submitField().click();
  
    elements_contactPage.phoneField().invoke('prop', 'validationMessage').then((warningMessage) => {
      cy.log(warningMessage);
  
      expect(warningMessage).to.be.empty;
    });
  });

  it('Invalid Phone Number', () => {
    elements_contactPage.submitField().should('be.visible');
  
    elements_contactPage.nameField().type('John');
  
    elements_contactPage.nameField().should('have.value', 'John');
  
    elements_contactPage.emailField().type('mail@corect.com');
  
    elements_contactPage.emailField().should('have.value', 'mail@corect.com');
  
    elements_contactPage.phoneField().type('qwerty');
  
    elements_contactPage.phoneField().should('have.value', 'qwerty');
  
    elements_contactPage.commentField().type('Test');
  
    elements_contactPage.commentField().should('have.value', 'Test');
  
    elements_contactPage.submitField().click();

    elements_contactPage.phoneField().invoke('prop', 'validationMessage').then((warningMessage) => {
      cy.log(warningMessage);
  
      expect(warningMessage).to.contain("Please enter a valid phone number!");
    });
  });

  it('Valid Data', () => {
    elements_contactPage.contactParagraph().should('be.visible');
  
    elements_contactPage.submitField().should('be.visible');
  
    elements_contactPage.nameField().type('John');
  
    elements_contactPage.nameField().should('have.value', 'John');
  
    elements_contactPage.emailField().type('mail@corect.com');
  
    elements_contactPage.emailField().should('have.value', 'mail@corect.com');
  
    elements_contactPage.phoneField().type('0777777777');
  
    elements_contactPage.phoneField().should('have.value', '0777777777');
  
    elements_contactPage.commentField().type('Test');
  
    elements_contactPage.commentField().should('have.value', 'Test');
  
    elements_contactPage.submitFeedback().should('not.exist');
  
    elements_contactPage.submitField().click();
  
    elements_contactPage.submitFeedback().should('be.visible').and('contain', 'Thanks for submitting!');
  
    elements_contactPage.submitFeedback().invoke('text').then((confirmationMessage) => {
      cy.log(confirmationMessage);
    });
  });

  it.only("Test Map Fullscreen", () => {
        elements_contactPage.mapFrame()
      .should('have.attr', 'allowfullscreen');
  
    elements_contactPage.fullscreenButton()
      .should('exist')
      .click() 
      .should('have.attr', 'aria-pressed', 'true'); 
  });

  
  
  
  
  
  
  
  