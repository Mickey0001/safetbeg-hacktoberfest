/// <reference types="cypress" />

it('verifies images are present', ()=> {

    cy.visit('http://localhost:3000/')

    cy.get('img').should('be.visible')


<<<<<<< HEAD
    //add tests for other sub-pages when they're added
=======
>>>>>>> cf0e886639ba5807518358d6cfe898011e27bc0e
    cy.visit('http://localhost:3000/works/bururet')

    cy.get('img').should('be.visible')

    cy.visit('http://localhost:3000/contact')

    cy.get('img').should('be.visible')

  })
  