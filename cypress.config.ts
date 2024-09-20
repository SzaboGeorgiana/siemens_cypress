import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://ancabota09.wixsite.com/intern",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
