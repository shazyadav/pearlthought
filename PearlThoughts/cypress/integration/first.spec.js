// first.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Products api', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://example.cypress.io/todo')
        cy.fixture('example').then(function(signInData){
            this.signInData = signInData
        })
    })
      context('GET /produtos', () => {
    it('should return a list with all products', async () => {
        cy.log(this.signInData.email);
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public-api/users'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
                expect(response.isOkStatusCode).to.equal(true);
                expect(response).property('status').to.equal(200);
                expect(response.body).property('data')[0].property('id')
                    .to.equal(1);
                expect(response.body).property('data')[0].property('id')
                    .to.equal(1);
                //    cy.fixture('todo').then(api.assertSchema('PostTodoRequest', '1.0.0'))
            });

    });
     });
});