describe('template spec', () => {
  it('visits the internet', () => {
    cy.visit('https://the-internet.herokuapp.com/')
  })
})

describe('spec 2', () => {
  it('can click on link to add/remove element', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Add/Remove Elements').click()

  })
})


describe('spec 2', () => {
  it('can click to add and remove element', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Add/Remove Elements').click()
    cy.contains('Add Element').click()
    cy.contains('Delete').click()

  })
})