describe('Home - Site Bemol', () => {

  beforeEach(() => {

    cy.visit('https://www.bemol.com.br/')

  })

  it('Deve acessar a home da Bemol com sucesso', () => {

    cy.url().should('include', 'bemol.com.br')

    cy.get('body').should('be.visible')

  })

})