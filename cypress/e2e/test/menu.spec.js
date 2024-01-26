import MenuPage from "../pages/menu/menuPage.js";

describe('Menu in Demo QA', () => {
    const menuPage = new MenuPage();

    beforeEach(() => {
        menuPage.open();
    });

    it('Validation that the menu options exist', function() {
        menuPage.mainMenuItems().each($el => {
            // Comprueba si el enlace tiene el atributo 'href'
            cy.wrap($el).should('have.attr', 'href')
                // Comprueba que el enlace no está vacío
            cy.wrap($el).invoke('text').should('not.be.empty')
        })
    });

    it('Validation of the existence of menu sub-options', function() {
        menuPage.subMenuItems().each($el => {
            cy.wrap($el).should('have.attr', 'href')
            cy.wrap($el).invoke('text').should('not.be.empty')
        })
    });

    it('Validation of the existence of menu sub-sub-options', function() {
        menuPage.subSubMenuItems().each($el => {
            cy.wrap($el).should('have.attr', 'href')
            cy.wrap($el).invoke('text').should('not.be.empty')
        })
    });
});