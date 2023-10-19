describe('spec 3', () => {
  it('visits the internet', () => {
    cy.visit('https://the-internet.herokuapp.com/')
  })
})

describe('spec 3', () => {
  it('can click and navigate to Hovers', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Hovers').click()
  })
})

describe('spec 3', () => {
  it('can hover over first img to display text and click link', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Hovers').click()
    cy.get('#content div').eq(2).invoke('show')
    cy.contains('View profile').click()
  })
})