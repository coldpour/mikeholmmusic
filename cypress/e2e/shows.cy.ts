/// <reference types="cypress" />

const CALENDAR_URL =
  "https://calendar.google.com/calendar/ical/83c974b9154e94c01dad499b64e8a76f35ac37d9561fc8ac62c75caf0cd50661%40group.calendar.google.com/public/basic.ics";

describe("Shows page", () => {
  it("displays upcoming events from the calendar feed", () => {
    cy.intercept("GET", CALENDAR_URL, {
      fixture: "calendar.ics",
      headers: { "content-type": "text/calendar" },
    }).as("calendarFeed");

    cy.visit("/shows");
    cy.wait("@calendarFeed");

    cy.get("main ul li").should("have.length", 2);
    cy.contains("Winter Bash").should("exist");
    cy.contains("New Year's Countdown").should("exist");
    cy.contains("a", "Buy Tickets").should("have.length", 1);
  });
});
