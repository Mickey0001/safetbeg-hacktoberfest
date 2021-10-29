/// <reference types="cypress" />

  describe('opens all nav links', () => {

    it('should open the home page', () => {
      cy.get('button').click()
      cy.contains('Home').click()
      cy.location('pathname').should('equal', '/')
    })

    it('should open the about page', () => {
      cy.get('button').click()
      cy.contains('About').click()
      cy.location('pathname').should('equal', '/about')
    })

    it('should open the works page', () => {
      cy.get('button').click()
      cy.contains('Works').click()
      cy.location('pathname').should('equal', '/works/bururet')
    })

    it('should open the contact page', () => {
      cy.get('button').click()
      cy.contains('Contact').click()
      cy.location('pathname').should('equal', '/contact')
    })

})