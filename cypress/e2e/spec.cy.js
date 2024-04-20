describe("My First Test", () => {
  it("Visits product page", () => {
    // Go to the Amazon product page
    cy.visit(
      "https://www.amazon.com/Tungsten-Cube-Biggest-Size/dp/B07WK9WLZ8/",
    );
    // Verify the page title
    cy.title().should(
      "eq",
      'Amazon.com: The 4" Tungsten Cube - Biggest Size : Toys & Games',
    );
  });
});