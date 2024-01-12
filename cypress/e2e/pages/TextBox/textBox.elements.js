export class textBoxElements {
    static get textBoxes() {
        return {
            get fullName() {
                return cy.get('#userName');
            },
            get userEmail() {
                return cy.get('#userEmail');
            },
            get currentAddress() {
                return cy.get('#currentAddress');
            },
            get permanentAddress() {
                return cy.get('#permanentAddress');
            },
        };
    }

    static get buttons() {
        return {
            get submit() {
                return cy.get('#submit');
            },
        }
    }
}