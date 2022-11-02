// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Cypress.Commands.add("setToken", async (token = null) => {



//    if (token) {

//       localStorage.setItem("token", token);
//    }
//    else {
//       const data = await AxiosBase.getInstance().post("/token", {
//          "guest": false,
//          "username": "minh.tran@medihub.com.vn",
//          "password": "Admin@123",
//          "remember_me": true
//       });


//       localStorage.setItem("token", data.data.access_token);

//    }

// });

// Cypress.Commands.add("removeToken", (token) => {
//    localStorage.removeItem("token");

// });
