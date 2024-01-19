export class linksElements {
    static get links() {
        return {
            get linkHome() {
                return cy.get('#simpleLink');
            },
            get linkDynami() {
                return cy.get('#dynamicLink');
            },
            get linkCreated() {
                return cy.get('#created');
            },
            get linkNoContent() {
                return cy.get('#no-content');
            },
            get linkMoved() {
                return cy.get('#moved');
            },
            get linkBadRequest() {
                return cy.get('#bad-request');
            },
            get linkUnAuthorized() {
                return cy.get('#unauthorized');
            },
            get linkForbidden() {
                return cy.get('#forbidden');
            },
            get linkInvalidUrl() {
                return cy.get('#invalid-url');
            },
        };
    }
}