const {
    Before,
    After,
} = require("cypress-cucumber-preprocessor");

// This will get called before each Scenario
beforeEach(() => {
    cy.intercept('https://uklocaleservices-qaer1.asi.corp/', (req) => {
      req.headers['authorization'] = "bearer AUTH_TOKEN_GOES_HERE";
    })
  });

// This will get called before scenarios that has the tag @FOO
Before ({ tags:"@FOO" }, () => {
    beforeWithTagCounter += 1;
})