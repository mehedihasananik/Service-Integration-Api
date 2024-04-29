describe("demo test", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/", { failOnStatusCode: false });
  });
});
