import { chatBox } from "../../ui-manager/georgiana/pages/pages";

describe("Test Chat Functionality", () => {

  beforeEach(() => {
    cy.visit('/');
  });


  const values = [
    { name: "\n", email: "sara@mail.com", msg: "help", expectedErrorMessage: 'Make sure to add your name.',nameV:"no name",selector: '#name-error' },
    { name: "Mara", email: "\n", msg: "help 3", expectedErrorMessage: 'Make sure to add your email.',nameV:"no email", selector:'#email-error' },
    { name: "John", email: "invalidEmail", msg: "booking", expectedErrorMessage: "Enter a valid email address." ,nameV:"invalid email",selector: '#email-error'},
    { name: "Sara", email: "sara@mail.com", msg: "\n", expectedErrorMessage: '',nameV:"no message",selector: '' },
    { name: "Lulu", email: "sara@mail.com", msg: "booking", expectedErrorMessage: "",nameV:"valid data" ,selector: ''},
    { name: "Beian", email: "beian@mail.com", msg: "nu stiu", expectedErrorMessage: "",nameV:"valid data",selector: '' }
];



  it('verify chat button', () => {
    cy.wait(10000)
    
        chatBox.chatButton()
            .should('be.visible') 
            .scrollIntoView() 
            .then(($button) => { 
                 cy.wrap($button).click(); 
            });

        
        cy.get('#comp-jr4sqg2g > .nKphmK')
            .its('0.contentDocument') 
            .find('div[data-hook="expanded-widget"]') 
            .should('be.visible') 
            .and('contain', 'Online')
            .and('contain', 'Intern'); 
    });

  
  values.forEach((element) => {
    it.only(`chat form test with: ${element.nameV}`, () => {
        cy.wait(10000);
      chatBox.chatButton()
            .should('be.visible') 
            .scrollIntoView() 
            .then(($button) => { 
                 cy.wrap($button).click(); 
            });
        
        chatBox.chatTextArea()
        .should('be.visible')
        .type("hello"); 

        chatBox.sendButton()
        .should('be.visible')
        .click(); 
  
        chatBox.chatMessages()
            .last()
            .should('contain', "hello"); 
  
          chatBox.chatForm()
            .should('exist')
            .and('be.visible');
  
      chatBox.nameField()
          .should('be.visible')
          .clear()
          .type(element.name); 

      chatBox.emailField()
          .should('be.visible')
          .clear()
          .type(element.email);

      chatBox.messageField()
          .should('be.visible')
          .clear()
          .type(element.msg);

      chatBox.submitField() 
          .should('be.visible')
          .click();
            
        if(element.expectedErrorMessage)
            // Verify error message for the invalid field
            cy.get('#comp-jr4sqg2g > .nKphmK')
            .its('0.contentDocument')
            .find(element.selector)
            .should('be.visible')
            .find('span.Tmj8I') 
            .should('contain.text', element.expectedErrorMessage);
        else
            // Verify success message feedback
            chatBox.formFeedback()
                .should('contain', 'Thanks! Message us here.');

    });
  });

});

