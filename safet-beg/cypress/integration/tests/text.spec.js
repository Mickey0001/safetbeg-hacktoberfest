/// <reference types="cypress" />

it('verifies all texts', ()=> {

    cy.visit('http://localhost:3000/')

    cy.get('h1').contains("@SafetBeg");

    cy.get('span').contains("SafetBeg © 2021");


    cy.visit('http://localhost:3000/about')

    cy.get('.page').contains("About");


    cy.visit('http://localhost:3000/works/bururet')

    cy.get('.title--bururet').contains("Bururet");


    cy.visit('http://localhost:3000/contact')

    cy.get('.subtitle').contains("safetbeg2@gmail.com");
  })
  