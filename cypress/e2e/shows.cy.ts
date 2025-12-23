/// <reference types="cypress" />

describe("Shows page", () => {
  it("displays upcoming events from the calendar feed", () => {
    cy.visit("/shows");

    cy.get("main ul li").should("have.length", 2);
    cy.contains("Winter Bash").should("exist");
    cy.contains("New Year's Countdown").should("exist");
    cy.contains("a", "Buy Tickets").should("have.length", 1);
  });
});
