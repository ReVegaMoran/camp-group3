import { linksMethods } from "../pages/links/links.methods";

describe('Second challenge camp 3', () => {
    it('test case status links and important attributes', () => {
        cy.visit('https://demoqa.com/links')
        linksMethods.links('visitAndValidateLinkHome', 'visitAndValidateLinkDynamic')
    })
    it('test case text validation', () => {
        cy.visit('https://demoqa.com/links')
        linksMethods.links('validateLinkCreatedText', 'validateLinkNoContent', 'validateLinkMoved',
            'validateLinkBadRequest', 'validateLinkUnAuthorized', 'validateLinkForbidden',
            'validateLinkInvalidUrl')
    })
})