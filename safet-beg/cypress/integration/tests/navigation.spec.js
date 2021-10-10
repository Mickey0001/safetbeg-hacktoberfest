/// <reference types="cypress" />

it('opens all nav links', ()=> {

  cy.visit('http://localhost:3000/')
  cy.get('button').click()

   //home page
   cy.contains('Home').click()
   cy.location('pathname').should('equal', '/')

    //about page
    cy.contains('About').click()
    cy.location('pathname').should('equal', '/about')

    //works page
    cy.contains('Works').click()
    cy.location('pathname').should('equal', '/works/bururet')
  
    //contact page
    cy.contains('Contact').click()
    cy.location('pathname').should('equal', '/contact') 
})
