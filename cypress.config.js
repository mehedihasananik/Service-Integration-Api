const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yiodf1',
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportWidth: 1920, // Set the width of the viewport
    viewportHeight: 1200, // Set the height of the viewport
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
