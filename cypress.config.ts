import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://ancabota09.wixsite.com/intern",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
