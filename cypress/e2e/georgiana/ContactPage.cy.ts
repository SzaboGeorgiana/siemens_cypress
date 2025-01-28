import { contactPage } from "../../ui-manager/georgiana/pages/pages";
import { generateRandomWords } from "../../ui-manager/georgiana/helpers/functions";

describe("Test Contact Page", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.contains("CONTACT").first().click();
    cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/contact');
  });


  const values = [
    {
      name: "\n", 
      email: "jo_M@test.com", 
      phone: "0897546834", 
      comm: generateRandomWords(32), 
      testName: "Required Field Warning No Name", 
      expectedErrorMessage: "Please fill out this field.", 
      fieldFunction: () => contactPage.nameField()
    },
    {
      name: "Luchian Stark", 
      email: "\n", 
      phone: "04782783673", 
      comm: generateRandomWords(21), 
      testName: "Required Field Warning No Email", 
      expectedErrorMessage: "Please fill out this field.", 
      fieldFunction: () => contactPage.emailField()
    },
    {
      name: "Luchian Stark", 
      email: "jo_M@test.com", 
      phone: "\n", 
      comm: generateRandomWords(21), 
      testName: "Required Field Warning No Phone", 
      expectedErrorMessage: "Please fill out this field.", 
      fieldFunction: () => contactPage.phoneField()
    },
    {
      name: "Marcus Andron", 
      email: "marcus.andr@test.com", 
      phone: "0982711678", 
      comm: "", 
      testName: "Required Field Warning No Message", 
      expectedErrorMessage: "Please fill out this field.", 
      fieldFunction: () => contactPage.commentField()
    },
    {
      name: "Jo Michael", 
      email: "jo_Mestom", 
      phone: "0897546834", 
      comm: generateRandomWords(32), 
      testName: "validate Field Warning Invalid Email", 
      expectedErrorMessage: "Please include an '@' in the email address. 'jo_Mestom' is missing an '@'.", 
      fieldFunction: () => contactPage.emailField()
    },
    {
      name: "Luchian Stark", 
      email: "luck_Stark@test.com", 
      phone: "04782783673", 
      comm: generateRandomWords(21), 
      testName: "Valid Data", 
      expectedErrorMessage: "", 
      fieldFunction: null // No validation for valid data
    }
  ];

  values.forEach(element => {
    it(`Test: ${element.testName}`, () => {
      cy.wait(3000)
      contactPage.nameField().clear().type(element.name)
      contactPage.emailField().clear().type(element.email)
      contactPage.phoneField().clear().type(element.phone)
      if(element.comm)
        contactPage.commentField().clear().type(element.comm)

      contactPage.submitField().click()

        // Verifică dacă așteptăm un mesaj de eroare
        if (element.expectedErrorMessage && element.fieldFunction) {
            element.fieldFunction().then($field => {
            const inputField = $field[0] as HTMLInputElement;
            const validationMessage = inputField.validationMessage;
            expect(validationMessage).to.equal(element.expectedErrorMessage);
            });
        } 
        else 
        {
            contactPage.confirmationMessage().should('be.visible')
            .and('contain.text', 'Thanks for submitting!');
        }
    })
  });

  
  it(`Test: Paragraph`, () => {

    contactPage.paragraphElement().should('be.visible')
    .invoke('text')
    .then((paragraph) => {
      const normalizedParagraph = paragraph.replace(/\s+/g, ' ').trim();
      
      const expectedText1 = "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.";
      const expectedText2 = "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.";

      // Verifică dacă paragraful este diferit de expectedText1 și expectedText2
      expect(normalizedParagraph).to.not.equal(expectedText1);
      expect(normalizedParagraph).to.not.equal(expectedText2);
    }); 
  });

  it('Test: validate that confirmation message is initially hidden', () => {
    contactPage.confirmationMessage().should('be.visible')
    .and('not.contain.text', 'Thanks for submitting!');
    }); 


  it("Test: Map Fullscreen", () => {
    cy.wait(3000)
    cy.get('iframe[title="Google Maps"]')
        .should('have.attr', 'allowfullscreen');
    cy.get('iframe[title="Google Maps"]').its('0.contentDocument').find('#map_canvas > div > div.gm-style > div:nth-child(8) > button').should('exist').click()
      .should('have.attr', 'aria-pressed', 'true')    

  });

});


