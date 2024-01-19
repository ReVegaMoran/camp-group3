export class modalDialogsElements {
    static get modalDialogs() {
        return {
            get x() {
                return cy.contains('span', '×');
            },
            get showLargeModal() {
                return cy.get('#showLargeModal');
            },
        };
    }

    static get buttons() {
        return {
            get showSmallModal() {
                return cy.get('#showSmallModal');
            },
            get showLargeModal() {
                return cy.get('#showLargeModal');
            },
            get closeSmallModal() {
                return cy.get('#closeSmallModal');
            },
        }
    }
}