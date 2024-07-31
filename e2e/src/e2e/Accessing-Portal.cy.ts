import { getTitle } from '../support/app.po';

describe('Portal Ascepa', () => {
  beforeEach(() => cy.visit('https://portal-ascepa.vercel.app/'));

  it('Accessing Portal Ascepa', () => {
    // Para pegar o título do H1 "Portal-Ascepa"
    getTitle().contains('Portal-Ascepa');

    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000);
  });
});
