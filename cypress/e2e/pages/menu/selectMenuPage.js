class SelectMenuPage {
    open() {
        cy.visit("/select-menu");
    }

    selectValueInSimpleList(value) {
        cy.get('#cars').select(value);
    }

    selectValuesInMultiList(values) {
        cy.get('#cars').select(values);
    }

    addAndRemoveOptionsInMultiSelect() {
        cy.get(':nth-child(7) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').select(['Volvo', 'Saab', 'Opel', 'Audi']);
        cy.get(':nth-child(7) > .col-md-6 > .css-2b097c-container > .css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').invoke('val', '').trigger('change');
    }

    verifyAttributesInInput() {
        cy.get('#autoComplete').should('have.attr', 'autocapitalize', 'off');
        cy.get('#autoComplete').should('have.attr', 'autocomplete', 'off');
        cy.get('#autoComplete').should('have.attr', 'autocorrect', 'off');
        cy.get('#autoComplete').should('have.attr', 'spellcheck', 'false');
        cy.get('#autoComplete').should('have.attr', 'aria-autocomplete', 'list');
    }
}

export default SelectMenuPage;