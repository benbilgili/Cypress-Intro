describe('spec 4', () => {
  it('visits the internet', () => {
    cy.visit('https://the-internet.herokuapp.com/')
  })
})

describe('spec 4', () => {
  it('can click on link to checkboxes', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Checkboxes').click()
  })
})

describe('spec 4', () => {
  it('can click each checkbox', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Checkboxes').click()
    cy.get('#checkboxes input:first').click()
    cy.get('#checkboxes input').eq(1).click()
    // cy.get('#checkboxes input:nth-child(1)').click() // work out how to get second one



    // cy.get('#checkboxes >input:nth-child(1)').click() // same thing. why wont it work for 2?
    // cy.contains(' checkbox 1').get('input[type="checkbox"]').check()
    // cy.contains(' checkbox 2 ').get('input[type="checkbox"]').uncheck()
    // cy.contains(' checkbox 1').get('input[type="checkbox"]').check()

  })
})