import { getTitle } from '../support/app.po';

describe('e2e', () => {
  beforeEach(() => cy.visit('https://portal-ascepa.vercel.app/'));

  it('Accessing Portal Ascepa no Interface.', () => {
    // Para pegar o título do H1 "Portal-Ascepa"
    getTitle().contains('Portal-Ascepa');
  });
});
