
describe('scénario de test d\'inscription réussie', () => {
    const totoNb = Math.floor(Math.random() * 100000000);

    it('Visit la page', () => { cy.visit('/register') });
    it('Accepte les cookies', () => { 
        cy.contains('C\'est OK pour moi').click();
    });
    it('Remplit bien le formulaire', () => {
        cy.get('#firstName').type(`TOTO${totoNb}`);
        cy.get('#lastName').type('JUST');
        cy.get('#signup-email').type(`toto${totoNb}@yopmail.com`);
        cy.get('#signup-password').type('AZERTYazerty1234');
        cy.get('._1FlppYfmmZAXDcViZEJC9j form').submit();
    });
    it('Visite son compte', () => {
        cy.contains('C\'est OK pour moi').click();
        cy.visit('/dashboard/profile');
        cy.contains('C\'est OK pour moi').click();
        cy.contains(`toto${totoNb}@yopmail.com`).should('exist');
    });
    
})
