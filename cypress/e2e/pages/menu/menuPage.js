class MenuPage {
    open() {
        cy.visit("/menu#")
    }

    mainMenuItems() {
        return cy.get('#nav > li > a');
    }

    subMenuItems() {
        return cy.get('#nav > li > ul > li > a');
    }

    subSubMenuItems() {
        return cy.get('#nav > li > ul > li > ul > li > a');
    }
}

export default MenuPage