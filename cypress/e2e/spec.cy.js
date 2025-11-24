describe('Teste simples', () => {
  it('Acessar site e validar texto', () => {
    cy.visit('https://www.inter.co')
    //cy.contains('Kitchen Sink').should('be.visible')
    cy.get('#onetrust-accept-btn-handler').click();

  })
})
