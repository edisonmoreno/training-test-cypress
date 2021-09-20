// training-api.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
it('returns JSON', () => {
  cy.request('breeds/image/random')
    .its('headers')
    .its('content-type')
    .should('include', 'application/json')
 })
 it('Validate the status', () => {
   cy.request('breeds/image/random')
  .its('status')
        .should('equal',200);
 })