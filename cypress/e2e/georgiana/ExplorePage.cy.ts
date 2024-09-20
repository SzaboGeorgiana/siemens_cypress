import { explorePage,homePage } from "../../ui-manager/georgiana/pages/pages";


describe("Test Explore Page", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.contains("EXPLORE").first().click();
    // homePage.clickOnExploreButton;
    cy.url().should('eq', 'https://ancabota09.wixsite.com/intern/explore');
  });


 const paragraphs = [
  { element:  explorePage.exploreParagraph,  name: "Explor page" },
  { element:  explorePage.chinatownParagraph, name: "Chinatown" },
  { element:  explorePage.haightandashburyParagraph, name: "Haight & Ashbury" },
  { element:  explorePage.goldengateParagraph, name: "Golden Gate Bridge" }
];

paragraphs.forEach((paragraph) => {
  it(`Test: ${paragraph.name} description`, () => {
    paragraph.element()
      .should('be.visible')
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
});


const images = [
  { element: explorePage.chinatownImage, name: "Chinatown", expectedSrc: "9c608a_14eb60e42d3a42f29fe67d9b579e26de.jpg" },
  { element: explorePage.haightAshburyImage, name: "Haight & Ashbury", expectedSrc: "9c608a_569e962c58334d07a4048e125af8fb82.jpg" },
  { element: explorePage.goldenGateImage, name: "Golden Gate Bridge", expectedSrc: "9c608a_66f0495affeb412ba01b0d9f0bd3dd6b.jpg" }
];

images.forEach((image) => {
  it(`Test: ${image.name} image`, () => {
    image.element()
      .should('be.visible')
      .and(($img) => {
        const src = $img.attr('src');
        expect(src).to.include(image.expectedSrc);
      });
    });
  });
});

// it(`Test images`, () => {
  //   explorePage.chinatownImage()
  //     .should('be.visible')
  //     .and(($img) => {
  //       const src = $img.attr('src');
  //       expect(src).to.include("9c608a_14eb60e42d3a42f29fe67d9b579e26de.jpg");
  //     });

  //   explorePage.haightAshburyImage()
  //     .should('be.visible')
  //     .and(($img) => {
  //       const src = $img.attr('src');
  //       expect(src).to.include("9c608a_569e962c58334d07a4048e125af8fb82.jpg");
  //     });

  //   explorePage.goldenGateImage()
  //     .should('be.visible')
  //     .and(($img) => {
  //       const src = $img.attr('src');
  //       expect(src).to.include("9c608a_66f0495affeb412ba01b0d9f0bd3dd6b.jpg");
  //     });
  // });


