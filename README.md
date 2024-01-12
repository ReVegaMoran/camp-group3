Cypress Test Suite Documentation
This document provides an overview of the tests performed on the DemoQA website using Cypress.

Tests Performed
The tests have been divided into different blocks, each block targeting a specific functionality of the web components.

1. Test Case TextBox
In this test case, we visit the TextBox page and use a custom method to fill the form with the following data:

Username
Email
Current Address
Permanent Address

it('test case TextBox', () => {
    cy.visit('https://demoqa.com/text-box')
    textBoxMethods.testBox('username', 'email', 'currentAddress', 'permanentAddress')
})

2. Test Case CheckBox
In this test case, we visit the CheckBox page and perform several actions, including clicking on the button and selecting a checkbox from the list.

it('test case CheckBox', () => {
    cy.visit('https://demoqa.com/checkbox')
    cy.get('li.btn').eq(1).click()
    cy.get('button[class="rct-collapse rct-collapse-btn"]').click();
    cy.get('.rct-node-expanded > :nth-child(1) > label > .rct-checkbox').click()
})

3. Test Case RadioBox
In this test case, we visit the RadioBox page and perform several actions, including clicking on the radio buttons and selecting items from a list.

it('test case RadioBox', () => {
    cy.visit('https://demoqa.com/radio-button')
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
    cy.get('span.rct-checkbox').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click()
    cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)').click()
    cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)').click()
})

4. Test Case Buttons
In this test case, we visit the Buttons page and perform several actions, including clicking on the buttons and performing double clicks and right clicks.

it('test case Buttons', () => {
    cy.visit('https://demoqa.com/buttons')
    cy.contains('span', 'Radio Button').click()
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
    cy.get('#doubleClickBtn').dblclick()
    cy.get('#rightClickBtn').rightclick()
    cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)').find('button[type="button"]:contains("Click Me")').click()
})

How to Run These Tests
To run these tests, you will need to have Cypress installed. After cloning or downloading this repository, you can install the dependencies with npm (Node Package Manager) using npm install from the command line. You can run the tests using npx cypress open to open the Cypress panel and then select the test file to run it.

Please refer to the Cypress documentation for more detailed instructions on how to