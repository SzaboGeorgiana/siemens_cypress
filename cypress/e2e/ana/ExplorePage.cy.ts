import { explorePage } from "../../ui-manager/ana/pages/pages";
import { homePage } from "../../ui-manager/ana/pages/pages";

beforeEach(() => {
    cy.visit("/")
  })

  it("Explore Hotel Text Section Test", () => {
    homePage.exploreButton().should("be.visible").click()
    cy.url().should("eq", "https://ancabota09.wixsite.com/intern/explore")

    explorePage.title()
        .should('exist')
        .should('have.text', 'EXPLORE THE HOTEL')
    
    explorePage.textBlock()
        .should('exist')
        .should('have.text', "Discover the elegance and comfort of our hotel. Nestled in the heart of the city, our establishment offers a unique blend of contemporary design and classic luxury. Whether you're here for business or leisure, our hotel provides an exceptional experience with top-notch amenities, personalized services, and a warm, welcoming atmosphere. Take a tour through our beautifully designed rooms, enjoy exquisite dining at our on-site restaurant, and unwind at our state-of-the-art spa. Let us make your stay unforgettable, providing you with the perfect home away from home.")

  })

  it("Amenities Test", () => {
    homePage.exploreButton().should("be.visible").click()
    cy.url().should("eq", "https://ancabota09.wixsite.com/intern/explore")

  }) 


