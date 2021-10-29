/// <reference types="cypress" />

describe('verifies images are present', () => {

  it('should open the home image', () => {
    cy.visit('http://localhost:3000/')
    cy.get('img').should('be.visible')
  })

  it('should open the burruret image', () => {
    cy.visit('http://localhost:3000/works/bururet')
    cy.get('img').should('be.visible')
  })

  it('should show contact image', () => {
    cy.visit('http://localhost:3000/contact')
    cy.get('img').should('be.visible')
  })

})
