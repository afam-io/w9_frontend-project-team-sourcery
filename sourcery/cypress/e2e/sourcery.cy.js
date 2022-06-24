/* eslint-disable no-undef */
/* 
Most important things to test with app is that 
- It successfully loads
- You can use it to input a link
- After inputting a link it appears on screen
- This link is usable
- On reload this link still exists

---
Extras
- Like button works
- On reload likes are the same as when page closed

*/

describe(" Sourcery App e2e test", () => {
  beforeEach(() => {
    cy.viewport("macbook-13");
    cy.visit("/");
  });

  it("loads with at least seeded data", () => {
    cy.contains("Blake Lawrence");
  });

  it("successfully inputs data", () => {
    cy.get('[placeholder="Name"]')
      .type("Afam Okoh")
      .should("have.value", "Afam Okoh");

    cy.get('[placeholder="URL"]')
      .type(
        "https://webflow.com/blog/html5-semantic-elements-and-webflow-the-essential-guide"
      )
      .should(
        "have.value",
        "https://webflow.com/blog/html5-semantic-elements-and-webflow-the-essential-guide"
      );
    cy.get(".description-box")
      .type("great initial guide to semantic HTML")
      .should("have.value", `great initial guide to semantic HTML`);
    cy.get(".submit-button").click();
  });

  it("resource appears on screen", () => {
    cy.get(".description").within(($description) => {
      cy.contains(`great initial guide to semantic html`);
    });
  });
});
