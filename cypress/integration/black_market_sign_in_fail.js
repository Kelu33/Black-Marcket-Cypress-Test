
describe('scénario de test d\'inscription échouée', () => {

    it('Visit la page', () => { cy.visit('/register') });
    it('Accepte les cookies', () => { 
        cy.contains('C\'est OK pour moi').click();
    });
    it('Remplit mal le formulaire', () => {
        cy.get('#firstName').type('TOTO');
        cy.get('#lastName').type('JUST');
        cy.get('#signup-email').type('TOTOyopmail');
        cy.get('#signup-password').type('AZERTY');
        cy.get('._1FlppYfmmZAXDcViZEJC9j form').submit();
    });    
    it('Tente de visiter la page profile', () => {
        cy.visit('/dashboard/profile');
        cy.url().should('be.equal', 'https://preprod.backmarket.fr/register?next=%2Fdashboard%2Fprofile');
    });
    
})
