describe('Login Tests', function() {
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';

    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/login');
    });

    it('In login validate the displayed fields and texts', () => {
        cy.get('h2').should('contain.text', 'Login Page');
        cy.get('label[for="username"]').should('contain.text', 'Username');
        cy.get('label[for="password"]').should('contain.text', 'Password');
        cy.get('button').should('contain.text', 'Login');
    });

    it('Successful login and validation of displayed items', () => {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button').click();
        cy.get('.flash.success').should('contain.text', 'You logged into a secure area!');
        cy.get('h2').should('contain.text', 'Secure Area');
        cy.get('a.button.secondary', { timeout: 10000 }).should('contain.text', 'Logout');
    });

    it('Logout button status code validation', () => {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button').click();
        cy.contains('i', ' Logout').click();
        cy.request({
            url: 'https://the-internet.herokuapp.com/secure'
        }).then((respuesta) => {
            expect(respuesta.status).to.eq(200)
        })
    });

    it('Press the Logout button and display the corresponding alert', () => {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button').click();
        cy.get('a.button.secondary', { timeout: 10000 }).click();
        cy.get('.flash.success').should('contain.text', 'You logged out of the secure area!');
    });

    it('Display the corresponding alert when entering incorrect credentials', () => {
        cy.get('#username').type('usuarioIncorrecto');
        cy.get('#password').type('claveIncorrecta');
        cy.get('button').click();
        cy.get('.flash.error').should('contain.text', 'Your username is invalid!');
    });

    it('Close the alerts by pressing the icon (x)', () => {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button').click();
        cy.get('.flash.success', { timeout: 10000 }).should('contain.text', 'You logged into a secure area!');
        cy.get('.flash.success .close').click();
        cy.get('.flash.success').should('not.exist');
    });
});