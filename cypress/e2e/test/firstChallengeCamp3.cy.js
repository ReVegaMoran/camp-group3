import { textBoxMethods } from "../pages/TextBox/textBox.methods";

describe('First challenge camp 3', () => {
    it('test case TextBox', () => {
        cy.visit('https://demoqa.com/text-box')
        textBoxMethods.testBox('username', 'email', 'currentAddress', 'permanentAddress')
    })
    it('test case CheckBox', () => {
        cy.visit('https://demoqa.com/checkbox')
        cy.get('li.btn').eq(1).click()
        cy.get('button[class="rct-collapse rct-collapse-btn"]').click();
        cy.get('.rct-node-expanded > :nth-child(1) > label > .rct-checkbox').click()
    })
    it('test case RadioBox', () => {
        cy.visit('https://demoqa.com/radio-button')
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click()
        cy.get('span.rct-checkbox').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-2').click()
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(2)').click()
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)').click()
    })
    it('test case Buttons', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.contains('span', 'Radio Button').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#rightClickBtn').rightclick()
        cy.get('.col-md-6 > :nth-child(2) > :nth-child(3)').find('button[type="button"]:contains("Click Me")').click()
    })
})