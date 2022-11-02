const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
    },

  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWZyZXNoRXhwaXJlQXQiOjE2NjgwNzY2MzcxOTMsImlhdCI6MTY2Njc4MDYzNywiZXhwIjoxNjY3Mzg1NDM3LCJzdWIiOiIyIn0.JmNf3ouCvnG1U3LhVP3jbhdFX80dt6ex70O-OUOMYbo",
  secondToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWZyZXNoRXhwaXJlQXQiOjE2NjgwNzY2MTE3NTEsImlhdCI6MTY2Njc4MDYxMSwiZXhwIjoxNjY3Mzg1NDExLCJzdWIiOiIzNDg1OSJ9.Qt9-NzZnFKfH_NGkZLzDCCvN6J3dAnFNz9_V_S--51c"
});
