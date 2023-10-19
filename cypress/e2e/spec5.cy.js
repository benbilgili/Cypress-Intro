describe('spec 5', () => {
  it('visits the internet', () => {
    cy.visit('https://the-internet.herokuapp.com/')
  })
})

describe('spec 5', () => {
  it('can click on link to drag and drop', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains('Drag and Drop').click()
  })
})


describe('spec 5', () => {
  it('Can drag and drop', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.contains("Drag").click()
    
    const dragAndDrop = (id1, id2) => {
      const dataTransfer = new DataTransfer;
      cy.get(`#${id1}`).trigger('dragstart', {dataTransfer});
      cy.get(`#${id2}`).trigger('drop', {dataTransfer});
    }

    dragAndDrop('column-a', 'column-b');
    cy.wait(1000)
    dragAndDrop('column-b', 'column-a');
  })

})

