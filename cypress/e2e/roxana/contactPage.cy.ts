import { generateRandomWords } from "../../ui-manager/roxana/helpers/functions";
import { contactpage } from "../../ui-manager/roxana/pages/pages";
import { contactURL } from "../../ui-manager/roxana/pages/pages"

describe ("Test ContactPage", () => {
    const values = [
        {name:"Jo Michael", email:"jo_M@test.com", phone: "0897546834", comm: generateRandomWords(32)},
        {name:"Luchian Stark", email:"luck_Stark@test.com", phone: "04782783673", comm: generateRandomWords(21)},
        {name:"Marcus Andron", email:"marcus.andr@test.com", phone: "0982711678", comm: generateRandomWords(19)}
      ]
    const wrongEmail = [
        {name:"Joa Michael", email:"wrongemail", phone: "0897546834", comm: generateRandomWords(32)},
        {name:"Joa Michael", email:"wrongemail@", phone: "0897546834", comm: generateRandomWords(32)},
        {name:"Joa Michael", email:"wrongemail@com@", phone: "0897546834", comm: generateRandomWords(32)}
    ]
    const wrongName = [
        {name:"8423158", email:"luck_Stark@test.com", phone: "04782783673", comm: generateRandomWords(21)},
        {name:"!@#$", email:"luck_Stark@test.com", phone: "04782783673", comm: generateRandomWords(21)}
    ]
    const wrongPhone = [
        {name:"Marcus Andron", email:"marcus.andr@test.com", phone: "Mark", comm: generateRandomWords(19)},
        {name:"Marcus Andron", email:"marcus.andr@test.com", phone: "!@@#%$", comm: generateRandomWords(19)}
    ]
    const emptyField = [
        {name:"", email:"jo_M@test.com", phone: "0897546834", comm: generateRandomWords(32), fieldToCheck: 'nameField'},
        {name:"Jo Michael", email:"", phone: "0897546834", comm: generateRandomWords(32), fieldToCheck: 'emailField'},
        {name:"Jo Michael", email:"jo_M@test.com", phone: "0897546834", comm: "", fieldToCheck: 'commentField'}
    ]

  beforeEach(() => {
    cy.visit(contactURL)
  })

  values.forEach(element => {
    it(`Test submit with value: ${element.name}`, () => {
      cy.url().should("eql", "https://ancabota09.wixsite.com/intern/contact")
      cy.wait(3000)

      contactpage.nameField().clear().type(element.name)
      contactpage.emailField().clear().type(element.email)
      contactpage.phoneField().clear().type(element.phone)
      contactpage.commentField().clear().type(element.comm)
      contactpage.submitButton().click()
      contactpage.submitMessage().should('exist')

    })
  });

  wrongEmail.forEach(wrongEmail => {
    it(`Test submit with wrong email: ${wrongEmail.email}`, () => {
        cy.url().should("eql", "https://ancabota09.wixsite.com/intern/contact");

      contactpage.nameField().clear().type(wrongEmail.name);
      contactpage.emailField().clear().type(wrongEmail.email);
      contactpage.phoneField().clear().type(wrongEmail.phone);
      contactpage.commentField().clear().type(wrongEmail.comm);
      
      contactpage.submitButton().click();
      contactpage.emailField().invoke('attr', 'aria-invalid').should('exist').and('eq', 'true');
    })
  })

  wrongName.forEach(wrongName => {
    it(`Test submit with wrong name: ${wrongName.name}`, () => {
        cy.url().should("eql", "https://ancabota09.wixsite.com/intern/contact");

      contactpage.nameField().clear().type(wrongName.name);
      contactpage.emailField().clear().type(wrongName.email);
      contactpage.phoneField().clear().type(wrongName.phone);
      contactpage.commentField().clear().type(wrongName.comm);
      
      contactpage.submitButton().click();
      contactpage.nameField().invoke('attr', 'aria-invalid').should('exist').and('eq', 'true');
    })
  })

  wrongPhone.forEach(wrongPhone => {
    it(`Test submit with wrong phone: ${wrongPhone.phone}`, () => {
        cy.url().should("eql", "https://ancabota09.wixsite.com/intern/contact");

      contactpage.nameField().clear().type(wrongPhone.name);
      contactpage.emailField().clear().type(wrongPhone.email);
      contactpage.phoneField().clear().type(wrongPhone.phone);
      contactpage.commentField().clear().type(wrongPhone.comm);
      
      contactpage.submitButton().click();
      contactpage.phoneField().invoke('attr', 'aria-invalid').should('exist').and('eq', 'true');
    })
  })

  emptyField.forEach(emptyField => {
    it(`Test submit with emptyField: ${emptyField.fieldToCheck}`, () => {
        cy.url().should("eql", "https://ancabota09.wixsite.com/intern/contact");
      
    // Completarea câmpurilor cu excepția celui care trebuie lăsat gol
    if (emptyField.fieldToCheck !== 'nameField') {
        contactpage.nameField().clear().type(emptyField.name);
      }
      
      if (emptyField.fieldToCheck !== 'emailField') {
        contactpage.emailField().clear().type(emptyField.email);
      }
      
      if (emptyField.fieldToCheck !== 'phoneField') {
        contactpage.phoneField().clear().type(emptyField.phone);
      }
      
      if (emptyField.fieldToCheck !== 'commentField') {
        contactpage.commentField().clear().type(emptyField.comm);
      }
      contactpage.submitButton().click();
      contactpage.submitButton().click();


      // Selectarea câmpului corect pe baza valorii din fieldToCheck
    let field;
    switch (emptyField.fieldToCheck) {
      case 'nameField':
        field = contactpage.nameField();
        break;
      case 'emailField':
        field = contactpage.emailField();
        break;
      case 'commentField':
        field = contactpage.commentField();
        break;
    }
      field.invoke('attr', 'aria-invalid').should('exist').and('eq', 'true');
    })
  })

  it.only("Test Map Fullscreen", () => {
    contactpage.mapFrame()
      .should('have.attr', 'allowfullscreen');
  
    contactpage.fullscreenButton()
      .should('exist')
      .click()
      .should('have.attr', 'aria-pressed', 'true');
  });


})