/// <reference types="cypress" />

describe('link tests', () => {
  cy.visit('http://localhost:3000/')
  cy.get('button').click()

  it('opens all nav links', () => {

    it('should open the home page', () => {
      cy.contains('Home').click()
      cy.location('pathname').should('equal', '/')
    })

    it('should open the about page', () => {
      cy.contains('About').click()
      cy.location('pathname').should('equal', '/about')
    })

    it('should open the works page', () => {
      cy.contains('Works').click()
      cy.location('pathname').should('equal', '/works/bururet')
    })

    it('should open the contact page', () => {
      cy.contains('Contact').click()
      cy.location('pathname').should('equal', '/contact')
    })


  })
})