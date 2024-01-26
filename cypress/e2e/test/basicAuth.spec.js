describe('Login basic_auth', function() {
    const validUsername = 'admin';
    const validPassword = 'admin';
    const invalidUsername = 'invalidUser';
    const invalidPassword = 'invalidPass';

    it('Login with correct credentials, web element validation in basic auth', () => {
        cy.request({
            method: 'GET',
            url: 'https://the-internet.herokuapp.com/basic_auth',
            auth: {
                username: validUsername,
                password: validPassword
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.include('Congratulations');
        });
    });

    it('Login with incorrect credentials status 401', () => {
        cy.request({
            method: 'GET',
            url: 'https://the-internet.herokuapp.com/basic_auth',
            auth: {
                username: invalidUsername,
                password: invalidPassword
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body).to.include('Not authorized');
        });
    });
});