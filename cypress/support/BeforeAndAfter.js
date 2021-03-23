const {
    Before,
    After,
} = require("cypress-cucumber-preprocessor");

// This will get called before each Scenario
Before(() => {
    beforeCounter += 1;
    beforeWithTagCounter = 0;
});

// This will get called before scenarios that has the tag @FOO
Before ({ tags:"@FOO" }, () => {
    beforeWithTagCounter += 1;
})