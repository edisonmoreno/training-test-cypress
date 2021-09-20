// training.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe(' Test', function() {
  it('Visits the Apiumhub Site', function() {
    cy.visit('https://apiumhub.com')
    cy.get('.dropdown-toggle').contains('About')
  })
 })
