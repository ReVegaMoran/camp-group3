import SelectMenuPage from "../pages/menu/selectMenuPage.js";


describe('Select Menu Tests', () => {
    const selectMenuPage = new SelectMenuPage();

    beforeEach(() => {
        selectMenuPage.open();
    });

    it('Validate and select values in the Simple list', () => {
        selectMenuPage.selectValueInSimpleList('Volvo');
        selectMenuPage.selectValueInSimpleList('Saab');
        // ... otras validaciones
    });

    it('validate and select values in the Multi list', () => {
        selectMenuPage.selectValuesInMultiList(['Volvo', 'Saab']);
        // ... otras validaciones
    });

    it('Add and delete options in the Multiselect drop-down list', () => {
        selectMenuPage.addAndRemoveOptionsInMultiSelect();
        // ... otras validaciones
    });
});