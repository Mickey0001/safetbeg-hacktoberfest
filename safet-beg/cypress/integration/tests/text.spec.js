/// <reference types="cypress" />

describe('verifies all texts', ()=> {

  it('should contain footer text', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains("@SafetBeg");
    cy.get('span').contains("SafetBeg © 2021");
  })

  it('should contain about test', () => {
    cy.visit('http://localhost:3000/about')
    cy.get('.page').contains("About");
 })

 it('should contain burruret text', () => {
    cy.visit('http://localhost:3000/works/bururet')
    cy.get('.title--bururet').contains("Bururet");
  })

  it('should contain email text', () => {
    cy.visit('http://localhost:3000/contact')
    cy.get('.subtitle').contains("safetbeg2@gmail.com");
  })

  })
  