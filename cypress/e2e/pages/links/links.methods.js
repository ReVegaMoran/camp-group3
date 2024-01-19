import { linksElements } from "./links.elements";

export class linksMethods {
    static visitAndValidateLinkHome() {
        linksElements.links.linkHome.should('have.attr', 'href').then((href) => {
            linksElements.links.linkHome.should('have.attr', 'target', '_blank');
            cy.request(href).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
        linksElements.links.linkHome.invoke('removeAttr', 'target').click();
        cy.visit('https://demoqa.com/links');
    }

    static visitAndValidateLinkDynamic() {
        linksElements.links.linkDynami.should('have.attr', 'href').then((href) => {
            linksElements.links.linkDynami.should('have.attr', 'target', '_blank');
            cy.request(href).then((response) => {
                expect(response.status).to.eq(200);
            });
        });
        linksElements.links.linkDynami.invoke('removeAttr', 'target').click();
        cy.visit('https://demoqa.com/links');
    }

    static validateLinkCreatedText() {
        linksElements.links.linkCreated.click();
        cy.contains('Link has responded with staus 201 and status text Created');
    }

    static validateLinkNoContent() {
        linksElements.links.linkNoContent.click();
        cy.contains('Link has responded with staus 204 and status text No Content');
    }

    static validateLinkMoved() {
        linksElements.links.linkMoved.click();
        cy.contains('Link has responded with staus 301 and status text Moved Permanently');
    }

    static validateLinkBadRequest() {
        linksElements.links.linkBadRequest.click();
        cy.contains('Link has responded with staus 400 and status text Bad Request');
    }

    static validateLinkUnAuthorized() {
        linksElements.links.linkUnAuthorized.click();
        cy.contains('Link has responded with staus 401 and status text Unauthorized');
    }

    static validateLinkForbidden() {
        linksElements.links.linkForbidden.click();
        cy.contains('Link has responded with staus 403 and status text Forbidden');
    }

    static validateLinkInvalidUrl() {
        linksElements.links.linkInvalidUrl.click();
        cy.contains('Link has responded with staus 404 and status text Not Found');
    }

    static links() {
        this.visitAndValidateLinkHome();
        this.visitAndValidateLinkDynamic();
        this.validateLinkCreatedText();
        this.validateLinkNoContent();
        this.validateLinkMoved();
        this.validateLinkBadRequest();
        this.validateLinkUnAuthorized();
        this.validateLinkForbidden();
        this.validateLinkInvalidUrl();
    }
}