///<reference types="cypress"/>

describe('Funcionalidade Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer login com sucesso', () => {    
    cy.get('#username').type('testepaulier2@teste.com')
    cy.get('#password').type('Aketaton#1906')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, testepaulier2 (não é testepaulier2? Sair)')

  })


})