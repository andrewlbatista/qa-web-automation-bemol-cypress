describe('Busca de produtos - Site Bemol', () => {

  beforeEach(() => {

    cy.visit('https://www.bemol.com.br')

  })

  it('Deve pesquisar um produto com sucesso', () => {

    cy.fixture('produtos').then((dados) => {

      cy.get('input[type="search"], input[type="text"]')
        .first()
        .should('be.visible')
        .click()
        .type(dados.produtoValido)

      cy.wait(1000)

      cy.get('body').type('{enter}')

      cy.wait(5000)

      cy.url().should('include', dados.produtoValido)

    })

  })

})