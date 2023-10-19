describe('spec 6', () => {
  it('can nav to TDG, login, select data, randomly choose options and submit', () => {
    cy.visit('https://develop.d3nylssqqiptjw.amplifyapp.com/')

    
    // Login (not usually required) - can I use an IF statement to determine whether it should run? 

    // cy.wait(1000)
    // cy.get('#email-input').click().type('joebloggs@gmail.com')
    // cy.get('#password-input').click().type('123456')
    // cy.get('#login-button').click()
    
    cy.get('.nav-links-container a').eq(1).click()


    // Function to click options 
    const clickOptions = (identifier, indexList) => {
      const newIndexList = [...indexList]
      newIndexList.sort(function(a, b){return a-b});

      cy.get(identifier).click()
      let count = 0; // negates the effect of the item being removed from the list (indexes all decreasing by 1)
      for (let item of newIndexList) {
        cy.get(`${identifier} .optionListContainer .optionContainer li`).eq(`${item - count}`).click();
        count++;
      }
      cy.contains('Number of entries').click(); // this is hacky. I don't like it
    }

  
    // Manually enetered the ids of the options and num of selections (could this be automated?)
    const headingsDict = {
      '#personal': 15,
      '#business': 2,
      '#financial': 13,
      '#residentialAddress': 7,
      '#mortgageRefs': 42,
      '#dateTime': 1,
      '#cars': 2,
      '#affordabilityData': 18,
      '#retailData': 15,
      '#medical': 12,
      '[id="smart meter data"]': 14, 
    }


    const headings = Object.keys(headingsDict);
    

    // Get a random number greater than zero. This will determine how many selections we will use
    let numOfSelections = Math.floor(Math.random() * (headings.length - 1)) + 1; // 8

    // console.log("Num of Selections: ", numOfSelections)

    let list = [];

    // pick (numOfSelection.length()) random numbers within the length of the list
    while (numOfSelections > 0) { 
      let selectionNum;
      do {
        selectionNum = Math.floor(Math.random() * headings.length);
      } while (list.includes(selectionNum));
    
      list.push(selectionNum);
      numOfSelections--;
    }

    list.sort(function(a, b){return a-b}); 
    console.log("List: ", list)


    for (let number of list) {
      console.log("NUMBER: ", number)
      const lengthOfHeading = (headingsDict[headings[number]] - 1)
      console.log("Length of heading: ", lengthOfHeading) 

      let numOfOptions = Math.floor(Math.random() * (lengthOfHeading - 1)) + 1; // get a random number for how many headings we will select (can't select 0)
      console.log("Num of Options: ", numOfOptions)

      let list = [];
      while (numOfOptions > 0) { // pick (numOfOptions.length()) random numbers within the length of the list
        let selectionNum;
        do {
          selectionNum = Math.floor(Math.random() * lengthOfHeading);
        } while (list.includes(selectionNum));
      
        list.push(selectionNum);
        numOfOptions--;
      }

      console.log("LIST: ", list)

      clickOptions(headings[number], list) 
    }

    // cy.contains('Submit Selected').click();
    // cy.get('#csv-json-btn').click();
    // cy.get('#generate-values').click();




    // can pull the file from downloads then manipulate it

  })
})