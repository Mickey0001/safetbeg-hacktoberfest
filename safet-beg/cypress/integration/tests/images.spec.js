/// <reference types="cypress" />

it('verifies images are present', ()=> {

    cy.visit('http://localhost:3000/')

    cy.get('img').should('be.visible')


    cy.visit('http://localhost:3000/works/bururet')

    cy.get('img').should('be.visible')

    cy.visit('http://localhost:3000/contact')

    cy.get('img').should('be.visible')

  })
  