describe("My First Test", () => {
  it("Searches from product page 1", () => {
    // 👇 go to the product page
    cy.visit(
      "https://www.amazon.com/Tungsten-Cube-Biggest-Size/dp/B07WK9WLZ8/",
    );
    // 👇 verify the page title
    cy.title().should(
      "eq",
      'Amazon.com: The 4" Tungsten Cube - Biggest Size : Toys & Games',
    );
    // 👇 find the main search field and type in it
    cy.get(".nav-search-field > input").type("rubik’s cube");
  });
});